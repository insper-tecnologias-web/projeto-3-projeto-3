import {useEffect, useState} from "react"
import useAuth from "../components/useAuth"
import Player from "../components/Player"
import TrackSearchResult from "../components/TrackSeacrhResults"
import {Container, Form} from "react-bootstrap"
import SpotifyWebApi from "spotify-web-api-node"
import "../static/Dashboard.css"
import { AutoComplete } from 'antd';
const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_CLIENT_ID,
    clientSecret: process.env.REACT_APP_CLIENT_SECRET,
})

export default function Dashboard({code}) {
    const accessToken = useAuth(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()
    const [lyrics, setLyrics] = useState("")

    function chooseTrack(track) {
        setPlayingTrack(track)
        setSearch("")
        setLyrics("")
    }


    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        let cancel = false
        spotifyApi.searchTracks(search).then(res => {
            if (cancel) return
            setSearchResults(
                res.body.tracks.items.map(track => {
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
        })

        return () => (cancel = true)
    }, [search, accessToken])

    return (

            {/*<Form.Control*/}
            {/*    className="search-bar"*/}
            {/*    type="search"*/}
            {/*    placeholder="Procurar música"*/}
            {/*    value={search}*/}
            {/*    onChange={e => setSearch(e.target.value)}*/}
            {/*/>*/}
            {/*<div className="lista">*/}
            {/*    {searchResults.map(track => (*/}
            {/*        <TrackSearchResult*/}
            {/*            track={track}*/}
            {/*            key={track.uri}*/}
            {/*            chooseTrack={chooseTrack}*/}
            {/*        />*/}
            {/*    ))}*/}
            {/*    {searchResults.length === 0 && (*/}
            {/*        <div className="text-center" style={{whiteSpace: "pre"}}>*/}
            {/*            {lyrics}*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}
            {/*/!*<div>*!/*/}
            {/*/!*    <Player accessToken={accessToken} trackUri={playingTrack?.uri}/>*!/*/}
            {/*/!*</div>*!/*/}
        </Container>
    )
}