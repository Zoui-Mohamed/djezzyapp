import "./admin.css";
import back from '../images/arrow-left-red.png';
import plus from '../images/add-fill.png';
import Gestionprojet from "./gestionprojet";
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from "react";





export default function Evaprojet({editpopup}){
    const { data, setData, post, processing, errors, reset } = useForm({
        noteprojet: '',
        commentairedeprojet: '',
        remember: false,
    });
    
    const submit = (e) => {
        e.preventDefault();
    
        post('/evaluerprojet', {
            onFinish: () => reset('password'),
        });
    };
    return(
        <div className="containerajoter">
            <form onSubmit={submit}>
            <div className="ajoutercontainer">
                <div className="leftajoutercompte">
                     <div className="retourecompte" onClick={()=>editpopup(false)}>
                        <img src={back} className="backcompte"/>
                        <h1 className="retourcompte">Retour</h1>
                     </div>
                     <div className="formulairecompte">
                         <h1 className="nomprenomcompte">Note</h1>
                         <input placeholder="Donner Une Note /10" class="inputcompte" name="text" type="text" value={data.noteprojet} onChange={(e) => setData('noteprojet', e.target.value)}/>
                     </div>
                     <div className="formulairecompte">
                         <h1 className="nomprenomcompte">Discription</h1>
                         <input placeholder="Discription" class="inputcompte" name="text" type="text" value={data.commentairedeprojet} onChange={(e) => setData('commentairedeprojet', e.target.value)}/>
                     </div>
                    
                          
                </div>
                <div className="rightajoutercompte">
                        <h1 className="ajoutercomptetitle">Evaluer Votre Projet</h1>
                        <h1 className="ajoutercomptetitle2">En Remplisont Le Formulaire</h1>
                        <p className="ajoutercompteparag">A paragraph is a series of sentences that are organized
                                   and coherent, and are all related to a single topic. 
                                   Almost every piece of writing you do that is longer than a 
                                   few sentences should be organized into paragraphs. This is 
                                   because paragraphs show a reader where the subdivisions of 
                                   an essay begin and end, and thus help the reader see the
                        </p>
                        <button className="buttonajoutercompte"> <img src={plus} className="buttonajoutercompteimg"></img>Evaluer</button>
                </div>
            </div>
            </form>
        </div>
    );
}