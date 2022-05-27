"use strict";

class PerimetreRectangle
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let longueur = SaisirNombre("Veuillez entrer la longueur du rectangle en cm.");
        let largeur = SaisirNombre("Veuillez entrer la largeur du rectangle en cm.");
        let result = 2 * (longueur + largeur);
        AddHTML(`2 x (${longueur} + ${largeur}) = ${result}cm`);
    }
}