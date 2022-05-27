"use strict";

class PerimetreCarre
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let nbre = SaisirNombre("Veuillez entrer la longueur d'un côté du carré en cm.");
        let result = nbre * 4;
        AddHTML(`${nbre} x 4 = ${result}cm`);
    }
}