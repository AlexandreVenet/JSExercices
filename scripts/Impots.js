"use strict";

class Impots
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let revenuNet = SaisirNombre("Veuillez entrer un montant net imposable.");

        let nbreAdultes = SaisirNombre("Veuillez entrer un nombre d'adultes.");
        nbreAdultes = Math.round(Math.abs(nbreAdultes));

        let nbreEnfants = SaisirNombre("Veuillez entrer un nombre d'enfants.");
        nbreEnfants = Math.round(Math.abs(nbreEnfants));


        // Calcul des parts 
        let nbreParts = nbreAdultes;
        
        if(nbreEnfants > 2)
        {
            nbreParts += (2 * 0.5) + (nbreEnfants-2);
        }
        else
        {
            nbreParts += nbreEnfants * 0.5;
        }
        

        // Montant selon les parts
        let montant = revenuNet / nbreParts;


        // Taux d'imposition par catégorie de revenus
        let valeur = 0; // résultat
        valeur += this.CalculValeurParSeuils(montant, 10226, 26070, 11);
        valeur += this.CalculValeurParSeuils(montant, 26071, 74545, 30);
        valeur += this.CalculValeurParSeuils(montant, 74546, 160336, 41);
        valeur += this.CalculValeurParSeuils(montant, 160337, Number.POSITIVE_INFINITY, 45); // ou Math.Infinity


        // Multiplier par le nombre de parts
        let impot = valeur * nbreParts;


        // Arrondir 
        impot = Arrondir(impot,0);


        AddHTML(`<a href="https://www.economie.gouv.fr/particuliers/tranches-imposition-impot-revenu" target="_blank" title="Référence economie.gouv">Référence economie.gouv</a><br>
        Revenu net = ${revenuNet}€, adultes = ${nbreAdultes}, enfants = ${nbreEnfants}<br>
        Nombre de parts (quotient familial) = ${nbreParts}<br>
        Montant selon le nombre de parts = ${montant}€<br>
        Impôt = ${impot}€`);
    }


    CalculValeurParSeuils(montant, seuilBas, seuilHaut, tauxImpot)
    {
        let valeur = 0;

        if(montant >= seuilBas)
        {
            if(montant >= seuilHaut)
            {
                valeur = (seuilHaut - seuilBas) * tauxImpot / 100; 
            }
            else
            {
                valeur = (montant - seuilBas) * tauxImpot / 100;
            }
        }

        console.log(`Valeur à ${tauxImpot} = ${valeur}`);

        return valeur;
    }
}