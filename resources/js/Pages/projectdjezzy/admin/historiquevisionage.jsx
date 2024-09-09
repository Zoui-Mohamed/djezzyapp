import "./admin.css";
import back from '../images/arrow-left-red.png';
import search from '../images/search-line (2).png';
import dash from '../images/dashboard-fill.png';
import call from '../images/calendar-todo-fill.png';
import Archiverprojet from "./archiverprojet";
import Calendrierhistory from "./calenderhistory";
import { useState } from "react";
import Dashboardhistory from "./dashboardshistory";


export default function Historiquevision({editpopup}){
    
    const [openpopupcal,setopenpopupcal]=useState(false);

    const editpopupcal = (newopenpopupcal) => {
        setopenpopupcal(newopenpopupcal);
    };

    const [openpopupdash,setopenpopupdash]=useState(false);

    const editpopupdash = (newopenpopupdash) => {
        setopenpopupdash(newopenpopupdash);
    };
    return(
     <div className="hystorycon">
         {
    openpopupcal && <Calendrierhistory editpopupcal= {editpopupcal}></Calendrierhistory>
    }

{
    openpopupdash && <Dashboardhistory editpopupdash= {editpopupdash}></Dashboardhistory>
    }
        <div className="historyflex">
            <div className="retourehistory" onClick={()=>editpopup(false)}>
                <img src={back} className="backcompte"/>
                <h1 className="retourcompte">Retour</h1>
         </div>
         <div className="searchtwo">
         <div className="search-bar">
    <input class="search" type="search" placeholder="Search Here" />
    <div className="search-img">
        <img src={search} className="searchim"></img>
    </div>
    </div>
    </div>
    </div>
         
        
        <div className="calcontains">
            <div className="calndriercontainer2">
                <div className="flebx">
                    <div>
                <h1 className="caltitle">Projet : Gestion Et Suivie Des Projet</h1>
                <p className="calparagraph">A paragraph is a series of sentences that are organized
                                   and coherent, and are all related to a single topic. 
                                   Almost every piece of writing you do that is longer than a 
                                   few sentences should be organized into paragraphs. This is 
                                   because paragraphs show a reader where the subdivisions of 
                                   an essay begin and end, and thus help the reader see the</p>

                </div>
                <div className="call">
                <h1 className="caltit">Date Debut : 19/02/2025</h1>
                <h1 className="caltit">Date Fin  : 19/02/2025</h1>
                <h1 className="caltit">Directeur responsable : Amin Hnouch</h1>
                <h1 className="caltit">Chef de projet : Amin Hnouch</h1>
                <h1 className="caltit">Trafic manager : Amin Hnouch</h1>
                <h1 className="caltit">Membre employer : Amin Hnouch , Amin Hnouch  </h1>
                <div className="flexbut">
                <button className="buttondashboard" onClick={()=>editpopupdash(true)}> <img src={dash} className="buttondashboardimg"></img>Dashboard</button>
                <button className="buttondashboard2" onClick={()=>editpopupcal(true)}> <img src={call} className="buttondashboardimg"></img>Calendrier</button>
                </div>
                </div> 
                </div>  
            </div>

            <div className="calndriercontainer2">
                <div className="flebx">
                    <div>
                <h1 className="caltitle">Projet : Gestion Et Suivie Des Projet</h1>
                <p className="calparagraph">A paragraph is a series of sentences that are organized
                                   and coherent, and are all related to a single topic. 
                                   Almost every piece of writing you do that is longer than a 
                                   few sentences should be organized into paragraphs. This is 
                                   because paragraphs show a reader where the subdivisions of 
                                   an essay begin and end, and thus help the reader see the</p>

                </div>
                <div className="call">
                <h1 className="caltit">Date Debut : 19/02/2025</h1>
                <h1 className="caltit">Date Fin  : 19/02/2025</h1>
                <h1 className="caltit">Directeur responsable : Amin Hnouch</h1>
                <h1 className="caltit">Chef de projet : Amin Hnouch</h1>
                <h1 className="caltit">Trafic manager : Amin Hnouch</h1>
                <h1 className="caltit">Membre employer : Amin Hnouch , Amin Hnouch  </h1>
                <div className="flexbut">
                <button className="buttondashboard" onClick={()=>editpopupdash(true)}> <img src={dash} className="buttondashboardimg"></img>Dashboard</button>
                <button className="buttondashboard2" onClick={()=>editpopupcal(true)}> <img src={call} className="buttondashboardimg"></img>Calendrier</button>
                </div>
                </div> 
                </div>  
            </div>

            <div className="calndriercontainer2">
                <div className="flebx">
                    <div>
                <h1 className="caltitle">Projet : Gestion Et Suivie Des Projet</h1>
                <p className="calparagraph">A paragraph is a series of sentences that are organized
                                   and coherent, and are all related to a single topic. 
                                   Almost every piece of writing you do that is longer than a 
                                   few sentences should be organized into paragraphs. This is 
                                   because paragraphs show a reader where the subdivisions of 
                                   an essay begin and end, and thus help the reader see the</p>

                </div>
                <div className="call">
                <h1 className="caltit">Date Debut : 19/02/2025</h1>
                <h1 className="caltit">Date Fin  : 19/02/2025</h1>
                <h1 className="caltit">Directeur responsable : Amin Hnouch</h1>
                <h1 className="caltit">Chef de projet : Amin Hnouch</h1>
                <h1 className="caltit">Trafic manager : Amin Hnouch</h1>
                <h1 className="caltit">Membre employer : Amin Hnouch , Amin Hnouch  </h1>
                <div className="flexbut">
                <button className="buttondashboard" onClick={()=>editpopupdash(true)}> <img src={dash} className="buttondashboardimg"></img>Dashboard</button>
                <button className="buttondashboard2" onClick={()=>editpopupcal(true)}> <img src={call} className="buttondashboardimg"></img>Calendrier</button>
                </div>
                </div> 
                </div>  
            </div>

            <div className="calndriercontainer2">
                <div className="flebx">
                    <div>
                <h1 className="caltitle">Projet : Gestion Et Suivie Des Projet</h1>
                <p className="calparagraph">A paragraph is a series of sentences that are organized
                                   and coherent, and are all related to a single topic. 
                                   Almost every piece of writing you do that is longer than a 
                                   few sentences should be organized into paragraphs. This is 
                                   because paragraphs show a reader where the subdivisions of 
                                   an essay begin and end, and thus help the reader see the</p>

                </div>
                <div className="call">
                <h1 className="caltit">Date Debut : 19/02/2025</h1>
                <h1 className="caltit">Date Fin  : 19/02/2025</h1>
                <h1 className="caltit">Directeur responsable : Amin Hnouch</h1>
                <h1 className="caltit">Chef de projet : Amin Hnouch</h1>
                <h1 className="caltit">Trafic manager : Amin Hnouch</h1>
                <h1 className="caltit">Membre employer : Amin Hnouch , Amin Hnouch  </h1>
                <div className="flexbut">
                <button className="buttondashboard" onClick={()=>editpopupdash(true)}> <img src={dash} className="buttondashboardimg"></img>Dashboard</button>
                <button className="buttondashboard2" onClick={()=>editpopupcal(true)}> <img src={call} className="buttondashboardimg"></img>Calendrier</button>
                </div>
                </div> 
                </div>  
            </div>

        </div>
    </div>
    )
}


