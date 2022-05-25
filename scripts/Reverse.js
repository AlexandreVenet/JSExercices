"use strict";

class Reverse
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let txt = SaisirChaine("Veuillez entrer un texte.");
        let tab = txt.split(" ").reverse();
        AddHTML(`Entrée : ${txt}<br>Sortie : ${tab.join(" ")}`);    
    }
}