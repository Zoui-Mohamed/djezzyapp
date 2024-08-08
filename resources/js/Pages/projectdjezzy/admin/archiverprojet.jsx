import "./admin.css";
import search from '../images/search-line (2).png';
import plus from '../images/plus.png';

function Archiverprojet(){
    return(
     <div >
        <div className="search-bar">
    <input class="search" type="search" placeholder="Search Here" />
    <div className="search-img">
        <img src={search} className="searchim"></img>
    </div>
    </div>
    <div className="consulterprojet">
        <div className="consulterheader">
            <h1 className="consultertitle">Project</h1>
            <h1 className="consultertitle">Date debut</h1>
            <h1 className="consultertitle">Historique</h1>
            <h1 className="consultertitle">Chef de projet</h1>
        </div>

        <div className="consultercontainer">
            <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
            <h1 className="consulterdate">18/04/2024</h1>
            <div className="aechiverplus">
                <img src={plus} className="timer"></img>
                <h1 className="affichertitle">Afficher</h1>
            </div>
            <h1 className="consulterelement">Djalil Mahmoud</h1>
        </div>
        <div className="verticalline"></div>
        <div className="consultercontainer">
            <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
            <h1 className="consulterdate">18/04/2024</h1>
            <div className="aechiverplus">
                <img src={plus} className="timer"></img>
                <h1 className="affichertitle">Afficher</h1>
            </div>
            <h1 className="consulterelement">Djalil Mahmoud</h1>
        </div>
        <div className="verticalline"></div><div className="consultercontainer">
            <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
            <h1 className="consulterdate">18/04/2024</h1>
            <div className="aechiverplus">
                <img src={plus} className="timer"></img>
                <h1 className="affichertitle">Afficher</h1>
            </div>
            <h1 className="consulterelement">Djalil Mahmoud</h1>
        </div>
        <div className="verticalline"></div><div className="consultercontainer">
            <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
            <h1 className="consulterdate">18/04/2024</h1>
            <div className="aechiverplus">
                <img src={plus} className="timer"></img>
                <h1 className="affichertitle">Afficher</h1>
            </div>
            <h1 className="consulterelement">Djalil Mahmoud</h1>
        </div>
        <div className="verticalline"></div><div className="consultercontainer">
            <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
            <h1 className="consulterdate">18/04/2024</h1>
            <div className="aechiverplus">
                <img src={plus} className="timer"></img>
                <h1 className="affichertitle">Afficher</h1>
            </div>
            <h1 className="consulterelement">Djalil Mahmoud</h1>
        </div>
        <div className="verticalline"></div><div className="consultercontainer">
            <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
            <h1 className="consulterdate">18/04/2024</h1>
            <div className="aechiverplus">
                <img src={plus} className="timer"></img>
                <h1 className="affichertitle">Afficher</h1>
            </div>
            <h1 className="consulterelement">Djalil Mahmoud</h1>
        </div>
    </div>
    </div>
    )
}


export default Archiverprojet;