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
import LoginForm from './LoginForm/LoginForm';

function App() {
  return (

        
    <Router>
        <div className='main'>
          
          
          <Switch>
            <Route exact path='/'>
                <SideBar/>
                <BodyMain/>
                <Footer/>
            </Route>

            <Route path='/search'>
                <SideBar/>
                <BodySearch/>
                <Footer/>
            </Route>

            <Route path='/collection/playlists'>
                <SideBar/>
                <Playlist/>
                <Footer/>
            </Route>

            <Route path='/collection/podcast'>
                <SideBar/>
                <PodCast/>
                <Footer/>
            </Route>

            <Route path='/collection/authors'>
                <SideBar/>
                <Author/>
                <Footer/>
            </Route>

            <Route path='/collection/album'>
                <SideBar/>
                <Album/>
                <Footer/>
            </Route>

            <Route exact path='/playlist'>
                <SideBar/>
                <BodyPlayList/>
                <Footer/>
            </Route>

            <Route path='/tracks'>
                <SideBar/>
                <BodyFouvorite/>
                <Footer/>
            </Route>

            <Route path='/album'>
                <SideBar/>
                <BodyPlaySong/>
                <Footer/>
            </Route>

            <Route path='/playlist/'>
                <SideBar/>
                <BodyPlayListSong/>
                <Footer/>
            </Route>

            <Route exact path='/login'>
                <LoginForm/>
            </Route>

          </Switch>
          
          
        </div>


        
        
        
    </Router>
    
      
      
  );
}





export default App;
