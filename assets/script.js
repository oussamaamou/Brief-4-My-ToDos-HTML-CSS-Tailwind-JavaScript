/** Declaration des Variables */
let titre = document.getElementById("titre");
let statut = document.getElementById("statut");
let priorite = document.getElementById("priorite");
let date = document.getElementById("date");
let description = document.getElementById("description");
let ajttch = document.getElementById("ajttch");
let cardttr = document.getElementById("cardttr");
let todocount = document.getElementById("todocount");
let doingcount = document.getElementById("doingcount");
let donecount = document.getElementById("donecount");
let todocounts = 0;
let doingcounts = 0;
let donecounts = 0;

todocount.textContent = todocounts;
doingcount.textContent = doingcounts;
donecount.textContent = donecounts;



/** Ouvrir le formulaire pour Ajouter une Tache */
const ajtbtn = document.getElementById("ajtbtn");
const ajtbtnmltpl = document.getElementById("ajtbtnmltpl");
const ajtsction = document.getElementById("ajtsection");
const clsxajt = document.getElementById("clsxajt");

/** Ajout Simple */
ajtbtn.onclick = function (){
    ouvrirform();
};

/** Ajout Multiple */
ajtbtnmltpl.onclick = function(){
    ouvrirmltplform();
};

ajttch.onclick = function (){
    stockerdata();
    placerlestaches();
};

function ouvrirform(){
    ajtsction.style.display = "block";
    cardttr.textContent = "Ajouter Une Tache";
    ajttch.innerHTML = "Ajouter";
    mltpldiv.style.display = "none";
    ajttchbtndiv.style.display = "flex";

}

function ouvrirmltplform(){
    ajtsction.style.display = "block";
    cardttr.textContent = "Ajouter Des Tache";
    ajttch.innerHTML = "Ajouter";
    mltpldiv.style.display = "block";
    ajttchbtndiv.style.display = "inline";

}

/** Fermer le formulaire de l'Ajouter d'une Tache */
clsxajt.onclick = function(){
    ajtsction.style.display = "none";
}


/** Ouvrire le formulaire pour Modifier une Tache */
const mdfbtns = document.querySelectorAll('#mdfbtn');
mdfbtns.forEach(mdfbtn =>{
    mdfbtn.onclick = function(){
        ajtsction.style.display = "block";
        cardttr.textContent = "Modifier La Tache";
        ajttch.innerHTML = "Modifier";

    }
});


/** Ajouter une Tache */

let dataTchs = [];


if(localStorage.getItem('taches') != null){
    dataTchs = JSON.parse(localStorage.getItem('taches'));
}

function stockerdata(){
    let nvllTch = {
        titre:titre.value,
        statut:statut.value,
        priorite:priorite.value,
        date:date.value,
        description:description.value,

    }
    dataTchs.push(nvllTch);
    localStorage.setItem('taches', JSON.stringify(dataTchs));
}


/** Placer les taches */

function placerlestaches() {

    document.getElementById('tododiv').innerHTML = '';
    document.getElementById('doingdiv').innerHTML = '';
    document.getElementById('donediv').innerHTML = '';

    
    todocounts = 0;
    doingcounts = 0;
    donecounts = 0;

    
    dataTchs.forEach(tache => {

        let hoverclr = '';
        let backgrndclr = '';
        let bordercolor = '';
        switch(tache.statut){
            case 'todo':
                hoverclr = 'hover:bg-green-500';
                backgrndclr = 'bg-green-700';
                bordercolor = 'border-green-700';
                break;

            case 'doing':
                hoverclr = 'hover:bg-red-500';
                backgrndclr = 'bg-red-700';
                bordercolor = 'border-red-700';
                break;

            case 'done':
                hoverclr = 'hover:bg-purple-500';
                backgrndclr = 'bg-purple-700';
                bordercolor = 'border-purple-700';
                break;

            default:
                break;
        }

        let tachesHTML = `
            <div id="divtchctnr" class="border-l-8 border-b-4 mt-10 mb-10 max-w-sm p-6 bg-white border ${bordercolor} rounded-lg shadow dark:bg-gray-800">
                <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> ${tache.titre} </h5>
                <p class="mb-3 text-xl font-bold text-gray-900 dark:text-white"> ${tache.date}</p>
                <button class="${backgrndclr} ${hoverclr} text-white font-bold py-2 px-4 rounded" onclick="modifierTache(${dataTchs.indexOf(tache)})">
                    Modifier <i class="fa-solid fa-pen"></i>
                </button>
                <button onclick="supprimertche(${dataTchs.indexOf(tache)})" class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
                    Supprimer <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;

        switch(tache.statut) {
            case 'todo':
                document.getElementById('tododiv').innerHTML += tachesHTML;
                todocounts++;
                break;

            case 'doing':
                document.getElementById('doingdiv').innerHTML += tachesHTML;
                doingcounts++;
                break;

            case 'done':
                document.getElementById('donediv').innerHTML += tachesHTML;
                donecounts++;
                break;

            default:
                break;
        }
    });

    todocount.textContent = todocounts;
    doingcount.textContent = doingcounts;
    donecount.textContent = donecounts;

}









/** Supprimer une Tache */

function supprimertche(i){

    dataTchs.splice(i,1);
    localStorage.taches = JSON.stringify(dataTchs);
    placerlestaches();
    

}

placerlestaches();






