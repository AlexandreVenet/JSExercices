"use strict";

class TaillePoids
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let taille = SaisirNombre("Veuillez entrer une taille en cm.");
        let poids = SaisirNombre("Veuillez entrer un poids en kg.");

        let sortie = "0";

        if(
            (poids >= 43 && poids <= 47 && taille >= 145 && taille < 172)
            || (poids >= 48 && poids <= 53 && taille >= 145 && taille < 169)
            || (poids >= 54 && poids <=59 && taille >= 145 && taille < 166)
            || (poids >= 60 && poids <= 65 && taille >= 145 && taille < 163)
        )
        {
            sortie = "prenez la taille 1";
        }
        else if(
            (poids >= 48 && poids <= 53 && taille >= 169 && taille < 183)
            || (poids >= 54 && poids <= 59 && taille >= 166 && taille < 178)
            || (poids >= 60 && poids <= 65 && taille >= 163 && taille < 175)
            || (poids >= 66 && poids <= 71 && taille >= 160 && taille < 162)
            )
        {
            sortie = "prenez la taille 2";
        }
        else if(
            (poids >= 54 && poids <= 59 && taille >= 178 && taille <= 183)
            || (poids >= 60 && poids <= 65 && taille >= 175 && taille <= 183)
            || (poids >= 66 && poids <= 71 && taille >= 172 && taille <= 183)
            || (poids >= 72 && poids <= 77 && taille >= 163 && taille <= 183)
        )
        {
            sortie = "prenez la taille 3";
        }
        else
        {
            sortie = "va falloir ajuster..";
        }
        
        AddHTML(`${taille}cm et ${poids}kg : ${sortie}.
        <br><img src="Archive/PoidsTailles.png"/>`);
    }
}