let escrever = document.getElementById("escrever")
let resultado = document.getElementById("resultado")
let botao9 = document.getElementById("botao9")
let botao8 = document.getElementById("botao8")
let botao7 = document.getElementById("botao7")
let botao6 = document.getElementById("botao6")
let botao5 = document.getElementById("botao5")
let botao4 = document.getElementById("botao4")
let botao3 = document.getElementById("botao3")
let botao2 = document.getElementById("botao2")
let botao1 = document.getElementById("botao1")
let botao0 = document.getElementById("botao0")
let botaoMultiplicacao = document.getElementById("botaoMultiplicacao")
let botaoMais = document.getElementById("botaoMais")
let botaoMenos = document.getElementById("botaoMenos")
let botaoDivisao = document.getElementById("botaoDivisao")
let TodosBotoes = document.getElementById("TodosBotoes")
let botaoigual = document.getElementById("botaoigual")
let reset = document.getElementById("reset")
let porcentage = document.getElementById("porcentage")
let delet = document.getElementById("delet")
function adicionartexto(valor){
        escrever.value= escrever.value+valor 
}
function calcular(){
    console.log(escrever.value)
    escrever.value= eval(escrever.value)
    console.log(escrever.value)
    escrever.value= escrever.value
}
function resetar(){
    escrever.value= ''
}
function deletar(){
    escrever.value=escrever.value.slice(0,-1)
}
function porcentagem(){
    conta=escrever.value +'/100'
    escrever.value= eval(conta)
}