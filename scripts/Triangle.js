"use strict";

class Triangle
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        alert("Soit le triangle ABC.")
        let longueurAB = SaisirNombre("Veuillez entrer la longueur de AB.");
        let longueurBC = SaisirNombre("Veuillez entrer la longueur de BC.");
        let longueurCA = SaisirNombre("Veuillez entrer la longueur de CA.");
        
        let texte = "";

        if(longueurAB == longueurBC == longueurCA)
        {
            texte = "triangle équilatéral";
        }
        else if(longueurAB == longueurBC)
        {
            texte = "triangle isocèle en B non équilatéral";
        }
        else if(longueurBC == longueurCA)
        {
            texte = "triangle isocèle en C non équilatéral";
        }
        else if(longueurAB == longueurCA)
        {
            texte = "triangle isocèle en A non équilatéral";
        }
        else
        {
            texte = "triangle scalène";
        }
        
        AddHTML(`AB = ${longueurAB}, BC = ${longueurBC}, CA = ${longueurCA} -> ${texte}`);
    }
}