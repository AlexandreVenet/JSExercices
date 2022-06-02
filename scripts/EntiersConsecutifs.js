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

        let i; // hors boucle pour savoir si la boucle a tourné

        // let PERFORMANCEStartTime = performance.now();
        // console.log("Performance start"); // consulter horodatage en console
        console.time("Durée boucle"); // idem

        for (i = 1; i < nbre/2; i++) 
        {
            let iterateur = i;
            let somme = 0;
            let chaine = "";

            // Calculer le résultat
            while (somme < nbre) { 
                somme += iterateur;
                chaine += `${iterateur}+`;
                iterateur++;
                // console.log(iterateur);
            }

            // Si on obtient le résultat, alors c'est une suite correcte
            if(somme == nbre)
            {
                chaine = chaine.substring(0, chaine.length-1); // supprimer le "+" de fin
                DOMChaine += `\t<li>${chaine}</li>\n`;
            }
        }

        // let PERFORMANCEEndTime = performance.now();
        // console.log("Performance end"); // consulter horodatage en console
        console.timeEnd("Durée boucle"); //idem
        // console.log(`La boucle a duré ${PERFORMANCEEndTime - PERFORMANCEStartTime}ms.`);

        if(i == 1)
        {
            DOMChaine += "<li>Rien</li>";
        }

        DOMChaine += "</ul>";
        
        AddHTML(`Liste d'entiers chaînés dont la somme égale : ${nbre}.<br>${DOMChaine}`);
        
    }
}