const ajtbtn = document.getElementById("ajtbtn");
const ajtsction = document.getElementById("ajtsection");
const clsxajt = document.getElementById("clsxajt");

ajtbtn.onclick = function(){
    ajtsction.style.display = "block";

}

clsxajt.onclick = function(){
    ajtsction.style.display = "none";
}

const mdfbtns = document.querySelectorAll('#mdfbtn');
const clsxmdf = document.getElementById("clsxmdf");

mdfbtns.forEach(mdfbtn =>{
    mdfbtn.onclick = function(){
        ajtsction.style.display = "block";

    }
});

clsxmdf.onclick = function(){
    mdfsction.style.display = "none";
}