"use strict";

class TestInputs
{
    constructor()
    {
        this.Init();
    }

    Init()
    {
        let id = SaisirChaine("Veuillez entrer le courriel d'identification (toto@toto.toto).");
        let pass = SaisirChaine("Veuillez entrer le passe (1234).");
        
        const idOk = "toto@toto.toto";
        const passOk = "1234";

        // Façon 1
        // if(id == idOk && pass == passOk)
        // {
        //     AddHTML(`Id et passe sont corrects.`);
        // }
        // else
        // {
        //     let result = "";
        //     if(id != idOk) result += `L'id "${id}" est incorrect. <br>`
        //     if(pass != passOk) result += `Le passe "${pass}" est incorrect.`;
        //     AddHTML(result);
        // }

        // Façon 2
        if(id === idOk)
        {
            if(pass === passOk)
            {
                AddHTML(`Id et passe sont corrects.`);
            }
            else
            {
                AddHTML(`Le passe est incorrect.`);
            }
        }
        else
        {
            AddHTML(`L'id est incorrect.`);
        }

        // Autres façons...
    }
}