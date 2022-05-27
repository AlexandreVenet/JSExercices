"use strict";

class AireRectangle
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let longueur = SaisirNombre("Veuillez entrer la longueur du rectangle en cm.");
        let largeur = SaisirNombre("Veuillez entrer la largeur du rectangle en cm.");
        let result = longueur * largeur;
        AddHTML(`${longueur} x ${largeur} = ${result}cm²`);
    }
}