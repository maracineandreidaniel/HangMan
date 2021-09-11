function generateEmptySpaces(str){
    let i;
let text=[];
for(i=0;i<str.length;i++)
    if(str[i]!==" ")
        text.push(`<div class="litera"></div>`);
    else{
        text.push(`<div class="blank"></div>`);
    }
return text;
}

function nrLitere(str){
let cnt=0;
for(let i=0;i<str.length;i++)
    if("qwertyuiopasdfghjklzxcvbnm".includes(str[i]))
        cnt++;
return cnt;
}

function nrAparitiiLitera(str, ltr){
let cnt=0;
for(let i=0;i<str.length;i++)
    if(str[i]===ltr)
        cnt++;
    return cnt;
}

function arrayToString(arr){
    let text="";
    for(let i=0;i<arr.length;i++)
        text+=arr[i];
    return text;
}

function genereazaVieti(nr){
    text="";
    for(let i=0;i<nr;i++)
        text+= `<div class="life"></div>`;
    return text;
}

function umplereCuvant(str){
    let text="";
    for(let i=0;i<str.length;i++)
        text+=`<div class="litera">${str[i]}</div>`;
    return text;
}
