import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Box from '@mui/material/Box';


function App() {
  const code = new URLSearchParams(window.location.search).get('code');

  return (
    <Box sx={{ height : "100vh"}}>
      {code ? <Dashboard code={code} /> : <Login />}
    </Box>
  );
}

export default App;
