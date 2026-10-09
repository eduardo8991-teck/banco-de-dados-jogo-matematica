let pontos = 0;
let vidas = 3;
let pergunta = 1;
let respostaCorreta = 0;


const perguntaTexto = document.getElementById("pergunta");
const resposta = document.getElementById("resposta");
const mensagem = document.getElementById("mensagem");
const pontosTexto = document.getElementById("pontos");
const vidasTexto = document.getElementById("vidas");
const barra = document.getElementById("barra");


function novaPergunta(){


    if(pergunta > 10){
        finalizar();
        return;
    }


    let n1 = Math.floor(Math.random()*10)+1;
    let n2 = Math.floor(Math.random()*10)+1;


    let operacoes = ["+","-","×"];
    let op = operacoes[Math.floor(Math.random()*operacoes.length)];


    if(op === "+"){
        respostaCorreta = n1 + n2;
    }


    if(op === "-"){
        if(n2 > n1){
            let aux = n1;
            n1 = n2;
            n2 = aux;
        }
        respostaCorreta = n1 - n2;
    }


    if(op === "×"){
        respostaCorreta = n1 * n2;
    }


    perguntaTexto.innerHTML = `Pergunta ${pergunta}/10<br><br>${n1} ${op} ${n2} = ?`;


    resposta.value = "";
    resposta.focus();


    barra.style.width = ((pergunta-1)/10)*100 + "%";
}


function verificar(){


    if(resposta.value === ""){
        alert("Digite uma resposta!");
        return;
    }


    let valor = Number(resposta.value);


    if(valor === respostaCorreta){


        pontos += 10;


        mensagem.innerHTML = " V Muito bem! Você acertou!";
        mensagem.style.color = "green";


    }else{


        vidas--;


        mensagem.innerHTML = ` X Errou! A resposta era ${respostaCorreta}`;
        mensagem.style.color = "red";


    }


    pontosTexto.innerHTML = pontos;
    vidasTexto.innerHTML = vidas;


    if(vidas <= 0){
        finalizar();
        return;
    }


    pergunta++;


    setTimeout(()=>{
        mensagem.innerHTML="";
        novaPergunta();
    },1200);


}


function finalizar(){


    barra.style.width="100%";


    document.querySelector(".caixa").innerHTML=`


    <h2> Fim do Jogo </h2>


    <h3>Sua Pontuação:</h3>


    <h1>${pontos} pontos</h1>


    <p>${
        pontos>=80
        ? " Parabéns! Você foi excelente!"
        : pontos>=50
        ? " Muito bom!"
        : " Continue praticando!"
    }</p>


    <br>


    <button onclick="location.reload()">
        Jogar Novamente
    </button>


    `;
}


novaPergunta();

