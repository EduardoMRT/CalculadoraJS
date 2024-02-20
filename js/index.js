// function num(){

//     for(let x = 7; x<=9; x++){
//         var a = document.getElementById("btn"+x);
//         if(a.onclick){
//             console.log(a.value);
//         }
//         // var z = document.getElementById("btn"+x).value;
//         // console.log(z);
//     }
//     // var y = document.getElementById("btn7").value;

//     // console.log(y);
// }
var x;
var r = document.getElementById("resultMenor");
function num7(){
    x = document.getElementById("btn7").value;
    r.innerHTML = x;
}

function num8(){
    x = document.getElementById("btn8").value;
    r.innerHTML = x;
}
console.log(x);
var lista = lista+""+x;
console.log(lista); 
// r.innerHTML = lista;

// document.addEventListener("DOMContentLoaded", function() {
//     const botoes = document.querySelectorAll(".btn");
//     var valorDoBotao; // Declare a variável fora da função
//     var linha = valor;
//     botoes.forEach(function(botao) {
//         botao.addEventListener("click", function() {
//             valorDoBotao = this.value; // Atribua o valor do botão à variável
//             minhaFuncao(valorDoBotao); // Chame a função com o valor do botão
//         });
//     });

//     function minhaFuncao(valor) {
//         linha = valor+linha;            
//         console.log(linha); // Agora você pode usar o valor do botão aqui
//     }
// });
