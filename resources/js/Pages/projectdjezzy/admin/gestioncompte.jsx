import "./admin.css";
import search from '../images/search-line (2).png';
import plus from '../images/plus.png';
import delet from '../images/delete-bin-6-line (1).png';
import edit from '../images/edit-box-fill (1).png';
import { useState } from "react";
import Ajoutercompte from "./ajoutercompte";
import Editcompte from "./editcompte";
import Admin from "./admin";


function Gestioncompte(){

    const [openpopup,setopenpopup]=useState(false);

    const editpopup = (newopenpopup) => {
        setopenpopup(newopenpopup);
    };

    const [openpopupedit,setopenpopupedit]=useState(false);

    const editpopupedit = (newopenpopupedit) => {
        setopenpopupedit(newopenpopupedit);
    };

    return(
        <Admin>
     <div >
         {
    openpopup && <Ajoutercompte editpopup= {editpopup}></Ajoutercompte>
    }
         {
    openpopupedit && <Editcompte editpopupedit= {editpopupedit}></Editcompte>
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
            <h1 className="title-s">Nom</h1>
            <h1 className="title-s">Email</h1>
            <h1 className="title-s">Numero</h1>
            <h1 className="title-s">Poste</h1>
            <h1 className="title-s">Detail</h1>
            <h1 className="title-s">Action</h1>
        </div>

        <div className="con">
            <h1 className="con-name">Zoui Mohamed</h1>
            <h1 className="con-name">zouimouha14@gmail.com</h1>
            <h1 className="con-name">+213 656274260</h1>
            <h1 className="con-name">Administrator</h1>
            <div className="details-but">  
            <img src={plus} className="butonimg"></img>
            <h1 className="details">PLUS</h1>
            </div>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div>
        <div className="con2">
            <h1 className="con-name">Zoui Mohamed</h1>
            <h1 className="con-name">zouimouha14@gmail.com</h1>
            <h1 className="con-name">+213 656274260</h1>
            <h1 className="con-name">Administrator</h1>
            <div className="details-but">  
            <img src={plus} className="butonimg"></img>
            <h1 className="details">PLUS</h1>
            </div>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div>
        <div className="con">
            <h1 className="con-name">Zoui Mohamed</h1>
            <h1 className="con-name">zouimouha14@gmail.com</h1>
            <h1 className="con-name">+213 656274260</h1>
            <h1 className="con-name">Administrator</h1>
            <div className="details-but">  
            <img src={plus} className="butonimg"></img>
            <h1 className="details">PLUS</h1>
            </div>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div><div className="con2">
            <h1 className="con-name">Zoui Mohamed</h1>
            <h1 className="con-name">zouimouha14@gmail.com</h1>
            <h1 className="con-name">+213 656274260</h1>
            <h1 className="con-name">Administrator</h1>
            <div className="details-but">  
            <img src={plus} className="butonimg"></img>
            <h1 className="details">PLUS</h1>
            </div>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div>
        <div className="con">
            <h1 className="con-name">Zoui Mohamed</h1>
            <h1 className="con-name">zouimouha14@gmail.com</h1>
            <h1 className="con-name">+213 656274260</h1>
            <h1 className="con-name">Administrator</h1>
            <div className="details-but">  
            <img src={plus} className="butonimg"></img>
            <h1 className="details">PLUS</h1>
            </div>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div>
        <div className="con2">
            <h1 className="con-name">Zoui Mohamed</h1>
            <h1 className="con-name">zouimouha14@gmail.com</h1>
            <h1 className="con-name">+213 656274260</h1>
            <h1 className="con-name">Administrator</h1>
            <div className="details-but">  
            <img src={plus} className="butonimg"></img>
            <h1 className="details">PLUS</h1>
            </div>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div><div className="con">
            <h1 className="con-name">Zoui Mohamed</h1>
            <h1 className="con-name">zouimouha14@gmail.com</h1>
            <h1 className="con-name">+213 656274260</h1>
            <h1 className="con-name">Administrator</h1>
            <div className="details-but">  
            <img src={plus} className="butonimg"></img>
            <h1 className="details">PLUS</h1>
            </div>
            <img src={delet} className="delet"></img>
            <img src={edit} className="edit" onClick={()=>setopenpopupedit(true)}></img>
        </div>
    </div>

    </div>
    </Admin>
    )
}


export default Gestioncompte;