
import Login from './components/Insperfy/paginaLogin';
import Gerador from './components/Insperfy/paginaGerador';
import SearchBar from './components/Insperfy/Dashboard';
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
