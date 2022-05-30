"use strict";

class CategorieAge
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let age = SaisirNombre("Veuillez entrer un âge (nombre entier).");
        
        age = Math.round(age);

        let sortie = "";

        switch (true) {
            case age < 0:
                sortie = "pas encore disponible pour pratiquer";
                break;
            case age >= 0 && age < 3:
                sortie = "trop jeune pour pratiquer";
                break;
            case age >= 3 && age <= 6:
                sortie = "Baby";
                break;
            case age >= 7 && age <= 8:        
                sortie = "Poussin";
                break;
            case age >= 9 && age <= 10 :
                sortie = "Pupille";
                break;
            case age >= 11 && age <= 12 :
                sortie = "Minime";
                break;
            case age >= 13 && age < 18 :
                sortie = "Cadet";
                break;
            case age >= 18 :
                sortie = "trop âgé pour pratiquer";
                break;
            default:
                break;
        }
            
        AddHTML(`${age} ans : <i>${sortie}</i>`);
    }
}