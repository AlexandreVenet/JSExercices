"use strict";

class VoyelleConsonne
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let lettre = SaisirChaine("Veuillez entrer une lettre.");

        let result = "";

        if(lettre == "" || lettre == " " || lettre == undefined)
        {
            result = "N'importe quoi, cette entrée.";
        }
        else if(!isNaN(Number.parseFloat(lettre)))
        {
            result = "C'est un nombre.";
        }
        else
        {
            lettre = lettre.toUpperCase();
            lettre = lettre.charAt(0);
            const regexVoyelles = /A|E|I|O|U/g;
            if(lettre.match(regexVoyelles))
            {
                result = "C'est une voyelle.";
            }
            else
            {
                result = "C'est une consonne.";
            }
        }
        
        AddHTML(result);
        
    }
}