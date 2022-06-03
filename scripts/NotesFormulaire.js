"use strict";

class NotesFormulaire
{
    // Champs
    toutesNotes = [];
    DOMcontenus;
    DOMSorties;

    constructor()
    {
        this.Init();
    }

    Init()
    {
        // ID des éléments DOM à utiliser
        const saisirNotesID = this.SetRandomID("saisirNotes");
        const meilleureNoteID = this.SetRandomID("meilleureNote");
        const pireNoteID = this.SetRandomID("pireNote");
        const moyenneNoteID = this.SetRandomID("moyenneNote");
        const contenusID = this.SetRandomID("contenus");
        const sortiesID = this.SetRandomID("sorties");

        // Contenu du DOM
        const contentDOM = `
            <button class="backgroundBleu blanc" id="${saisirNotesID}">Saisir les notes</button>
            <button class="backgroundVert blanc" id="${meilleureNoteID}">Meilleure note</button>
            <button class="backgroundRouge blanc" id="${pireNoteID}">Pire note</button>
            <button class="backgroundGris blanc" id="${moyenneNoteID}">Moyenne</button>
            <p id="${contenusID}"></p>
            <p id="${sortiesID}"></p>
        `;

        // Afficher le contenu du DOM
        AddHTMLNoP(contentDOM);
        
        // Références du DOM
        const DOMsaisirNotes = document.querySelector(`#${saisirNotesID}`);
        const DOMmeilleureNote = document.querySelector(`#${meilleureNoteID}`);
        const DOMpireNote = document.querySelector(`#${pireNoteID}`);
        const DOMmoyenneNotes = document.querySelector(`#${moyenneNoteID}`);
        this.DOMcontenus = document.querySelector(`#${contenusID}`);
        this.DOMSorties = document.querySelector(`#${sortiesID}`);

        // Evénements 
        // Dans une classe, 2 syntaxes : fonction fléchée ou .bind(this)
        DOMsaisirNotes.addEventListener("click",this.SaisirNotes.bind(this));
        DOMmeilleureNote.addEventListener("click",(e)=>
        {   
            this.AfficherMinMax("Meilleur");
        });
        DOMpireNote.addEventListener("click",(e)=>
        {   
            this.AfficherMinMax("Pire");
        });
        DOMmoyenneNotes.addEventListener("click",this.AfficherMoyenne.bind(this));
    }

    /**
     * Saisir les notes et afficher dans le DOM dès la saisie.
     * Calcule la moyenne.
     */
    SaisirNotes()
    {
        let note;
        let totalNotes = 0;
        this.toutesNotes = [];
        this.DOMcontenus.innerHTML = "";
        this.DOMSorties.innerHTML = "";

        while (true) {
            note = SaisirNombre(`Veuillez entrer une note dans l'intervalle [0,20] (si > 20 alors 20). Entrer 777 pour quitter.`);
            if(note == 777) break;
            note = Math.abs(Math.trunc(note));
            if(note > 20) note = 20;
            this.toutesNotes.push(note);
            totalNotes += note;

            let contenuListe = "<p><b>Notes saisies :</b></p>\n";
            contenuListe += "<ul>\n";

            for (let i = 0; i < this.toutesNotes.length; i++) {
                contenuListe += `\t<li>Note ${i} : ${this.toutesNotes[i]}/20</li>\n`;
            }
            contenuListe += "</ul>\n";

            this.DOMcontenus.innerHTML = contenuListe;

            this.moyenne = Arrondir(totalNotes / this.toutesNotes.length,2);
        }

        if(this.toutesNotes.length == 0) 
        {
            this.DOMcontenus.innerHTML = "Aucune note n'est saisie.";
        }
    }

    // Définir un horodatage pour un texte (rendre unique l'ID dans l'interface)
    // Syntaxe fonction fléchée
    SetRandomID = (texte) =>
    {
        return texte + Date.now();
    }

    /**
     * Afficher la meilleure ou pire note.
     * @param {*} quoi "Meilleur" ou "Pire"
     */
    AfficherMinMax(quoi)
    {
        let couleur;
        let mot;
        let resultat = 0;

        if(quoi == "Meilleur")
        {
            couleur = "vert";
            mot = "meilleure";
        }
        else
        {
            couleur = "rouge";
            mot = "pire";
        }

        if(this.toutesNotes.length == 0)
        {
            this.DOMSorties.innerHTML = `<p class="${couleur}">Pas de notes.</p>`;
        }
        else
        {
            if(quoi == "Meilleur")
            {
                resultat = Math.max(...this.toutesNotes);
            }
            else
            {
                resultat = Math.min(...this.toutesNotes);
            }
            this.DOMSorties.innerHTML = `<p class="${couleur}">La ${mot} note est : <b>${resultat}/20.</b></p>`;
        }
    }

    /**
     * Afficher la moyenne dans l'élément cible.
     */
    AfficherMoyenne()
    {
        if(this.toutesNotes.length == 0)
        {
            this.DOMSorties.innerHTML = `<p class="gris">Pas de notes.</p>`;
        }
        else
        {
            this.DOMSorties.innerHTML = `<p class="gris">La moyenne des notes est : <b>${this.moyenne}/20.</b></p>`;
        }
    }
}