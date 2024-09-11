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
import pie from "../images/pie-chart-2-fill.png";
import meeting from "../images/team-fill.png";
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
import { useState , useEffect } from "react";
import Gestionprojet from "./gestionprojet";
import Evaluerprojet from "./evaluerprojet";
import Decomposerprojet from "./decomposerprojet";
import Meeting from "./lancermeeting";
// import { Triangle } from 'react-spinners/Triangle';
import { Link, usePage} from '@inertiajs/react';
import NavLink from '@/Components/NavLink';




function Chefprojet({children}) {
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
        <p className="job">CHEF DE PROJET</p>
        <div className="space">
        <h1 className="sidemenu" style={{background : isactive('/chefprojet/acceillecp')? 'red':'#831010'}}>
        <Link href={route('acceillecp.index')} active={route().current('acceillecp.index')}>
        <img src={home} className="usere"></img>Acceuil
        </Link>
        </h1>
        <h1 className="sidemenu" style={{background : isactive('/chefprojet/decomposerprojet')? 'red':'#831010'}}>
        <Link href={route('decomposerprojet.index')} active={route().current('decomposerprojet.index')}>
        <img src={pie} className="usere"></img>Decomposer Projet
        </Link>
        </h1>
        <h1 className="sidemenu" style={{background : isactive('/chefprojet/lancermeeting')? 'red':'#831010'}}>
        <Link href={route('lancermeeting.index')} active={route().current('lancermeeting.index')}>
        <img src={meeting} className="usere"></img>Lancer Meeting
        </Link>
        </h1>
        <h1 className="sidemenu" style={{background : isactive('/chefprojet/consulterprojetcp')? 'red':'#831010'}}>
        <Link href={route('consulterprojetcp.index')} active={route().current('consulterprojetcp.index')}>
        <img src={consulter} className="usere"></img>Consulter Projet
        </Link>
        </h1>
        <h1 className="sidemenu" style={{background : isactive('/chefprojet/dashboardcp')? 'red':'#831010'}}>
        <Link href={route('dashboardcp.index')} active={route().current('dashboardcp.index')}>
        <img src={dashboard} className="usere"></img>Dashboard
        </Link>
        </h1>
        <h1 className="sidemenu" style={{background : isactive('/chefprojet/calendriercp')? 'red':'#831010'}}>
        <Link href={route('calendriercp.index')} active={route().current('calendriercp.index')}>
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
        {/* <Decomposerprojet></Decomposerprojet> */}
        {/* <Meeting></Meeting> */}
      {/* <Consulterprojet></Consulterprojet> */}
      {/* <Dashboards></Dashboards> */}
      {/* <Calendrier></Calendrier> */}
        </div>
        <img src={logo} className="logo"></img>
        <p className="dis">For More Details You Can Cheeck our <strong className="s">HELP</strong> Page</p>
      </div>
    );
  }
  
  export default Chefprojet;