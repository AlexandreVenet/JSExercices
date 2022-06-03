let DOMmain;
let DOMScriptObjects;
let titleToDisplay, subTitleToDisplay;


// Lorsque le DOM est chargé
window.addEventListener('DOMContentLoaded', (e)=>
{
    let DOMnav = document.querySelector("nav");
    DOMnav.addEventListener('click', ClickNav);

    DOMmain = document.querySelector("main");

    document.querySelector('#DOMClear').addEventListener('click',(event)=>
    {
        DOMmain.innerHTML = "";
    });
});


// Clic sur un lien de la nav
function ClickNav(e)
{
    e.preventDefault();

    let link = e.target.closest("A");
    let datasetExo = link.dataset.exo;
    titleToDisplay = link.text;
    subTitleToDisplay = link.title;

    // eval(`${datasetExo}("${link.text}");`); // lancer une fonction par le nom avec un paramètre

    DOMScriptObjects = document.querySelector(`#${datasetExo}`);
    
    if(DOMScriptObjects == null )
    {
        let tag = document.createElement("script");
        tag.crossOrigin = "anonymous"; 
        tag.src = `scripts/${datasetExo}.js`;
        tag.id = datasetExo;
        document.body.appendChild(tag);
        tag.onload = function()
        {
            Instantiate(datasetExo);
        }
        tag.onerror = function(evt)
        {
            let text = `Un erreur de type <i>${evt.type}</i> est survenue.`
            if(evt.type == "error")
            {
                text += " <br>(Voilà qui est utile)";
            }

            titleToDisplay = `Erreur sur : ${titleToDisplay}`;
            AddHTML(text,"colorError");

            document.querySelector(`#${datasetExo}`).remove();
        }
    }
    else
    {
        Instantiate(datasetExo);
    }

    link.blur(); // annuler le focus
}


// Instancier une classe par son nom
function Instantiate(className, displayName)
{
    eval(`new ${className}("${displayName}")`); // pas besoin de var
    // console.log(testObject.constructor.name);
}


// Ajouter du contenu html à la div cible
// colorClass est optionnel ; la classe css correspondante doit exister
function AddHTML(texte, colorClass = null)
{
    // Afficher en haut de la div
    // let currentHTML = DOMmain.innerHTML;
    // DOMmain.innerHTML = 
    // `<div>
    //     <h2>${titre}</h2>
    //     <p>${texte}</p>
    // </div>
    // ${currentHTML}`;

    let couleur = "";
    if(colorClass != null)
    {
        couleur = ` class="${colorClass}"`;
    }

    // Afficher en bas de la div et scroller
    DOMmain.innerHTML += 
    `<div${couleur}>
        <h2>${titleToDisplay}<span> - ${subTitleToDisplay}</span></h2>
        <p>${texte}</p>
    </div>`;

    DOMmain.scrollTo(0, DOMmain.scrollHeight);
}

// Ajouter du contenu HTML (idem précédent) mais SANS paragraphe ni contrôle couleur
// Ceci pour librement structurer le DOM
function AddHTMLNoP(texte)
{
    // Afficher en bas de la div et scroller
    DOMmain.innerHTML += 
    `<div>
        <h2>${titleToDisplay}<span> - ${subTitleToDisplay}</span></h2>
        ${texte}
    </div>`;

    DOMmain.scrollTo(0, DOMmain.scrollHeight);
}


// Saisie utilisateur : un nombre
function SaisirNombre(texte)
{
    let saisieOk = false;
    let userInput;
    let nbre;

    while (!saisieOk) {
        userInput = prompt(texte);
        if(userInput != "" && userInput !== null)
        {
            nbre = Number(userInput);
            if(!isNaN(nbre))
            {
                saisieOk = true;
                break;
            }
        }
    }

    return nbre;
}


// Saisie utilisateur : une chaîne de caractères
function SaisirChaine(texte)
{
    let saisieOk = false;
    let userInput;

    while (!saisieOk) {
        userInput = prompt(texte);
        if(userInput != "" && userInput !== null)
        {
            saisieOk = true;
            break;
        }
    }

    return userInput;
}


// Arrondir un nombre à un nombre de décimales (ou aucune si 0)
function Arrondir(nbre, decimales)
{
    decimales = Math.pow(10, decimales);
    return Math.round((nbre + Number.EPSILON) * decimales) / decimales;
    // Number.EPSILON = variable d'ajustement pour la précision

    // Pour la représentation texte uniquement, il existe toFixed().
}