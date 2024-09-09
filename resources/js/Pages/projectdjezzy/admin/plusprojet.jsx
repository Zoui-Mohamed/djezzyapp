import "./admin.css";
import back from '../images/arrow-left-red.png';


function Projetplus({editpopuppro}){
    return(
     <div className="hystorycon">
         <div className="retourehistory" onClick={()=>editpopuppro(false)}>
                <img src={back} className="backcompte"/>
                <h1 className="retourcompte">Retour</h1>
         </div>
        <h1 className="calender-title">Les Details Des Projets</h1>
        <div className="calcontains">
            <div className="calndriercontainer">
                <h1 className="caltitle">Projet : Gestion Et Suivie Des Projet</h1>
                <h1 className="calelement">Directeur responsable : Amin Hnouch</h1>
                <h1 className="calelement">Chef de projet : Amin Hnouch</h1>
                <h1 className="calelement">Trafic manager : Amin Hnouch</h1>
                <h1 className="calelement">Membre employer : Amin Hnouch , Amin Hnouch </h1>
                <h1 className="datetitle">Date Du Meeting : <span className="datemeeting">26/11/2024</span></h1>
            </div>
            <div className="calndriercontainer">
                <h1 className="caltitle">Projet : Gestion Et Suivie Des Projet</h1>
                <h1 className="calelement">Directeur responsable : Amin Hnouch</h1>
                <h1 className="calelement">Chef de projet : Amin Hnouch</h1>
                <h1 className="calelement">Trafic manager : Amin Hnouch</h1>
                <h1 className="calelement">Membre employer : Amin Hnouch , Amin Hnouch  </h1>
                <h1 className="datetitle">Date Du Meeting : <span className="datemeeting">26/11/2024</span></h1>
            </div><div className="calndriercontainer">
                <h1 className="caltitle">Projet : Gestion Et Suivie Des Projet</h1>
                <h1 className="calelement">Directeur responsable : Amin Hnouch</h1>
                <h1 className="calelement">Chef de projet : Amin Hnouch</h1>
                <h1 className="calelement">Trafic manager : Amin Hnouch</h1>
                <h1 className="calelement">Membre employer : Amin Hnouch , Amin Hnouch</h1>
                <h1 className="datetitle">Date Du Meeting : <span className="datemeeting">26/11/2024</span></h1>
            </div><div className="calndriercontainer">
                <h1 className="caltitle">Projet : Gestion Et Suivie Des Projet</h1>
                <h1 className="calelement">Directeur responsable : Amin Hnouch</h1>
                <h1 className="calelement">Chef de projet : Amin Hnouch</h1>
                <h1 className="calelement">Trafic manager : Amin Hnouch</h1>
                <h1 className="calelement">Membre employer : Amin Hnouch , Amin Hnouch </h1>
                <h1 className="datetitle">Date Du Meeting : <span className="datemeeting">26/11/2024</span></h1>
            </div><div className="calndriercontainer">
                <h1 className="caltitle">Projet : Gestion Et Suivie Des Projet</h1>
                <h1 className="calelement">Directeur responsable : Amin Hnouch</h1>
                <h1 className="calelement">Chef de projet : Amin Hnouch</h1>
                <h1 className="calelement">Trafic manager : Amin Hnouch</h1>
                <h1 className="calelement">Membre employer : Amin Hnouch , Amin Hnouch </h1>
                <h1 className="datetitle">Date Du Meeting : <span className="datemeeting">26/11/2024</span></h1>
            </div>
        </div>
    </div>
    )
}


export default Projetplus;