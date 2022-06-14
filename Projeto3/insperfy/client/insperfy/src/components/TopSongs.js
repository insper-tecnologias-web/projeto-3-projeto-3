import { useEffect, useState } from "react"
import React from "react"
import axios from "axios"
import TrackSearchResult from "./TrackSeacrhResults";
import "../static/Dashboard.css"
import TopMenu from "./topMenu";
import Player from "./Player";


export default function TopSongs() {
    return (
        <div className="topSongs">
            <p className="topSongsTitle">Top Songs</p>
        </div>
    )
}
