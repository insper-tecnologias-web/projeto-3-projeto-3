import React from "react"
import "../static/TrackSearchResult.css"

export default function TrackSearchResult({track, chooseTrack}) {
    function handlePlay() {
        chooseTrack(track)
    }

    return (
        <div
            className="track-search-result"
            style={{cursor: "pointer", paddingLeft: "0.5rem",paddingBottom: "0.5rem",paddingTop: "0.5rem"}}
            onClick={handlePlay}
        >
            <img src={track.albumUrl} style={{height: "64px", width: "64px", borderRadius: "8px"}}/>
            <div className="track-search-result-info">
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
        </div>
    )
}