"use strict";

class Palindrome
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let chaine = SaisirChaine("Veuillez entrer un mot.");
        chaine = chaine.toLowerCase();
        let inverse = chaine.split("").reverse().join("");
        let reponse = `Saisie : ${chaine} <br>Inverse : ${inverse} <br>`;
        (chaine == inverse) ? reponse += "C'est un palindrome." : reponse += "Ce n'est pas un palindrome.";
        AddHTML(reponse);
    }
}