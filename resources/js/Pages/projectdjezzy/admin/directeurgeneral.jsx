import "./admin.css";
import note  from "../images/notification-2-fill.png";
import message  from "../images/chat-3-fill.png";
import user  from "../images/user-3-line.png";
import usere  from "../images/user-fill.png";
import home  from "../images/home-5-fill.png";
import send  from "../images/send-plane-fill.png";
import consulter  from "../images/search-eye-line.png";
import menu  from "../images/menu-search-line.png";
import calendar  from "../images/calendar-todo-fill.png";
import dashboard  from "../images/dashboard-fill.png";
import users  from "../images/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes.jpg";
import logo from "../images/DjezzyLogo copie.png";
import close from "../images/close-line.png";
import mnu from "../images/menu-fill.png";
import evaluation from "../images/list-ordered.png";
import puzzle from "../images/puzzle-fill.png";
import Acceulle from "./acceille";
import Gestioncompte from "./gestioncompte";
import Envoyerdemande from "./envoyerdemande";
import Consulterprojet from "./consulterprojet";
import Archiverprojet from "./archiverprojet";
import Dashboards from "./dashboard";
import Calendrier from "./calendrier";
import Message from "./message";
import Notification from "./notification";
import Messenger from "./messenger";
import { useState } from "react";
import Gestionprojet from "./gestionprojet";
import Evaluerprojet from "./evaluerprojet";
import { Link, usePage} from '@inertiajs/react';
import NavLink from '@/Components/NavLink';

function Directeurgenerale({children}) {
  const {url}=usePage();
  const isactive=(route)=>url.includes(route);

       const [image,setimage]=useState(mnu);
       const [show,setshow]=useState(true);
       const [color,setcolor]=useState("brown");

  const onclick=()=>{
       if (show == false) {
           setshow(true);
           setimage(close);
          }else{
        setshow(false);
        setimage(mnu);
       }
  };
   
  const backgroundchange=()=>{
    if (color == "brown") {
      setcolor("red");
    }
    else{
      setcolor("brown");
    }
};

    return (
      <div className="body">
        <div className="header">
          <img src={image} className="menubar" onClick={onclick}></img>
            <h1 className="hey">Hey , Zoui Mohamed !</h1>
            <div className="icons">
            <img src={note} className="not"></img>
            <img src={message} className="mes"></img>
            <h1 className="name">Zoui Mohamed</h1>
            <div className="circle">
            <img src={user} className="user"></img>
            </div>
            </div>
            {/* <Message></Message> */}
            {/* <Notification></Notification> */}
            {/* <Messenger></Messenger> */}
        </div>
       { show && (<div className="navbar">
         <img src={users} className="users"></img>
        <h1 className="username">Zoui Mohamed</h1>
        <p className="job">DIRECTEUR GENERALE</p>
        <div className="space">
        <h1 className="sidemenu" style={{background : isactive('/dg/acceulledg')? 'red':'#831010'}}>
        <Link href={route('acceulledg.index')} active={route().current('acceulledg.index')}>
        <img src={home} className="usere"></img>Acceuil
        </Link>
        </h1>
        <h1 className="sidemenu" style={{background : isactive('/dg/gestionprojet')? 'red':'#831010'}}>
        <Link href={route('gestionprojet.index')} active={route().current('gestionprojet.index')}>
        <img src={puzzle} className="usere"></img>Gestion Projet
        </Link>
        </h1>
        <h1 className="sidemenu" style={{background : isactive('/dg/envoyerdemandedg')? 'red':'#831010'}}>
        <Link href={route('envoyerdemandedg.index')} active={route().current('envoyerdemandedg.index')}>
        <img src={send} className="usere"></img>Envoyer Demande
        </Link>
        </h1>
        <h1 className="sidemenu" style={{background : isactive('/dg/consulterprojetdg')? 'red':'#831010'}}>
        <Link href={route('consulterprojetdg.index')} active={route().current('consulterprojetdg.index')}>
          <img src={consulter} className="usere"></img>Consulter Projet
          </Link>
          </h1>
        <h1 className="sidemenu" style={{background : isactive('/dg/evaluerprojet')? 'red':'#831010'}}>
        <Link href={route('evaluerprojet.index')} active={route().current('evaluerprojet.index')}>
        <img src={evaluation} className="usere"></img>Evaluer Projet
        </Link>
        </h1>
        <h1 className="sidemenu" style={{background : isactive('/dg/dashboarddg')? 'red':'#831010'}}>
        <Link href={route('dashboarddg.index')} active={route().current('dashboarddg.index')}>
        <img src={dashboard} className="usere"></img>Dashboard
        </Link>
        </h1>
        <h1 className="sidemenu" style={{background : isactive('/dg/calendrierdg')? 'red':'#831010'}}>
        <Link href={route('calendrierdg.index')} active={route().current('calendrierdg.index')}>
        <img src={calendar} className="usere"></img>Calendrier
        </Link>
        </h1>
        </div>
        <button className="button1"> <span className="bute">Quitter</span>
        </button>
        </div>)
        }
        <div className="index">
        {children}
        {/* <Acceulle></Acceulle> */}
        {/* <Gestionprojet></Gestionprojet> */}
      {/* <Envoyerdemande></Envoyerdemande> */}
      {/* <Consulterprojet></Consulterprojet> */}
      {/* <Evaluerprojet></Evaluerprojet> */}
      {/* <Dashboards></Dashboards> */}
      {/* <Calendrier></Calendrier> */}
        </div>
        <img src={logo} className="logo"></img>
        <p className="dis">For More Details You Can Cheeck our <strong className="s">HELP</strong> Page</p>
      </div>
    );
  }
  
  export default Directeurgenerale;