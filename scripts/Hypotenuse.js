"use strict";

class Hypotenuse
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        alert("Soit le triangle ABC rectancle en C.");
        let longueurAB = SaisirNombre("Veuillez entrer la longeur en cm de AB, adjacent à l'angle droit.");
        let longueurAC = SaisirNombre("Veuillez entrer la longeur en cm de AC, adjacent à l'angle droit.");

        // let result = Math.sqrt(Math.pow(longueurAB,2) + Math.pow(longueurAC,2));

        // Il existe aussi :
        let result = Math.hypot(longueurAB,longueurAC);
        
        AddHTML(`√(${longueurAB}² + ${longueurAC}²) = ${result}cm, soit ${Arrondir(result,2)}cm environ.`);

    }
}