"use strict";

class Notes
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let nbreNotes = SaisirNombre("Veuillez entrer un nombre de notes compris dans l'intervalle [1,10].");
        nbreNotes = Math.abs(Math.trunc(nbreNotes));

        if(nbreNotes == 0) 
        {
            AddHTML("Aucune note ? Alors zéro.");
            return;
        }
        else if(nbreNotes > 10)
        {
            AddHTML(`${nbreNotes} notes, c'est trop.`);
            return;
        }

        let toutesNotes = [];
        let totalNotes = 0;
        let moyenne = 0;

        for (let i = 0; i < nbreNotes; i++) {
            let note = SaisirNombre(`Note ${i+1} : veuillez entrer une note dans l'intervalle [0,20] (si > 20 alors 20).`);
            note = Math.abs(Math.trunc(note));
            if(note > 20) note = 20;
            toutesNotes.push(note);
            totalNotes += note;
        }

        moyenne = totalNotes / nbreNotes;

        // console.log(`Toutes notes : ${toutesNotes}`);
        
        let chaine = `La série comprend ${nbreNotes} note(s).<br>\n`;
        chaine += "<ul>\n";
        for (let i = 0; i < nbreNotes; i++) {
            chaine += `\t<li>Note ${i+1} : ${toutesNotes[i]}/20</li>\n`;
        }
        chaine += "</ul>\n";

        chaine += `Résultats : <br>
        <ul>
            <li class="vert">Meilleure note = ${Math.max(...toutesNotes)}/20</li>
            <li class="rouge">Pire note = ${Math.min(...toutesNotes)}/20</li>
            <li>Moyenne = ${moyenne}/20</li>
        </ul>`;

        // console.log(chaine);

        AddHTML(chaine);
    }
}