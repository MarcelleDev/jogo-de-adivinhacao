let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;
const maxTentativas = 3;

function verificarPalpite() {
    let palpite = parseInt(document.getElementById("guess").value);
    let mensagem = document.getElementById("mensagem");
    let tentativasSpan = document.getElementById("tentativas");
    let input = document.getElementById("guess");
    let botao = document.querySelector("button");

    if (isNaN(palpite) || palpite < 1 || palpite > 10) {
        mensagem.innerText = "Digite um número válido entre 1 e 10!";
        return;
    }

    tentativas++;
    tentativasSpan.innerText = tentativas;

    if (palpite === numeroSecreto) {
        mensagem.innerText = `🎉 Parabéns! Você acertou em ${tentativas} tentativa(s)!`;
        mensagem.style.color = "whithe";
        input.disabled = true;
        botao.disabled = true;
    } else if (tentativas >= maxTentativas) {
        mensagem.innerText = `❌ Você perdeu! O número era ${numeroSecreto}.`;
        mensagem.style.color = "red";
        input.disabled = true;
        botao.disabled = true;
    } else if (palpite < numeroSecreto) {
        mensagem.innerText = `🔼 Tente um número maior! Você tem ${maxTentativas - tentativas} tentativa(s) restante(s).`;
        mensagem.style.color = "blue";
    } else {
        mensagem.innerText = `🔽 Tente um número menor! Você tem ${maxTentativas - tentativas} tentativa(s) restante(s).`;
        mensagem.style.color = "red";
    }
}
