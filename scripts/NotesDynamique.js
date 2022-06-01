"use strict";

class NotesDynamique
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let note;

        let toutesNotes = [];
        let totalNotes = 0;
        let moyenne = 0;

        while (true) {
            note = SaisirNombre(`Veuillez entrer une note dans l'intervalle [0,20] (si > 20 alors 20).`);
            if(note == 777) break;
            note = Math.abs(Math.trunc(note));
            if(note > 20) note = 20;
            toutesNotes.push(note);
            totalNotes += note;
        }

        if(toutesNotes.length == 0) 
        {
            AddHTML("Rien du tout.");
            return;
        }

        moyenne = totalNotes / toutesNotes.length;
        
        let chaine = `La série comprend ${toutesNotes.length} note(s).<br>\n`;
        chaine += "<ul>\n";
        for (let i = 0; i < toutesNotes.length; i++) {
            chaine += `\t<li>Note ${i+1} : ${toutesNotes[i]}/20</li>\n`;
        }
        chaine += "</ul>\n";

        chaine += `Résultats : <br>
        <ul>
            <li class="vert">Meilleure note = ${Math.max(...toutesNotes)}/20</li>
            <li class="rouge">Pire note = ${Math.min(...toutesNotes)}/20</li>
            <li>Moyenne = ${Arrondir(moyenne,2)}/20</li>
        </ul>`;

        AddHTML(chaine);
    }
}