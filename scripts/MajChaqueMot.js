"use strict";

class MajChaqueMot
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let chaine = SaisirChaine("Veuillez entrer une phrase.");
        chaine = chaine.toLowerCase();
        let tableau = chaine.split(" ");
        for (let i = 0; i < tableau.length; i++) {
            let mot = tableau[i];
            // tableau[i] = mot.charAt(0).toUpperCase() + mot.substring(1,mot.length);
            tableau[i] = mot.charAt(0).toUpperCase() + mot.slice(1); // idem avec slice
        }
        AddHTML(`Saisie : ${chaine} <br> Résultat : ${tableau.join(" ")}`);
    }
}