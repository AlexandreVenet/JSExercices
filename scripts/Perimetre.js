"use strict";

class Perimetre
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let nbre = SaisirNombre("Veuillez entrer un diamètre en cm.");
        let result = nbre * Math.PI;
        AddHTML(`${nbre} x π = ${result}cm, soit ${Arrondir(result,2)}cm environ.`);    
    }
}