"use strict";

class Distributeur
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let nbre = SaisirNombre("Veuillez choisir un produit en entrant le nombre correspondant : \n\tJus (1), \n\tEau (2),\n\tCafé (3).");
        
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