/*
*Objetivo - quando clicarmos no botao temos que mostrar a imagem de fundo correspondente 

-Passo 01 - dar um jeito de pegar o elemento HTMl dos botoes;

-Passo 02 - dar um jeito de indentificar o clique do usuario no botao;

-Passo 03 - desmarcar o botao selecionado anterior;

-Passo 04 - marcar o botao clicacdo como se estivesse selecionada;

-Passo 05 - esconder a imagem anterior;

-Passo 06 - fazer aparecer a imagem correspondente ao botao  clicado;
*/

//-Passo 01 - dar um jeito de pegar o elemento HTMl dos botoes;
const botoesCarrosel = document.querySelectorAll(".botao");
const listaImagens = document.querySelectorAll(".imagem")

//-Passo 02 - dar um jeito de indentificar o clique do usuario no botao;

botoesCarrosel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    //-Passo 03 - desmarcar o botao selecionado anterior;
    desativarBotaoSelecionado();

    //-Passo 04 - marcar o botao clicacdo como se estivesse selecionada;
    selecionarBotaoCarrosel(botao);

    //-Passo 05 - esconder a imagem ativa do fundo;
    esconderImagemAtiva();

//-Passo 06 - fazer aparecer a imagem correspondente ao botao clicado;
     mostrarImagemFundo(indice);
  });
});

function mostrarImagemFundo(indice) {
   listaImagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
   botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
   const fundoAtivo = document.querySelector(".ativa");
   fundoAtivo.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
   const botaoSelecionado = document.querySelector(".selecionado");
   console.log(botaoSelecionado.classList.remove("selecionado"));
}

