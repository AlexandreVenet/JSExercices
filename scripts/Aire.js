"use strict";

class Aire
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let nbre = SaisirNombre("Veuillez entrer un rayon en cm.");
        let result = Math.PI * Math.pow(nbre,2);
        AddHTML(`π x ${nbre}² = ${result}cm², soit ${Arrondir(result,2)}cm² environ.`);
    }
}