import "./admin.css";
import back from '../images/arrow-left-red.png';
import plus from '../images/add-fill.png';
import Gestiontache from "./gestiontache";




export default function Modifiertache({editpopupedit}){
    return(
        <div className="containerajoter">
            <div className="ajoutercontainer">
                <div className="leftajoutercompte">
                     <div className="retourecompte" onClick={()=>editpopupedit(false)}>
                        <img src={back} className="backcompte"/>
                        <h1 className="retourcompte">Retour</h1>
                     </div>
                     <div className="formulairecompte">
                         <h1 className="nomprenomcompte">Nom Taches</h1>
                         <input placeholder="Nom Taches" class="inputcompte" name="text" type="text"/>
                     </div>
                     <div className="formulairecompte">
                         <h1 className="nomprenomcompte">Discription</h1>
                         <input placeholder="Discription" class="inputcompte" name="text" type="text"/>
                     </div>
                     <div className="formulairecompte">
                         <h1 className="nomprenomcompte">Projet</h1>
                         <select placeholder="Mot de Passe" class="inputcompte" name="text" type="text" list="myliste">
                              <option value="directeur generale">Gestion de projet</option>
                              <option value="chef de projet">Devlopemment app mobile</option>
                              <option value="administartor">Administartor</option>
                              <option value="trafic manager">Trafic Manager</option>
                              <option value="employer">Employer</option>
                              </select>
                     </div><div className="formulairecompte">
                         <h1 className="nomprenomcompte">Chef Projet de la Taches </h1>
                         <input placeholder="Chef Projet" class="inputcompte" name="text" type="tel"/>
                     </div>
                </div>
                <div className="rightajoutercompte">
                        <h1 className="ajoutercomptetitle">Modifier Une Nouvelle Taches</h1>
                        <h1 className="ajoutercomptetitle2">En Remplisont Le Formulaire</h1>
                        <p className="ajoutercompteparag">A paragraph is a series of sentences that are organized
                                   and coherent, and are all related to a single topic. 
                                   Almost every piece of writing you do that is longer than a 
                                   few sentences should be organized into paragraphs. This is 
                                   because paragraphs show a reader where the subdivisions of 
                                   an essay begin and end, and thus help the reader see the
                        </p>
                        <button className="buttonajoutercompte"> <img src={plus} className="buttonajoutercompteimg"></img>MODIFIER</button>
                </div>
            </div>
        </div>
    );
}