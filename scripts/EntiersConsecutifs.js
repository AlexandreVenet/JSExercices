"use strict";

class EntiersConsecutifs
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let nbre = SaisirNombre("Veuillez entrer un nombre entier.");
        nbre = Math.abs(Math.trunc(nbre));

        let DOMChaine = "<ul>\n";

        for (let i = 1; i < nbre; i++) {
            
            let iterateur = i;
            let valeur = 0;
            let chaine = "";

            // Calculer le résultat
            while (valeur < nbre) { 
                valeur += iterateur;
                chaine += `${iterateur}+`;
                iterateur++;
                // console.log(iterateur);
            }

            // Si on obtient le résultat, alors c'est une suite correcte
            if(valeur == nbre)
            {
                chaine = chaine.substring(0, chaine.length-1); // supprimer le "+" de fin
                DOMChaine += `\t<li>${chaine}</li>\n`;
            }

        }

        DOMChaine += "</ul>";
        
        AddHTML(`Liste d'entiers chaînés dont la somme égale : ${nbre}.<br>${DOMChaine}`);
        
    }
}