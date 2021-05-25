import './App.css';
import Header from './components/Header/Header';
import Messages from './components/Messages/Messages';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
  debugger;
  return (
    <BrowserRouter>
      <div className="App">

        <Header />
        <Navbar />
        
        <Route path="/Profile" render={() => <Profile postsData={props.postsData} dispatch = {props.dispatch} postValue={props.postValue} />} />
        <Route path= "/Messages" render={()=><Messages pageMessages={props.pageMessages} dispatch = {props.dispatch}/>} />
        <Route path= "/Music" component={Music}/>
        <Route path= "/Settings" component={Settings}/>
        <Route path= "/News" component={News}/>


      </div>
    </BrowserRouter>
  );
}

export default App;
