
let clickS = 0;
let clickN = 0;
function barrinha(br){
   if (br == 'Sim') {
       clickS += 1;
       document.querySelector('#S').innerHTML = clickS;
       document.querySelector('#S').style.width = (clickS * 10)+"px";
   } else if(br == 'Nao'){
       clickN += 1;
       document.querySelector('#N').innerHTML = clickN;
       document.querySelector('#N').style.width = (clickN * 10)+"px";
   }
}