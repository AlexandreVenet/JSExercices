"use strict";

class Concatenation
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let chaine1 = SaisirChaine("Veuillez entrer un texte.");
        let chaine2 = SaisirChaine("Veuillez entrer un texte.");
        AddHTML(`${chaine1} + ${chaine2} = ${chaine1 + chaine2}`);
    }
}