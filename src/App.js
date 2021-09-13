import logo from './logo.svg';
import './App.css';
import SideBar from './Component/SideBar/SideBar';
import Footer from './Component/Footer/Footer';
import BodyMain from './BodyMain/BodyMain';
import BodySearch from './BodySearch/BodySearch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BodyPlayList from './BodyPlayList/BodyPlayList';
import BodyFouvorite from './BodyFouvorite/BodyFouvorite';
import Playlist from './BodyLibrary/ChildPage/Playlist';
import BodyPlaySong from './BodyPlaySong/BodyPlaySong';
import BodyPlayListSong from './BodyPlayListSong/BodyPlayListSong';

function App() {
  return (

    
        <Router>
        <div className='main'>
          <SideBar/>
          
          <Switch>
            <Route exact path='/'>
                <BodyMain/>
            </Route>

            <Route path='/search'>
                <BodySearch/>
            </Route>

            <Route path='/collection/playlists'>
                <Playlist/>
            </Route>

            <Route exact path='/playlist'>
                <BodyPlayList/>
            </Route>

            <Route path='/collection'>
                <BodyFouvorite/>
            </Route>

            <Route path='/album'>
                <BodyPlaySong/>
            </Route>

            <Route path='/playlist/1'>
                <BodyPlayListSong/>
            </Route>

          </Switch>
          
          <Footer/>
        </div>
      </Router>
    
    
      
  );
}





export default App;
