import "./admin.css";
import back from '../images/arrow-left-red.png';
import plus from '../images/add-fill.png';
import Affecttation from "./affecttaches";




export default function Affectemployer({editpopupedit}){
    return(
        <div className="containerajoter">
            <div className="ajoutercontainer">
                <div className="leftajoutercompte">
                     <div className="retourecompte" onClick={()=>editpopupedit(false)}>
                        <img src={back} className="backcompte"/>
                        <h1 className="retourcompte">Retour</h1>
                     </div>
                    
                    
                     <div className="formulairecompte">
                         <h1 className="nomprenomcompte">Employer Affecter</h1>
                         <select placeholder="Employer" class="inputcompte" name="text" type="text" list="myliste">
                              <option value="directeur generale">Ahmed</option>
                              <option value="chef de projet">Amin</option>
                              <option value="administartor">Chakib</option>
                              <option value="trafic manager">Trafic Manager</option>
                              <option value="employer">Employer</option>
                              </select>
                     </div>
                     
                </div>
                <div className="rightajoutercompte">
                        <h1 className="ajoutercomptetitle">Affecter Un Employer Au Taches</h1>
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