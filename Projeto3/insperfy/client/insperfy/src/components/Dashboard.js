import { useEffect, useState } from "react"
import React from "react"
import axios from "axios"
import TrackSearchResult from "./TrackSeacrhResults";
import "../static/Dashboard.css"
import TopMenu from "./topMenu";
import Player from "./Player";






export default function Dashboard({ token }) {
    var Spotify = require('spotify-web-api-js');
    var spotifyApi = new Spotify();


    const Accesstoken = token;
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState();

    function chooseTrack(track) {
        setPlayingTrack(track);
        setSearch("")
    }


    useEffect(() => {
        if (!token) return
        spotifyApi.setAccessToken(token)
    }, [token])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!token) return
        let cancel = false;
        (async () => {
            const response = await spotifyApi.searchTracks(search)
            if (cancel) return
            setSearchResults(response.tracks.items.map(track => {
                const smallestAlbumImage = track.album.images.reduce(
                    (smallest, image) => {
                        if (image.height < smallest.height) return image
                        return smallest
                    },
                    track.album.images[0]
                )
                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url,
                }
            })
            )
        }
        )()
        return () => cancel = true
    }, [search, token])



    return (
        <div className="dashboard">
            <TopMenu />
            <div className="dashboard-search">
                <input
                    className="search-bar"
                    id={"bar"}
                    type="search"
                    placeholder="Procurar música"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    autoComplete="false"
                />
                <div className="lista" id={"results"}>
                    {searchResults.slice(0, 5).map(track => (
                        <TrackSearchResult
                            track={track}
                            key={track.uri}
                            chooseTrack={chooseTrack}
                        />
                    ))}
                </div>
            </div>
            <div  className="dashboard-player">
                <Player accessToken={Accesstoken} trackUri={playingTrack?.uri} />
            </div>
        </div>
    )
}