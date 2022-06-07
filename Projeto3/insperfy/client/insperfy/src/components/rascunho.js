<Form.Control
    className="search-bar"
    type="search"
    placeholder="Procurar música"
    value={search}
    onChange={e => setSearch(e.target.value)}
/>
<div className="lista">
    {searchResults.map(track => (
        <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
        />
    ))}
    {searchResults.length === 0 && (
        <div className="text-center" style={{whiteSpace: "pre"}}>
            {lyrics}
        </div>
    )}
</div>
<div>
    Player accessToken={accessToken} trackUri={playingTrack?.uri}/>*!/
</div>
