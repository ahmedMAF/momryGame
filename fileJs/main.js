//get some elements
let startDiv = document.querySelector(".strt-play");
let startPlay = document.querySelector(".strt-play span:nth-child(2)");
let pesonName = document.querySelector(".nots .name");
let contentBlocks = document.querySelector(".content-blocks");
let blocks = document.getElementsByClassName("block");
let arrBlocks = Array.from(blocks);
let numOfTrails = document.querySelector(".tries");
let i = 0;
let temp1;
let temp2;
let count = 0;

//start game
startPlay.onclick = function(){
    pesonName.innerHTML = window.prompt("please Enter your Name" , "your Name");
    startDiv.classList.remove("strt-play");
    startPlay.innerHTML = "";
    numOfTrails.innerHTML = "0";
    count = 0;
    document.querySelector(".finsh-style").style = "display: none;";
    for(let i = 0 ; i < arrBlocks.length ; i++){
        arrBlocks[i].classList.remove("rotaty");
    }
    rearrangement();
}
//test area
contentBlocks.onclick = function(e){
    if(i === 3){
        i = 0;
        if(temp2 === temp1){
        }
        else{
        document.querySelectorAll(`.${temp2.substring((temp2.indexOf(" ")+1), temp2.lastIndexOf(" "))}`)[0].classList.remove("rotaty");
        document.querySelectorAll(`.${temp2.substring((temp2.indexOf(" ")+1), temp2.lastIndexOf(" "))}`)[1].classList.remove("rotaty");
        document.querySelectorAll(`.${temp1.substring((temp1.indexOf(" ")+1), temp1.lastIndexOf(" "))}`)[0].classList.remove("rotaty");
        document.querySelectorAll(`.${temp1.substring((temp1.indexOf(" ")+1), temp1.lastIndexOf(" "))}`)[1].classList.remove("rotaty");
        numOfTrails.innerHTML = ++ count;
        }
    }

    if(e.target.classList.contains("front") || e.target.classList.contains("back")){
        if(e.target.parentElement.classList.contains("rotaty")){
            return false;
        }
        e.target.parentElement.classList.add("rotaty");
        i++;
        if(i === 1){
            temp1 = e.target.parentElement.classList + "";
        }
        else{
            temp2 = e.target.parentElement.classList + "";
        }
    }
    else if(e.target.classList.contains("block")){
        if(e.target.classList.contains("rotaty")){
            return false;
        }
        e.target.classList.add("rotaty");
        i++;
        if(i === 1){
            temp1 = e.target.classList + "";
        }
        else{
            temp2 = e.target.classList + "";
        }
    }
    else if(e.target.classList.contains("a")){
        if(e.target.parentElement.parentElement.classList.contains("rotaty")){
            return false;
        }
        e.target.parentElement.parentElement.classList.add("rotaty");
        i++;
        if(i === 1){
            temp1 = e.target.parentElement.parentElement.classList + "";
        }
        else{
            temp2 = e.target.parentElement.parentElement.classList + "";
        }
    }
    if(i === 2){
        i = 3;
    }
    if(document.querySelectorAll(".rotaty").length === arrBlocks.length){
        startDiv.classList.add("strt-play");
        startPlay.innerHTML = "Play Again";
        document.querySelector(".finsh-style").style = "display: block;";
    }
}

function rearrangement(){
    for(let i = 0 ; i < arrBlocks.length ; i++){
        let num = Math.floor(Math.random() * arrBlocks.length);
        arrBlocks[i].style = `order: ${num};`;
    }
}