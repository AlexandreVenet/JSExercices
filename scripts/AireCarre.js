"use strict";

class AireCarre
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let nbre = SaisirNombre("Veuillez entrer la longueur d'un côté du carré en cm.");
        let result = nbre * nbre;
        AddHTML(`${nbre} x ${nbre} = ${result}cm²`);
    }
}