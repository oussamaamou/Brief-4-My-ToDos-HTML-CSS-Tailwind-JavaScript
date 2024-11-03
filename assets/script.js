/** Declaration des Variables */
let formcard = document.getElementById("formcard");
let titre = document.getElementById("titre");
let statut = document.getElementById("statut");
let priorite = document.getElementById("priorite");
let date = document.getElementById("date");
let description = document.getElementById("description");
let titreerror = document.getElementById("titreerror");
let dateerror = document.getElementById("dateerror");
let dscrptionerror= document.getElementById("dscrptionerror");
let ajttch = document.getElementById("ajttch");
let mdftch = document.getElementById("mdftch");
let cardttr = document.getElementById("cardttr");
let todocount = document.getElementById("todocount");
let doingcount = document.getElementById("doingcount");
let donecount = document.getElementById("donecount");
let anmtdiv = document.getElementById("anmtdiv");
let anmtdivsp = document.getElementById("anmtdivsp");
let anmtdivmd = document.getElementById("anmtdivmd");
let rmvmark = document.getElementById("rmvmark");
let rmvmarksp = document.getElementById("rmvmarksp");
let rmvmarkmd = document.getElementById("rmvmarkmd");
let todocounts = 0;
let doingcounts = 0;
let donecounts = 0;
let rsrvr;
let etattch = 'creation';
let identifiant = 0;

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



/** Validation des Inputs */
formcard.addEventListener('submit',(e) => {

    if(titre.value === '' || titre.value.length > 20){
        e.preventDefault();
        titreerror.innerHTML = "Veuillez entrer un titre (Max 20 Lettres)";
        dscrptionerror.innerHTML = "";
        dateerror.innerHTML = "";

    
    }
    else if(date.value === ''){
        e.preventDefault();
        dateerror.innerHTML = "Veuillez entrer une date";
        titreerror.innerHTML = "";
        dscrptionerror.innerHTML = "";
        
    }
    else if(description.value === '' || description.value.length > 250){
        e.preventDefault();
        titreerror.innerHTML = "";
        dscrptionerror.innerHTML = "Veuillez entrer une description (Max 250 Lettres)";
        dateerror.innerHTML = "";

    }



    if (etattch === 'modification'){
        dataTchs[rsrvr] = {
            titre: titre.value,
            statut: statut.value,
            priorite: priorite.value,
            date: date.value,
            description: description.value,
            id: dataTchs[rsrvr].id
        };
        localStorage.setItem('taches', JSON.stringify(dataTchs));
    } 
    else{
        stockerdata();
    }

    placerlestaches(); 

});

function ouvrirform(){
    ajtsction.style.display = "block";
    cardttr.textContent = "Ajouter Une Tache";
    ajttch.innerHTML = "Ajouter";
    ajttchbtndiv.style.display = "flex";

}

function ouvrirmltplform(){
    ajtsction.style.display = "block";
    ajttchbtndiv.style.display = "flex";

}


/** Animation d'Ajout */
function animationtache(){
    anmtdiv.style.display = "block"; 
}

/** Animation de Suppression */
function animationtache(){
    anmtdiv.style.display = "block";
}

function animationtachesp(){
    anmtdivsp.style.display = "block";
}

function animationtachemd(){
    anmtdivmd.style.display = "block";
}

/** Supprimer l'Animation */
rmvmark.onclick = function(){
    anmtdiv.style.display = "none";
}

rmvmarksp.onclick = function(){
    anmtdivsp.style.display = "none";
}

rmvmarkmd.onclick = function(){
    anmtdivmd.style.display = "none";
}

/** Fermer le formulaire de l'Ajouter d'une Tache */
clsxajt.onclick = function() {

    ajtsction.style.display = "none";
    titre.value = '';
    date.value = '';
    description.value = '';
    titreerror.innerHTML = "";
    dateerror.innerHTML = "";
    dscrptionerror.innerHTML = "";
};


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
        id: identifiant,

    };
    
    if(etattch === 'creation'){
        dataTchs.push(nvllTch);
        identifiant++;
        localStorage.setItem('taches', JSON.stringify(dataTchs));
    }
    else{
        dataTchs [rsrvr]=nvllTch;
    }
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
        let tachebckgrndclr = '';

        switch(tache.priorite){
            case 'prt1':
                tachebckgrndclr = 'bg-yellow-300';
                break;

            case 'prt2':
                tachebckgrndclr = 'bg-blue-300';
                break;

            case 'prt3':
                tachebckgrndclr = 'bg-pink-300';
                break;

            default:
                break;
        }

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
            <div id="${tache.identifiant}" class="border-l-8 border-b-4 mt-10 mb-10 max-w-sm p-6 ${tachebckgrndclr} border ${bordercolor} rounded-lg shadow dark:bg-gray-800">
                <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> ${tache.titre} </h5>
                <p class="mb-3 text-xl font-bold text-gray-900 dark:text-white"> ${tache.date}</p>
                <button onclick="ModifierlaTache(${dataTchs.indexOf(tache)})" class="${backgrndclr} ${hoverclr} text-white font-bold py-2 px-4 rounded" onclick="modifierTache(${dataTchs.indexOf(tache)})">
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


/** Ouvrire le formulaire pour Modifier une Tache */

mdftch.onclick = function(){
    ModifierlaTache();
    animationtachemd();
}

function ModifierlaTache(i){
    titre.value = dataTchs[i].titre;
    statut.value = dataTchs[i].statut;
    priorite.value = dataTchs[i].priorite;
    date.value = dataTchs[i].date;
    description.value = dataTchs[i].description;
    ajtsction.style.display = "block";
    cardttr.textContent = "Modifier La Tache";
    ajttch.style.display = "none";
    mdfbtndiv.style.display = "flex";
    etattch = 'modification';
    rsrvr = i;

    placerlestaches();


}













/** Supprimer une Tache */

function supprimertche(i){

    dataTchs.splice(i,1);
    localStorage.taches = JSON.stringify(dataTchs);
    placerlestaches();
    animationtachesp();

}

animationtache();
placerlestaches();






