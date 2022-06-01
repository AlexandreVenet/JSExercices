"use strict";

class Accroissement
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let accroisement = 0.89; // % 
        let habitants = 96809;
        let annee = 0;
        let cap = 120000;

        let chaine = `En 2015, il a été recensé ${habitants} habitants. Le taux d'accroissement de la population étant de ${accroisement}%, combien faudra-t-il d'années pour atteindre une population de ${cap} ? \n`;
        chaine += "<ul>\n";

        while (habitants < cap) {
            annee ++;
            habitants = habitants + (habitants * accroisement / 100);
            chaine += `\t<li>en ${2015 + annee}, il y aura ${Math.ceil(habitants)} habitants.</li>\n`;
        }

        chaine += "</ul>\n";

        chaine += `Avec un taux d'accroissement de la population de ${accroisement}%, il y aura ${Math.ceil(habitants)} habitants dans la ville de Tourcoing en ${2015 + annee}. Il aura fallu ${annee} années.`;

        AddHTML(chaine);
        
    }
}