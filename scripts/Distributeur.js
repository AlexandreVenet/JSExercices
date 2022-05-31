"use strict";

class Distributeur
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let nbre = SaisirNombre("Veuillez choisir entre Jus (1), Eau (2) ou Café (3) en entrant le nombre correspondant.");
        
        switch (nbre) {
            case 1:
                AddHTML("Voici un jus.");
                break;
            case 2:
                AddHTML("Voici de l'eau.");
                break;
            case 3:
                AddHTML("Voici du café.");
                break;
            default:
                AddHTML("Rien du tout.");
                break;
        }
    }
}