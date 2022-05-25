"use strict";

class Addition
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let nbre1 = SaisirNombre("Veuillez entrer un nombre.");
        let nbre2 = SaisirNombre("Veuillez entrer un nombre.");
        AddHTML(`${nbre1} + ${nbre2} = ${nbre1 + nbre2}`);
    }
}