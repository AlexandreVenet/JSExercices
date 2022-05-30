"use strict";

class Interets
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let capitalInitial = SaisirNombre("Veuillez entrer un capital initial.");
        let tauxInteret = SaisirNombre("Veuillez entrer un taux d'intérêt en %.");
        let annees = SaisirNombre("Veuillez entrer un nombre d'années.");

        let capitalFinal = capitalInitial * Math.pow((1+tauxInteret/100),annees);
        let interetsFinal = capitalFinal - capitalInitial;
        
        AddHTML(`Entrée : ${capitalInitial}€ initial, taux à ${tauxInteret}%, pendant ${annees} année(s).
        <br>Calcul : <i>capital final = capital initial * (1+taux) ^ années</i>
        <br>Total intérêts : ${Arrondir(interetsFinal,2)}€
        <br>Capital final : ${Arrondir(capitalFinal,2)}€`);    
    }
}