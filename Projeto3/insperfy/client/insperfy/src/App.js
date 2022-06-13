import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Box from '@mui/material/Box';
import {useState, useEffect} from 'react'
import {
  Routes,
  Route
} from "react-router-dom";
function App() {

  const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])
  return (
    <div className="App">
    <Box sx={{ height : "100vh"}}>
      {token ? 
      <Routes>
        <Route path="/" element={<Dashboard token={token}/>} />
        <Route path="topSongs" element={<div>How to play</div>} />
      </Routes>
      : <Login />}
    

    </Box>
    </div>

  );
}

export default App;
