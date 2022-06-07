
import Login from './components/Insperfy/Login';
import Das from './components/Insperfy/Dashboard';
import Box from '@mui/material/Box';


function App() {
  const code = new URLSearchParams(window.location.search).get('code');

  return (
    <Box sx={{ height : "100vh"}}>
      {code ? <SearchBar code={code} /> : <Login />}
    </Box>
  );
}

export default App;
