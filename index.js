let marka =[
    "BMW",
    "Opel",
    "Toyota",
    "Mercedes"
   ];


   let model=[
    ["X5", "X6"],
    ["Astra", "Vectra"],
    ["Camry", "Carolla"],
    ["190", "S-class"]
];
let images = [

    [ "img/X5.jpg",  "img/X6.jpg"],
    ["img/Astra.jpg", "img/Vectra.jpg"],
    ["img/Camry.jpg", "img/Carolla.jpg" ],
    
    ["img/190.jpg", "img/S-class.jpg"]
    
  ];

let marka_s =document.getElementById("marka");
let model_s =document.getElementById("model"); 






function markaSelect() {
    let data = `<option value="" disabled selected>Marka Select /option>`;
    for (let i = 0; i < marka.length; i++) {
      data += `<option value="${i}">${marka[i]}</option>`;
    }
    marka_s.innerHTML = data;
  }

markaSelect();

function modelSelect() {
    let value = marka_s.value;
    let data = `<option value="" disabled selected>Select Model</option>`;
    for (let i = 0; i < model[value].length; i++) {
      data += `<option value="${i}">${model[value][i]}</option>`;
    }
    model_s.innerHTML = data;
   
   
}

function print(){
    let mes = document.getElementById("message");
    
    let img=document.getElementById("img");

    mes.innerText=`${marka[marka_s.value]} ${model[marka_s.value][model_s.value]}`

    img.src = images[marka_s.value][model_s.value]
}



