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
import PodCast from './BodyLibrary/ChildPage/PodCast';
import Author from './BodyLibrary/ChildPage/Author';
import Album from './BodyLibrary/ChildPage/Album';

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

            <Route path='/collection/podcast'>
                <PodCast/>
            </Route>

            <Route path='/collection/authors'>
                <Author/>
            </Route>

            <Route path='/collection/album'>
                <Album/>
            </Route>

            <Route exact path='/playlist'>
                <BodyPlayList/>
            </Route>

            <Route path='/tracks'>
                <BodyFouvorite/>
            </Route>

            <Route path='/album'>
                <BodyPlaySong/>
            </Route>

            <Route path='/playlist/'>
                <BodyPlayListSong/>
            </Route>

          </Switch>
          
          <Footer/>
        </div>
      </Router>
    
    
      
  );
}





export default App;
