import "./admin.css";
import search from '../images/search-line (2).png';
import plus from '../images/plus.png';
import evaluation from "../images/list-ordered.png";
import Evaprojet from "./evaprojet";
import { useState } from "react";




function Evaluerprojet(){
    const [openpopup,setopenpopup]=useState(false);

    const editpopup = (newopenpopup) => {
        setopenpopup(newopenpopup);
    };



    return(
     <div >
               {
    openpopup && <Evaprojet editpopup= {editpopup}></Evaprojet>
    }
        <div className="search-bar">
    <input class="search" type="search" placeholder="Search Here" />
    <div className="search-img">
        <img src={search} className="searchim"></img>
    </div>
    </div>
    <div className="consulterprojet">
        <div className="consulterheader">
            <h1 className="consultertitle">Project</h1>
            <h1 className="consultertitle">Directeur generale</h1>
            <h1 className="consultertitle">Evaluer</h1>
            <h1 className="consultertitle">Chef de projet</h1>
        </div>

        <div className="consultercontainer">
            <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
            <h1 className="consulterdate">18/04/2024</h1>
            <div className="aechiverplus" onClick={()=>setopenpopup(true)}>
                <img src={evaluation} className="timer"></img>
                <h1 className="affichertitle">Evaluer</h1>
            </div>
            <h1 className="consulterelement">Djalil Mahmoud</h1>
        </div>
        <div className="verticalline"></div>
        <div className="consultercontainer">
            <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
            <h1 className="consulterdate">18/04/2024</h1>
            <div className="aechiverplus" onClick={()=>setopenpopup(true)}>
                <img src={evaluation} className="timer"></img>
                <h1 className="affichertitle">Evaluer</h1>
            </div>
            <h1 className="consulterelement">Djalil Mahmoud</h1>
        </div>
        <div className="verticalline"></div><div className="consultercontainer">
            <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
            <h1 className="consulterdate">18/04/2024</h1>
            <div className="aechiverplus" onClick={()=>setopenpopup(true)}>
                <img src={evaluation} className="timer"></img>
                <h1 className="affichertitle">Evaluer</h1>
            </div>
            <h1 className="consulterelement">Djalil Mahmoud</h1>
        </div>
        <div className="verticalline"></div><div className="consultercontainer">
            <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
            <h1 className="consulterdate">18/04/2024</h1>
            <div className="aechiverplus" onClick={()=>setopenpopup(true)}>
                <img src={evaluation} className="timer"></img>
                <h1 className="affichertitle">Evaluer</h1>
            </div>
            <h1 className="consulterelement">Djalil Mahmoud</h1>
        </div>
        <div className="verticalline"></div><div className="consultercontainer">
            <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
            <h1 className="consulterdate">18/04/2024</h1>
            <div className="aechiverplus" onClick={()=>setopenpopup(true)}>
                <img src={evaluation} className="timer"></img>
                <h1 className="affichertitle">Evaluer</h1>
            </div>
            <h1 className="consulterelement">Djalil Mahmoud</h1>
        </div>
        <div className="verticalline"></div><div className="consultercontainer">
            <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
            <h1 className="consulterdate">18/04/2024</h1>
            <div className="aechiverplus" onClick={()=>setopenpopup(true)}>
                <img src={evaluation} className="timer"></img>
                <h1 className="affichertitle">Evaluer</h1>
            </div>
            <h1 className="consulterelement">Djalil Mahmoud</h1>
        </div>
    </div>
    </div>
    )
}


export default Evaluerprojet;