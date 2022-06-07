import React from "react"

export default function TopMenu() {
    return (
        <div className="top-menu" style={{backgroundColor: "#f5f5f5", height:"10vh", width: "100%"}}>
            <div className="top-menu-item">
                <a href="/">
                    <img src="/static/logo.png" alt="Insperfy" />
                </a>
            </div>
            <div className="top-menu-item">
                <a href="/topmusicas">
                    <div className="top-menu-item-text">Top Músicas</div>
                </a>
            </div>
        </div>
    )
}
