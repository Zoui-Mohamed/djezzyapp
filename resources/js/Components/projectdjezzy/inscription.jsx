import Logo from './images/DjezzyLogo copie.png';
import Inter from './images/djezzy-interface.png';
import { useTypewriter , Cursor } from "react-simple-typewriter";
import "./inc.css";

function Inscription() {
   const [text]= useTypewriter({
    words: ['Djezzy Team',],
    loop:{},
    typeSpeed:120,
   })
    return (
      <div className="body">
        <div className="header">
              <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className='container'>
            <h1 className='title'>Connect Your Team , Task & Project <br></br>Together With <span>{text}</span> <span><Cursor cursorStyle='_'></Cursor></span> </h1>
            <p className='par'>to ensure a good project and have a well-connected <br></br>
            team,let's beggin </p>
            <div className='formulaire'>
                   <h1 className='titlewelcome'>Welcome , Who Are You ???</h1>
                   <input placeholder="Enter your Email" class="input" name="text" type="text"></input>
                   <input placeholder="Enter your Password" class="input" name="text" type="text"></input>
                   <button className='button'> <span>Connexion</span> </button>
            </div>
            <div className="footer">
              <img src={Inter} alt="logo" className="inter" />
        </div>
        </div>
      </div>
    );
  }
  
  export default Inscription;