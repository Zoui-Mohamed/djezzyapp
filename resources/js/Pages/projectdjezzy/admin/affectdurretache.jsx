import "./admin.css";
import back from '../images/arrow-left-red.png';
import plus from '../images/add-fill.png';
import Affecttation from "./affecttaches";




export default function Affectduree({editpopup}){
    return(
        <div className="containerajoter">
            <div className="ajoutercontainer">
                <div className="leftajoutercompte">
                     <div className="retourecompte" onClick={()=>editpopup(false)}>
                        <img src={back} className="backcompte"/>
                        <h1 className="retourcompte">Retour</h1>
                     </div>
                    
                    
                    <div className="flexcalender2">
                              <div className="formulairecompte2">
                         <h1 className="nomprenomcompte">Date Debut de la Tache</h1>
                         <input placeholder="Photo" class="inputcompte2"type="date"/>
                     </div><div className="formulairecompte2">
                         <h1 className="nomprenomcompte">Date fin de la Tache</h1>
                         <input placeholder="Numero de Telephone" class="inputcompte2" name="text" type="date"/>
                     </div>
                              
                     
                     </div>
                </div>
                <div className="rightajoutercompte">
                        <h1 className="ajoutercomptetitle">Affecter Une Duree Au Taches</h1>
                        <h1 className="ajoutercomptetitle2">En Remplisont Le Formulaire</h1>
                        <p className="ajoutercompteparag">A paragraph is a series of sentences that are organized
                                   and coherent, and are all related to a single topic. 
                                   Almost every piece of writing you do that is longer than a 
                                   few sentences should be organized into paragraphs. This is 
                                   because paragraphs show a reader where the subdivisions of 
                                   an essay begin and end, and thus help the reader see the
                        </p>
                        <button className="buttonajoutercompte"> <img src={plus} className="buttonajoutercompteimg"></img>AFFECTER</button>
                </div>
            </div>
        </div>
    );
}