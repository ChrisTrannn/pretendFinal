import './Home.css'
import HowToVideo from '../assets/tap2playhowto.mp4';
import Tap2PlayLogo from '../assets/tap2playlogo.png';
import beachCartoon from '../assets/beachCartoon.jpg';
import marinaCartoon from '../assets/marinaCartoon.jpg'
import constructionCartoon from '../assets/constructionCartoon.jpg'
import traderJoesCartoon from '../assets/traderJoesCartoon.jpeg'

const Home = () => {
  return (
    <div>

        <div className="header">
            <img className='item tap2playlogo' src={Tap2PlayLogo}></img>
            <div className='item headerTitle'>Tap2Play</div>
        </div>

        <div className="title">Learning Zones</div>
        <div className="learningCards">
            <div className="learningCard">
                <img src={beachCartoon}></img>
                <div className="learningCardTitle">Beach</div>
            </div>
            <div className="learningCard">
                <img src={marinaCartoon}></img>
                <div className="learningCardTitle">Marina</div>
            </div>
        </div>
        <div className="learningCards">
            <div className="learningCard">
                <img src={constructionCartoon}></img>
                <div className="learningCardTitle">Construction</div>
            </div>
            <div className="learningCard">
                <img src={traderJoesCartoon}></img>
                <div className="learningCardTitle">Trader Joes</div>
            </div>
        </div>

        <div className="title">How It Works</div>
        <div className='videoContainer'>
            <video muted="true" controls>
                <source src={HowToVideo} type='video/mp4' auto></source>
            </video>
        </div>

        <div className="title">Information</div>
        <div className="infoCards">
            <div className="infoCard">
                <img></img>
                <div className="infoCardTitle">Map of Museum</div>
                <div className='infoCardText'>Click to view Tap2Play signs in the museum</div>
            </div>
            <div className='infoCard'>
            <img></img>
                <div className="infoCardTitle">About Tap2Play</div>
                <div className='infoCardText'>Click to learn more about the Tap2Play team</div>
            </div>
        </div>
        <div className="adultsCard">
            <div className="adultsCardTitle">Why Adults Should Tap2Play</div>
            <div className="adultsCardText">
                Tap2Play is an invaluable tool for parents visiting a kids' museum as it 
                significantly enhances their child's learning experience. By using Tap2Play,
                parents can access a wealth of educational information and engaging videos 
                tailored specifically for children. By incorporating multimedia content and
                offering a customizable learning experience, Tap2Play empowers parents to 
                support their child's education while exploring the museum, ensuring a memorable 
                and educational visit for the whole family.
            </div>
        </div>

    </div>
  );
}

export default Home;