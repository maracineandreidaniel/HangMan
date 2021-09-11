let buton=document.querySelector('.joacaBut');
let litere=document.querySelector('.litere');
let lives=document.querySelector('.lives');
let amRaspuns=document.querySelector('.amRaspuns');
let butonGhiceste=document.querySelector('.ghicesteBut');
let sint1;
let litereGhicite;
let nrVieti=3;
let contor=0;
let litereSpace="qwertyuiopasdfghjklzxcvbnm ";
let gresite=[];

buton.addEventListener('click',()=>{

    

    contor=0;
    let flag=0;
    let sint=prompt("Introduceti combinatia dorita:");
        for(let i=0;i<sint.length;i++)
            if(litereSpace.includes(sint[i])===false){
                flag=1;
                break;
            }

            if(flag===1){
                alert("Ati introdus un caracter nepermis!");
            }
            else{

            console.log(flag);
    litereGhicite=generateEmptySpaces(sint);
    litere.innerHTML=arrayToString(litereGhicite);
    sint1=sint;
    lives.innerHTML=arrayToString(genereazaVieti(nrVieti));
            }
})


        butonGhiceste.addEventListener('click', ()=>{

            if(sint1.length===0){
                alert("Trebuie prima data sa incepeti jocul! Apasati pe 'Incepe Jocul' ");
                contor=0;
            }
            else{
            let letter=prompt("Introduceti litera dorita:");
                    if(litereGhicite.includes(`<div class="litera">${letter}</div>`)){
                        alert("Litera dvs a fost deja introdusa!");
                    }
                    else if("0123456789".includes(letter)===true || letter===null || letter.length>1)
                        alert("Trebuie introdusa o litera!");
                    else if(sint1.includes(letter)==false){
                            if(gresite.includes(letter))
                                alert("Litera(gresita) a fost deja adaugata!")
                            else{
                        alert("Aceasta litera nu se regaseste!");
                        nrVieti--;
                        gresite.push(letter);
                        lives.innerHTML=arrayToString(genereazaVieti(nrVieti));

                        if(nrVieti===0){
                            alert("Ai pierdut! :(");
                            nrVieti=3;
                            litere.innerHTML=umplereCuvant(sint1);
                            contor=0;
                            sint1="";
                            return false;
                        }
                    }
                    }
                    else{

                        for(let i=0;i<sint1.length;i++)
                            if(sint1[i]===letter){
                                litereGhicite[i]=`<div class="litera">${letter}</div>`;
                                
                            }

                            contor+=nrAparitiiLitera(sint1, letter);
                            console.log(contor);
                            litere.innerHTML=arrayToString(litereGhicite);

                            if(contor===nrLitere(sint1)){
                                alert("Ai castigat!! :)");
                                contor=0;
                                sint1="";
                            }

                            
                    
                }
                
            }


        })

        amRaspuns.addEventListener('click', ()=>{

            
            if(sint1.length===0){
                alert("trebuie sa incepeti jocul");
                contor=0;
            }

            else{
            let incercare=prompt("introdu raspunsul final");

                if(incercare===sint1){
                    alert("felicitari, ati castigat");
            litere.innerHTML=umplereCuvant(sint1);
            contor=0;
            sint1="";
                }
                else{
                    alert("gresit, nu acela e raspunsul final");
                }

            }

        })






