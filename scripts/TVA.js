"use strict";

class TVA
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let montantHT = SaisirNombre("Veuillez entrer un montant HT en euros.");
        let tauxTVA = SaisirNombre("Veuillez entrer un taux de TVA en %.");
        
        let tauxTVANorm = tauxTVA / 100;
        let totalTVA = montantHT * tauxTVANorm;
        let totalTTC = montantHT + totalTVA;

        AddHTML(`Entrée : ${montantHT}€ HT, TVA à ${tauxTVA}%.
        <br>Total TVA : ${totalTVA}€
        <br>Total TTC : ${totalTTC}€`);    
    }
}