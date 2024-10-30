const ajtbtn = document.getElementById("ajtbtn");
const ajtsction = document.getElementById("ajtsection");
const clsxajt = document.getElementById("clsxajt");

ajtbtn.onclick = function(){
    ajtsction.style.display = "block";

}

clsxajt.onclick = function(){
    ajtsction.style.display = "none";
}

const mdfbtn = document.getElementById("mdfbtn");
const mdfsction = document.getElementById("mdfsection");
const clsxmdf = document.getElementById("clsxmdf");

mdfbtn.onclick = function(){
    mdfsction.style.display = "block";

}

clsxmdf.onclick = function(){
    mdfsction.style.display = "none";
}