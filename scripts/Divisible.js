"use strict";

class Divisible
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let nbre1 = SaisirNombre("Veuillez entrer un nombre dividende.");
        let nbre2 = SaisirNombre("Veuillez entrer un nombre diviseur.");
        
        let result = nbre1 % nbre2;

        if(result == 0)
        {
            AddHTML(`${nbre1} est divisible par ${nbre2} car le reste est de ${result}.`);    
        }
        else
        {
            AddHTML(`${nbre1} n'est pas divisible par ${nbre2} car ${nbre1} / ${nbre2} = ${nbre1/nbre2}, soit un reste de : ${result}.`);    
        }
    }
}