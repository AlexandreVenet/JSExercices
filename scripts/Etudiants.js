"use strict";

class Etudiants
{
    constructor()
    {
        this.Init();
    }

    Init()
    {   
        let etudiants = 
        [
            new Etudiant("José", "Garcia", {fançais:10, anglais:7, humour:9}), 
            new Etudiant("Antoine", "De Caunes", {fançais:15, anglais:6, humour:16, informatique:4, sport:10})
        ];

        let chaine = "<p>Les notes des étudiants sont les suivantes.</p><br>\n";

        for (let i = 0; i < etudiants.length; i++) {
            chaine += `<p><b>${etudiants[i].prenom} ${etudiants[i].nom}</b></p>\n`;
            chaine += "<ul>\n";
            
            let totalNotes = 0;
            let nbreNotes = 0;
            let moyenne = 0;

            for (const key in etudiants[i].matieres) {
                let valeur = etudiants[i].matieres[key];
                chaine += `\t<li>${key} : ${valeur}/20</li>\n`;
                totalNotes += valeur;
                nbreNotes ++;
            }
            chaine += "</ul>\n";
            
            moyenne = totalNotes/nbreNotes;

            let classeCSS = "rouge";
            if(moyenne >= 10) classeCSS = "vert";
            chaine += `<p class="${classeCSS}">Moyenne générale : ${Arrondir(moyenne,2)}/20</p><br>`;
        }

        AddHTML(chaine);
    }
}


class Etudiant
{
    prenom;
    nom;
    matieres;

    constructor(prenom, nom, matieres)
    {
        this.prenom = prenom;
        this.nom = nom;
        this.matieres = matieres;
    }
}