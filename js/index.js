"use strict"


let ripetizioni=0;
let _refInterval;
let colors=["bg-warning","bg-success","bg-primary","bg-danger"];
let marche=["Fiat","Renault","Ford","Peugeot"];

window.onload=function (){
    //region Generazione wrapper superiore
    let wrapperVal=document.createElement("div");
    wrapperVal.id="wrapperVal";
    wrapperVal.classList.add("mx-auto","bg-light");
    document.getElementsByTagName("body")[0].append(wrapperVal);

    let wrapper=document.createElement("div");
    wrapper.id="wrapper";
    wrapper.classList.add("mx-auto");
    document.getElementsByTagName("body")[0].append(wrapper);

    let rowVal=document.createElement("div");
    rowVal.classList.add("row");
    wrapperVal.append(rowVal);

    let numMarca=document.createElement("div");
    numMarca.classList.add("col-sm-6");
    rowVal.append(numMarca);

    let numVal=document.createElement("div");
    numVal.classList.add("col-sm-6");
    rowVal.append(numVal);

    let labelMarca=document.createElement("h3");
    numMarca.append(labelMarca);
    labelMarca.innerHTML="Marca automobili";

    let labelVal=document.createElement("h3");
    numVal.append(labelVal);
    labelVal.innerHTML="Auto vendute";

    let simboloMarca=document.createElement("div");
    simboloMarca.id="divMarca";
    numMarca.append(simboloMarca);
    simboloMarca.classList.add("simboli")

    let simboloVal=document.createElement("div");
    simboloVal.id="divValue";
    numVal.append(simboloVal);
    simboloVal.classList.add("simboli")
    //endregion

    //region Generazione grafico
    let rowGrafico=document.createElement("div");
    for(let i=0;i<4;i++)
    {
        let divG=document.createElement("div");
        divG.id=marche[i];
        wrapper.append(divG);
        divG.innerHTML=marche[i];
        divG.style.border="1px solid black";
        divG.style.width="248px";
        divG.style.textAlign="center"
        divG.style.bottom="0px";
        divG.style.display="inline-block";
        divG.style.position="absolute";
        divG.style.left=250*i+"px";
        divG.classList.add(colors[i]);
        divG.style.height="30px";
        divG.style.lineHeight="30px";
        divG.style.fontSize="20pt";
        divG.style.fontWeight="bold";
        divG.addEventListener("mouseover",function(){
            showValue(this);
        });
        divG.addEventListener("mouseout",function (){
            hydeValue();
        })
    }
    //endregion

    //region Generazione Button
    let btnGioca=document.createElement("button");
    btnGioca.classList.add("btn","btn-success");
    btnGioca.id="btnGioca";
    document.getElementsByTagName("body")[0].append(btnGioca);
    btnGioca.innerHTML="START - ANALISI VENDITE";
    btnGioca.addEventListener("click",gioca);
    let divRis=document.createElement("div");
    divRis.id="divRis";
    divRis.classList.add("mx-auto");
    document.getElementsByTagName("body")[0].append(divRis);
    divRis.style.visibility="hidden";
    //endregion
}


function showValue(div){
    document.getElementById("divRis").innerHTML=div.innerHTML;
    document.getElementById("divRis").style.visibility="visible";
}

function hydeValue(){
    document.getElementById("divRis").innerHTML="";
    document.getElementById("divRis").style.visibility="hidden";
}

function gioca(){
    ripetizioni=0;
    _refInterval=setInterval(genera,100)
}

function genera(){
    if(ripetizioni<10){
        document.getElementById("divMarca").innerHTML=marche[Math.floor(4*Math.random())];
        document.getElementById("divValue").innerHTML=Math.floor(Math.random()*50+1);
        ripetizioni++;
    }
    else
    {
        clearInterval(_refInterval);
        document.getElementById(document.getElementById("divMarca").innerHTML).style.height=parseInt(document.getElementById(document.getElementById("divMarca").innerHTML).style.height)+parseInt(document.getElementById("divValue").innerHTML)+"px";
        document.getElementById(document.getElementById("divMarca").innerHTML+" - "+ document.getElementById("divMarca").innerHTML).style.height.split("px")[0];
        setTimeout(gioca,2000);
    }
}