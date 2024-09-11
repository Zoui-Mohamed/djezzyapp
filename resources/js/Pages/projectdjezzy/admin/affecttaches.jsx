import "./admin.css";
import search from '../images/search-line (2).png';
import plus from '../images/plus.png';
import evaluation from "../images/list-ordered.png";
import done from "../images/check-double-line.png";
import Affectduree from "./affectdurretache";
import { useState } from "react";
import Affectemployer from "./affectemployertaches";
import Traficmanager from "./traficmanager";



function Affecttation(){
    const [openpopup,setopenpopup]=useState(false);

    const editpopup = (newopenpopup) => {
        setopenpopup(newopenpopup);
    };

    const [openpopupedit,setopenpopupedit]=useState(false);

    const editpopupedit = (newopenpopupedit) => {
        setopenpopupedit(newopenpopupedit);
    };

    return(
        <Traficmanager>
     <div >
         {
    openpopup && <Affectduree editpopup= {editpopup}></Affectduree>
    }
     {
    openpopupedit && <Affectemployer editpopupedit= {editpopupedit}></Affectemployer>
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
               <h1 className="consultertitle">Nom Taches</h1>
               <h1 className="consultertitle">Duree des Taches</h1>
               <h1 className="consultertitle">Employer Taches</h1>
           </div>
   
           <div className="consultercontainer">
               <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
               <h1 className="consulterdate">Suivie Des Projet</h1>
               <div className="aechiverpluss" onClick={()=>setopenpopup(true)}>
                   <h1 className="affichertitleee">Affecter</h1>
               </div>
               <div className="aechiverplusss" onClick={()=>setopenpopupedit(true)}>
                   <h1 className="affichertitleee">Affecter</h1>
               </div>
           </div>
           <div className="verticalline"></div>
           <div className="consultercontainer">
               <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
               <h1 className="consulterdate">Suivie Des Projet</h1>
               <div className="aechiverpluss" onClick={()=>setopenpopup(true)}>
                   <h1 className="affichertitleee">Affecter</h1>
               </div>
               <div className="aechiverplusss" onClick={()=>setopenpopupedit(true)}>
                   <h1 className="affichertitleee">Affecter</h1>
               </div>
           </div>
           <div className="verticalline"></div><div className="consultercontainer">
               <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
               <h1 className="consulterdate">Suivie Des Projet</h1>
               <div className="aechiverpluss" onClick={()=>setopenpopup(true)}>
                   <h1 className="affichertitleee">Affecter</h1>
               </div>
               <div className="aechiverplusss" onClick={()=>setopenpopupedit(true)}>
                   <h1 className="affichertitleee">Affecter</h1>
               </div>
           </div>
           <div className="verticalline"></div><div className="consultercontainer">
               <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
               <h1 className="consulterdate">Suivie Des Projet</h1>
               <div className="aechiverpluss">
                   <h1 className="affichertitleee" onClick={()=>setopenpopup(true)}>Affecter</h1>
               </div>
               <div className="aechiverplusss" onClick={()=>setopenpopupedit(true)}>
                   <h1 className="affichertitleee">Affecter</h1>
               </div>
           </div>
           <div className="verticalline"></div><div className="consultercontainer">
               <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
               <h1 className="consulterdate">Suivie Des Projet</h1>
               <div className="aechiverpluss">
                   <h1 className="affichertitleee" onClick={()=>setopenpopup(true)}>Affecter</h1>
               </div>
               <div className="aechiverplusss" onClick={()=>setopenpopupedit(true)}>
                   <h1 className="affichertitleee">Affecter</h1>
               </div>
           </div>
           <div className="verticalline"></div><div className="consultercontainer">
               <h1 className="consulterelement">Gestion Et Suivie Des Projet</h1>
               <h1 className="consulterdate">Suivie Des Projet</h1>
               <div className="aechiverpluss">
                   <h1 className="affichertitleee" onClick={()=>setopenpopup(true)}>Affecter</h1>
               </div>
               <div className="aechiverplusss" onClick={()=>setopenpopupedit(true)}>
                   <h1 className="affichertitleee">Affecter</h1>
               </div>
           </div>
       </div>
       </div>
       </Traficmanager>
       )
}


export default Affecttation;