import "./App.css";
import Card from "./components/Card/card";
import Header from "./components/Header/header";
import SignUp from "./components/Signup/signup";
import Login from "./components/Login/login";
import Profile from './components/Profile/profile'
function App() {
  return (
    <div>
      <Header />
      <Profile />

      {/* <Card />
      {/* <SignUp /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
