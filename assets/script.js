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
const ajtsction = document.getElementById("ajtsection");
const clsxajt = document.getElementById("clsxajt");

ajtbtn.onclick = function (){
    ouvrirform();
};

ajttch.onclick = function (){
    stockerdata();
    placerlestaches();
};

function ouvrirform(){
    ajtsction.style.display = "block";
    cardttr.textContent = "Ajouter Une Tache";
    ajttch.innerHTML = "Ajouter";

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

function placerlestaches(){
    dataTchs.forEach(tache =>{
        switch(tache.statut){
            case 'todo':
                let tdotch = '';
                for (i=0 ; i < dataTchs.length ;i++){
                    tdotch += `
                    <div class="border-l-8 mt-10 max-w-sm p-6 bg-white border border-green-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">             
                    <h5 id="titrecard" class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> ${dataTchs[i].titre} </h5>
                    <p id="datecard" class="mb-3 text-xl font-bold text-gray-900 dark:text-white"> ${dataTchs[i].date}</p>
                    <button id="mdfbtn" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Modifier <i class="fa-solid fa-pen"></i>
                    </button>
            
                    <button id="sprmbtn" onclick="supprimertche( ${i} )" class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
                        Supprimer <i class="fa-solid fa-trash"></i>
                    </button>
                            
                    </div>
                    `
                    todocounts ++;
                    todocount.textContent = todocounts;
                }
                document.getElementById('tododiv').innerHTML = tdotch;
            break;

            case 'doing':
                let doigtch = '';
                for (i=0 ; i < dataTchs.length ;i++){
                    doigtch += `
                    <div class="border-l-8 mt-10 max-w-sm p-6 bg-white border border-red-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">             
                    <h5 id="titrecard" class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> ${dataTchs[i].titre} </h5>
                    <p id="datecard" class="mb-3 text-xl font-bold text-gray-900 dark:text-white"> ${dataTchs[i].date}</p>
                    <button id="mdfbtn" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Modifier <i class="fa-solid fa-pen"></i>
                    </button>
            
                    <button id="sprmbtn" onclick="supprimertche( ${i} )" class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
                        Supprimer <i class="fa-solid fa-trash"></i>
                    </button>
                            
                    </div>
                    `
                    doingcounts ++;
                    doingcount.textContent = doingcounts;
                }
                document.getElementById('doingdiv').innerHTML = doigtch;
            break;

            case 'done':
                let dnetch = '';
                for (i=0 ; i < dataTchs.length ;i++){
                    dnetch += `
                    <div class="border-l-8 mt-10 max-w-sm p-6 bg-white border border-purple-800 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">             
                    <h5 id="titrecard" class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> ${dataTchs[i].titre} </h5>
                    <p id="datecard" class="mb-3 text-xl font-bold text-gray-900 dark:text-white"> ${dataTchs[i].date}</p>
                    <button id="mdfbtn" class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                        Modifier <i class="fa-solid fa-pen"></i>
                    </button>

                    <button id="sprmbtn" onclick="supprimertche( ${i} )" class="bg-transparent hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded">
                        Supprimer <i class="fa-solid fa-trash"></i>
                    </button>
                            
                    </div>
                    `
                    donecounts ++;
                    donecount.textContent = donecounts;
                }
                document.getElementById('donediv').innerHTML = dnetch;
            break;

            default :
            break;
        }
    });
}









/** Supprimer une Tache */

function supprimertche(i){

    dataTchs.splice(i,1);
    localStorage.taches = JSON.stringify(dataTchs);
    placerlestaches();
    

}

placerlestaches();






