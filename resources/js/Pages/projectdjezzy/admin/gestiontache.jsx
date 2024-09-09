import "./admin.css";
import search from '../images/search-line (2).png';
import plus from '../images/plus.png';
import delet from '../images/delete-bin-6-line (1).png';
import edit from '../images/edit-box-fill (1).png';
import timer from '../images/timer-line.png';
import { useState } from "react";
import Ajoutertache from "./ajoutertaches";
import Modifiertache from "./modifiertaches";



function Gestiontaches(){
    const [openpopup,setopenpopup]=useState(false);

    const editpopup = (newopenpopup) => {
        setopenpopup(newopenpopup);
    };

    const [openpopupedit,setopenpopupedit]=useState(false);

    const editpopupedit = (newopenpopupedit) => {
        setopenpopupedit(newopenpopupedit);
    };

    return(
     <div >
         {
    openpopup && <Ajoutertache editpopup= {editpopup}></Ajoutertache>
    }
     {
    openpopupedit && <Modifiertache editpopupedit= {editpopupedit}></Modifiertache>
    }
    <div className="search-bar">
    <input class="search" type="search" placeholder="Search Here" />
    <div className="search-img">
        <img src={search} className="searchim"></img>
    </div>
    </div>
    
    <div className="gestioncompte">
        <div className="gestioncompteposition">
        <h1 className="gestion-title">Taches</h1>
        <button className="ajouter" onClick={()=>setopenpopup(true)}>AJOUTER</button>
        </div>
        <div className="titles">
            <h1 className="title-s">Nom de Taches</h1>
            <h1 className="title-s">Employer</h1>
            <h1 className="title-s">Situation</h1>
            <h1 className="title-s">Projet</h1>
            <h1 className="title-s">Action</h1>
        </div>

        <div className="con">
            <h1 className="con-name">gestion et suivie des projet</h1>
            <h1 className="con-name2">zoui mouhamed</h1>
            <div className="consulterencourstache">
                <img src={timer} className="timer"></img>
                <h1 className="encourstitle">En Cours</h1>
            </div>
            <h1 className="details-gespro">gestion et suivie des projet</h1>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div>
        <div className="con2">
        <h1 className="con-name">gestion et suivie des projet</h1>
            <h1 className="con-name2">zoui mouhamed</h1>
            <div className="consulterencourstache">
                <img src={timer} className="timer"></img>
                <h1 className="encourstitle">En Cours</h1>
            </div>
            <h1 className="details-gespro">gestion et suivie des projet</h1>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div>
        <div className="con">
        <h1 className="con-name">gestion et suivie des projet</h1>
            <h1 className="con-name2">zoui mouhamed</h1>
            <div className="consulterencourstache">
                <img src={timer} className="timer"></img>
                <h1 className="encourstitle">En Cours</h1>
            </div>
            <h1 className="details-gespro">gestion et suivie des projet</h1>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div><div className="con2">
        <h1 className="con-name">gestion et suivie des projet</h1>
            <h1 className="con-name2">zoui mouhamed</h1>
            <div className="consulterencourstache">
                <img src={timer} className="timer"></img>
                <h1 className="encourstitle">En Cours</h1>
            </div>
            <h1 className="details-gespro">gestion et suivie des projet</h1>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div>
        <div className="con">
        <h1 className="con-name">gestion et suivie des projet</h1>
            <h1 className="con-name2">zoui mouhamed</h1>
            <div className="consulterencourstache">
                <img src={timer} className="timer"></img>
                <h1 className="encourstitle">En Cours</h1>
            </div>
            <h1 className="details-gespro">gestion et suivie des projet</h1>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div>
        <div className="con2">
        <h1 className="con-name">gestion et suivie des projet</h1>
            <h1 className="con-name2">zoui mouhamed</h1>
            <div className="consulterencourstache">
                <img src={timer} className="timer"></img>
                <h1 className="encourstitle">En Cours</h1>
            </div>
            <h1 className="details-gespro">gestion et suivie des projet</h1>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div><div className="con">
        <h1 className="con-name">gestion et suivie des projet</h1>
            <h1 className="con-name2">zoui mouhamed</h1>
            <div className="consulterencourstache">
                <img src={timer} className="timer"></img>
                <h1 className="encourstitle">En Cours</h1>
            </div>
            <h1 className="details-gespro">gestion et suivie des projet</h1>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div>
    </div>

    </div>
    )
}


export default Gestiontaches;