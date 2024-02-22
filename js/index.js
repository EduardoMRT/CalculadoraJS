var contador = 0;
var linha = 0;
var linha1 = 0;
var linha2 = 0;
var linhaN1 = 0;
var linhaN2 = 0;
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
            }

        }

        if (valorDoBotao == "+") {
            if (linha1 == 0) {
                linha1 = linha;
                linha = 0;
                verificar();
                linhaN1 = linha1.match(/\d+/g).join('');
                linhaN1 = parseInt(linhaN1);
            } else if (linha2 == 0) {
                linha2 = linha;
                linhaN2 = linha2.match(/\d+/g).join('');
                linhaN2 = parseInt(linhaN2);

                linha = 0;
                console.log("Var1: " + linhaN1 + "\nVar2:" + linhaN2);
                // resultado = linhaN1 + linhaN2;
                // linha = 0;
                // linha = parseInt(linha);
                // linha = resultado;
            }

        }

        if (valorDoBotao == "=") {
            linha2 = linha;
            linhaN2 = linha2.match(/\d+/g).join('');
            linhaN2 = parseInt(linhaN2);
            console.log("Var1: " + linhaN1 + "\nVar2:" + linhaN2);
            resultado = linhaN1 + linhaN2;
            linha = 0;
            linha = parseInt(linha);
            linha = resultado;
        }
        if (linha1 != 0) {
            if (linha2 != 0) {
                const resultMenor = document.getElementById("resultMenor");
                resultMenor.innerHTML = linha;
            }else{
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
