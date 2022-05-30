"use strict";

class PrimeLicenciement
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let age = SaisirNombre("Veuillez entrer un âge (nombre entier).");
        age = Math.round(Math.abs(age));

        let anciennete = SaisirNombre("Veuillez entrer un nombre d'années d'ancienneté (nombre entier).")
        anciennete = Math.round(Math.abs(anciennete));

        let dernierSalaire = SaisirNombre("Veuillez entrer le dernier salaire en euros.")
        dernierSalaire = Math.abs(dernierSalaire);
        

        // Ancienneté
        let primeAnciennete = 0;
        if(anciennete >= 1 && anciennete <= 10)
        {
            primeAnciennete = dernierSalaire * anciennete / 2;
        }
        else if(anciennete > 10)
        {
            primeAnciennete = (dernierSalaire * anciennete / 2) + (dernierSalaire * (anciennete - 10));
        }

        // Age
        let primeAge = 0;
        if(age >= 46 && age <= 49)
        {
            primeAge = dernierSalaire * 2;
        }
        else if(age >= 50)
        {
            primeAge = dernierSalaire * 5;
        }


        let total = primeAnciennete + primeAge;


        AddHTML(`Âge de ${age} an(s), ancienneté de ${anciennete} an(s), dernier salaire de ${dernierSalaire}€.
        <br>Votre prime est de ${total}€.`);
    }
}