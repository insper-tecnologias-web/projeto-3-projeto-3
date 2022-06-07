import React from "react";
import useAuth from "../../useAuth.js";
import Header from "./header";
import SearchBar from "./searchBar";
export default function Gerador({code}){
    return(
        <div>
            <Header />
            <SearchBar code={code}/>
        </div>
    )
}