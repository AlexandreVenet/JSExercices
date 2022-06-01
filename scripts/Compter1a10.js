"use strict";

class Compter1a10
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let chaine = `<ul>\n`;

        for (let i = 1; i <= 10; i++) {
            chaine += `\t<li>${i}</li>\n`;
        }

        chaine+="</ul>";

        AddHTML(chaine);
    }
}