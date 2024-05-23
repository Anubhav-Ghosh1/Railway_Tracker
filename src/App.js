import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Home/>
      {/* {
        !isAuthenticated ? <Login loginWithRedirect={loginWithRedirect}/> : (<div><Home user={user} logout={logout}/></div>)
      } */}
    </div>
  );
}

export default App;
