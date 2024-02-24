// Corrigir bug do Safari

var contador = 0;
var linha = 0;
var linha1 = 0;
var linha2 = 0;
var linhaN1 = 0;
var linhaN2 = 0;
var operacao = null;
var histTemp = 0;

document.addEventListener("DOMContentLoaded", function () {
    const botoes = document.querySelectorAll(".btn");
    var valorDoBotao; // Declare a variável fora da função

    botoes.forEach(function (botao) {
        botao.addEventListener("click", function () {
            valorDoBotao = this.value; // Atribua o valor do botão à variável
            minhaFuncao(valorDoBotao); // Chame a função com o valor do botão
        });
    });

    function minhaFuncao() {

        function popular() {
            if (linha1 == 0) {
                linha1 = linha;
                linha1 = linha1.replace(/,/g, '.');
                linha = 0;
                verificar();
                
                linhaN1 = linha1.match(/\d+/g).join('');
                linhaN1 = parseFloat(linhaN1);
            } else if (linha2 == 0) {
                linha2 = linha;
                linha2 = linha2.replace(/,/g, '.');
                linhaN2 = linha2.match(/\d+/g).join('');
                linhaN2 = parseFloat(linhaN2);

                linha = 0;
                console.log("Var1: " + linhaN1 + "\nVar2:" + linhaN2);
                // resultado = linhaN1 + linhaN2;
                // linha = 0;
                // linha = parseInt(linha);
                // linha = resultado;

            }
        }

        verificar();

        function verificar() {
            if (linha == 0) {
                linha = null;
                linha = valorDoBotao;
            } else {
                linha += valorDoBotao;
            }
        }
        console.log(linha);

        if (valorDoBotao == "C") {
            linha = null;
            if (linha == null) {
                linha = 0;
                linha1 = 0;
                linha2 = 0;
                histTemp = resultadoAnt;
                resultadoAnt = 0;
                resultadoAnt = document.getElementById("resultadoAnt");
                resultadoAnt.innerHTML = "";
            }

        }

        if (valorDoBotao == "+") {
            operacao = "+";
            popular();
        }

        if (valorDoBotao == "*") {
            operacao = "*";
            popular();
        }

        if (valorDoBotao == "-") {
            operacao = "-";
            popular();
        }

        if (valorDoBotao == "/") {
            operacao = "/";
            popular();
        }



        if (valorDoBotao == "=") {
            var resultadoAnt = document.getElementById("resultadoAnt");
            linha2 = linha;
            linha2 = linha2.replace(/,/g, '.');
            linhaN2 = linha2.match(/\d+/g).join('');
            linhaN2 = parseInt(linhaN2);
            console.log("Var1: " + linhaN1 + "\nVar2:" + linhaN2);

            if (operacao == "+") {
                resultado = linhaN1 + linhaN2;
                resultadoAnt.innerHTML = linhaN1+"+"+linhaN2;
            } else if (operacao == "*") {
                resultado = linhaN1 * linhaN2;
                resultadoAnt.innerHTML = linhaN1+"*"+linhaN2;
            } else if (operacao == "-") {
                resultado = linhaN1 - linhaN2;
                resultadoAnt.innerHTML = linhaN1+"-"+linhaN2;
            } else if (operacao == "/") {
                resultado = linhaN1 / linhaN2;
                resultadoAnt.innerHTML = linhaN1+"/"+linhaN2;
            }

            linha = 0;
            linha = parseFloat(linha);
            linha = resultado;
        }
        if (linha1 != 0) {
            if (linha2 != 0) {
                const resultMenor = document.getElementById("resultMenor");
                resultMenor.innerHTML = linha;
            } else {
                const resultMenor = document.getElementById("resultMenor");
                resultMenor.innerHTML = linhaN1 + "" + linha;
            }
        } else {
            const resultMenor = document.getElementById("resultMenor");
            resultMenor.innerHTML = linha;
        }
        contador++;
    }


}



);
