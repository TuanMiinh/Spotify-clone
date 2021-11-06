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
import UploadPage from './UploadPage/UploadPage';

function App() {
  return (

        
    <Router>
        <Switch>
            <Route exact path='/'>
                <div className='main'>
                    <SideBar/>
                    <BodyMain/>
                    <Footer/>
                </div>
            </Route>

            <Route path='/search'>
                <div className='main'>  
                    <SideBar/>
                    <BodySearch/>
                    <Footer/>
                </div>
            </Route>

            <Route path='/collection/playlists'>
                <div className='main'>
                    <SideBar/>
                    <Playlist/>
                    <Footer/>
                </div>
            </Route>

            <Route path='/collection/podcast'>
                <div className='main'>
                    <SideBar/>
                    <PodCast/>
                    <Footer/>
                </div>
            </Route>

            <Route path='/collection/authors'>
                <div className='main'>
                    <SideBar/>
                    <Author/>
                    <Footer/>
                </div>
            </Route>

            <Route path='/collection/album'>
                <div className='main'>
                    <SideBar/>
                    <Album/>
                    <Footer/>
                </div>
            </Route>

            <Route exact path='/playlist'>
                <div className='main'>
                    <SideBar/>
                    <BodyPlayList/>
                    <Footer/>
                </div>
            </Route>

            <Route path='/tracks'>
                <div className='main'>
                    <SideBar/>
                    <BodyFouvorite/>
                    <Footer/>
                </div>
            </Route>

            <Route path='/album'>
                <div className='main'>
                    <SideBar/>
                    <BodyPlaySong/>
                    <Footer/>
                </div>
            </Route>

            <Route path='/playlist'>
                <div className='main'>
                    <SideBar/>
                    <BodyPlayListSong/>
                    <Footer/>
                </div>
            </Route>

            <Route exact path='/login'>
                <div className='main'>
                    <LoginForm/>
                </div>
            </Route>
        
            <Route exact path='/upload'>
                <UploadPage/>
            </Route>
        </Switch>
        
        
        
    </Router>
    
      
      
  );
}





export default App;
