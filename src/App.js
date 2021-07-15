import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import MessagesContainer from "./components/Messages/MessagesContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <HeaderContainer />
        <Navbar />
        
        <Route path="/Profile/:userId" render={() => <ProfileContainer />} />
        <Route path= "/Messages" render={()=> <MessagesContainer />} />
        <Route path= "/Music" component={Music}/>
        <Route path= "/Settings" component={Settings}/>
        <Route path= "/News" component={News}/>
        <Route path= "/Users" component={() => <UsersContainer />}/>
        <Route path= "/login" component={() => <Login />}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
