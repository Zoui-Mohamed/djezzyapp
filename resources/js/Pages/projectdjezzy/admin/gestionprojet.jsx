import "./admin.css";
import search from '../images/search-line (2).png';
import plus from '../images/plus.png';
import delet from '../images/delete-bin-6-line (1).png';
import edit from '../images/edit-box-fill (1).png';
import timer from '../images/timer-line.png';
import { useState } from "react";
import Ajouterprojet from "./ajouterprojet";
import Editprojet from "./editprojet";
import Projetplus from "./plusprojet";
import Directeurgenerale from "./directeurgeneral";




function Gestionprojet(){
    const [openpopup,setopenpopup]=useState(false);

    const editpopup = (newopenpopup) => {
        setopenpopup(newopenpopup);
    };

    const [openpopupedit,setopenpopupedit]=useState(false);

    const editpopupedit = (newopenpopupedit) => {
        setopenpopupedit(newopenpopupedit);
    };

    const [openpopuppro,setopenpopuppro]=useState(false);

    const editpopuppro = (newopenpopuppro) => {
        setopenpopuppro(newopenpopuppro);
    };

    return(
        <Directeurgenerale>
     <div >
               {
    openpopup && <Ajouterprojet editpopup= {editpopup}></Ajouterprojet>
    }
                 {
    openpopupedit && <Editprojet editpopupedit= {editpopupedit}></Editprojet>
    }

{
    openpopuppro && <Projetplus editpopuppro= {editpopuppro}></Projetplus>
    }
    <div className="search-bar">
    <input class="search" type="search" placeholder="Search Here" />
    <div className="search-img">
        <img src={search} className="searchim"></img>
    </div>
    </div>
    
    <div className="gestioncompte">
        <div className="gestioncompteposition">
        <h1 className="gestion-title">Comptes</h1>
        <button className="ajouter" onClick={()=>setopenpopup(true)}>AJOUTER</button>
        </div>
        <div className="titles">
            <h1 className="title-s">Nom du projet</h1>
            <h1 className="title-s">Chef du projet</h1>
            <h1 className="title-s">Situation</h1>
            <h1 className="title-s">Detail</h1>
            <h1 className="title-s">Action</h1>
        </div>

        <div className="con">
            <h1 className="con-name">gestion et suivie des projet</h1>
            <h1 className="con-name2">zoui mouhamed</h1>
            <div className="consulterencoursprojet">
                <img src={timer} className="timer"></img>
                <h1 className="encourstitle">En Cours</h1>
            </div>
            <div className="details-but" onClick={()=>setopenpopuppro(true)}>  
            <img src={plus} className="butonimg"></img>
            <h1 className="details">PLUS</h1>
            </div>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div>
        <div className="con2">
        <h1 className="con-name">gestion et suivie des projet</h1>
            <h1 className="con-name2">zoui mouhamed</h1>
            <div className="consulterencoursprojet">
                <img src={timer} className="timer"></img>
                <h1 className="encourstitle">En Cours</h1>
            </div>
            <div className="details-but" onClick={()=>setopenpopuppro(true)}>  
            <img src={plus} className="butonimg"></img>
            <h1 className="details">PLUS</h1>
            </div>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div>
        <div className="con">
        <h1 className="con-name">gestion et suivie des projet</h1>
            <h1 className="con-name2">zoui mouhamed</h1>
            <div className="consulterencoursprojet">
                <img src={timer} className="timer"></img>
                <h1 className="encourstitle">En Cours</h1>
            </div>
            <div className="details-but" onClick={()=>setopenpopuppro(true)}>  
            <img src={plus} className="butonimg"></img>
            <h1 className="details">PLUS</h1>
            </div>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div><div className="con2">
        <h1 className="con-name">gestion et suivie des projet</h1>
            <h1 className="con-name2">zoui mouhamed</h1>
            <div className="consulterencoursprojet">
                <img src={timer} className="timer"></img>
                <h1 className="encourstitle">En Cours</h1>
            </div>
            <div className="details-but" onClick={()=>setopenpopuppro(true)}>  
            <img src={plus} className="butonimg"></img>
            <h1 className="details">PLUS</h1>
            </div>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div>
        <div className="con">
        <h1 className="con-name">gestion et suivie des projet</h1>
            <h1 className="con-name2">zoui mouhamed</h1>
            <div className="consulterencoursprojet">
                <img src={timer} className="timer"></img>
                <h1 className="encourstitle">En Cours</h1>
            </div>
            <div className="details-but" onClick={()=>setopenpopuppro(true)}>  
            <img src={plus} className="butonimg"></img>
            <h1 className="details">PLUS</h1>
            </div>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div>
        <div className="con2">
        <h1 className="con-name">gestion et suivie des projet</h1>
            <h1 className="con-name2">zoui mouhamed</h1>
            <div className="consulterencoursprojet">
                <img src={timer} className="timer"></img>
                <h1 className="encourstitle">En Cours</h1>
            </div>
            <div className="details-but" onClick={()=>setopenpopuppro(true)}>  
            <img src={plus} className="butonimg"></img>
            <h1 className="details">PLUS</h1>
            </div>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div><div className="con">
        <h1 className="con-name">gestion et suivie des projet</h1>
            <h1 className="con-name2">zoui mouhamed</h1>
            <div className="consulterencoursprojet">
                <img src={timer} className="timer"></img>
                <h1 className="encourstitle">En Cours</h1>
            </div>
            <div className="details-but" onClick={()=>setopenpopuppro(true)}>  
            <img src={plus} className="butonimg"></img>
            <h1 className="details">PLUS</h1>
            </div>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div>
    </div>

    </div>
    </Directeurgenerale>
    )
}


export default Gestionprojet;