let randomNumbers = sortear(6);

let n1 = document.getElementById("num1");
let n2 = document.getElementById("num2");
let n3 = document.getElementById("num3");
let n4 = document.getElementById("num4");
let n5 = document.getElementById("num5");
let n6 = document.getElementById("num6");

n1.innerHTML = randomNumbers[0];
n2.innerHTML = randomNumbers[1];
n3.innerHTML = randomNumbers[2];
n4.innerHTML = randomNumbers[3];
n5.innerHTML = randomNumbers[4];
n6.innerHTML = randomNumbers[5];


//refresh
botao.addEventListener("click", refresh)

function refresh(){
 location.reload();
}

function sortear(n){
  let i = 0;
  let array = [];
  let ran = 0;

  while(i < n){
    ran = Math.ceil(Math.random()*60); 

    if(array.indexOf(ran) === -1){
        array.push(ran);  
        i++;   
    }
  }
  return array.sort((a, b) => a-b);
}

