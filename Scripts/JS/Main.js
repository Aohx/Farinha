document.addEventListener("DOMContentLoaded", () => {
  const btnIniciar = document.getElementById("btn-iniciar");
  const telaInicial = document.getElementById("tela-inicial");

  const audio = new Audio("./Scripts/MUSIC/Undertale - Shop.mp3");

  btnIniciar.addEventListener("click", () => {
      audio.volume = 0.5;
      audio.play();
      telaInicial.style.display = "none";
  });
});

const dialogoSim = [
  "ah, eu pensei que seria mais difícil.<br> quer mesmo?",
  "que bom! enfim, eu tenho uma última coisa pra te<br> mostrAAAAAAA SOCORRO"
];

const dialogoNao = [
  "O QUÊ? não quer mesmo?",
  "tá zoando?",
  "m-mas por quê?<br> você não gosta de mim?",
  "espera...",
  "sniff... sniff... AAAAA!"
];

let proximo = document.querySelector(".btn-next");
let fala = document.querySelector(".fala");
let botaoSim = document.querySelector(".btn-esquerda");
let botaoNao = document.querySelector(".btn-direita");

proximo.addEventListener("click", function() {
  document.querySelector(".personagem img").src = "Scripts/IMG/Fechada.png";
  proximo.disabled = true;
  proximo.style.pointerEvents = "none";
  digitarTexto("faltava oficializar, então...<br> você quer namorar comigo?", function() {
    botaoSim.style.opacity = "100%";
    botaoSim.style.pointerEvents = "all";
    botaoNao.style.display = "block";
    proximo.style.display = "none";
  });
});

let caminho = null;
let etapa = 0;
let indexDialogoSim = 0;
let indexDialogoNao = 0;

function digitarTexto(texto, callback) {
  let index = 0;
  fala.innerHTML = "";
  const textoComQuebras = texto.replace(/\n/g, "<br>");

  function digitar() {
    if (index < textoComQuebras.length) {
      if (textoComQuebras.substring(index, index + 4) === "<br>") {
        fala.innerHTML += "<br>";
        index += 4;
      } else {
        fala.innerHTML += textoComQuebras.charAt(index);
        index++;
      }

      //lentidao no inicio
      if (texto.includes("você quer namorar comigo?")) {
        if (index <= texto.indexOf("então...") + "então...".length) {
          setTimeout(digitar, 50);
        } else {
          setTimeout(digitar, 120);
        }

      } else {
        setTimeout(digitar, 50);
      }
    } else if (callback) {
      callback();
    }
  }

  digitar();
};

function verificarCaminho() {
  if (caminho === "nao") {
    if (indexDialogoNao < dialogoNao.length) {
      digitarTexto(dialogoNao[indexDialogoNao], function() {
        indexDialogoNao++;

        //muda pagina
        if (indexDialogoNao === 5){
          setTimeout(function() {
          sessionStorage.setItem("tocarMusica", "true");
          window.location.href = "Scripts/PAGES/Alien.html";
          }, 1);
        };
      });
    }

    botaoSim.style.opacity = "0%";
    botaoSim.disable = true;
    botaoSim.style.pointerEvents = "none";
  }
  else if (caminho === "sim") {
    if (indexDialogoSim < dialogoSim.length) {
      digitarTexto(dialogoSim[indexDialogoSim], function() {
        indexDialogoSim++;

        //muda pagina
        if (indexDialogoSim === 2){
          setTimeout(function() {
          window.location.href = "Scripts/PAGES/Alien.html";
          }, 1);
        };
      });
    }
  }
};

function trocarImagemNao(){
  if (indexDialogoNao === 0) {
    document.querySelector(".personagem img").src = "Scripts/IMG/Surpreso.png";
  };
  if (indexDialogoNao === 1) {
    document.querySelector(".personagem img").src = "Scripts/IMG/Default.png";
  };
  if (indexDialogoNao === 2) {
    document.querySelector(".personagem img").src = "Scripts/IMG/Pidao.png";
  };
  if (indexDialogoNao === 3) {
    document.querySelector(".personagem img").src = "Scripts/IMG/Lagrimudo.png";
  };
};

botaoSim.addEventListener("click", function() {
  caminho = "sim";
  verificarCaminho();
  document.querySelector(".personagem img").src = "Scripts/IMG/Default.png";
});

function moverBotaoAleatorio(botao) {
  const margem = 20;

  const limiteX = window.innerWidth - botao.offsetWidth - margem;
  const limiteY = window.innerHeight - botao.offsetHeight - margem;

  let novoX = Math.floor(Math.random() * (limiteX + 1));
  let novoY = Math.floor(Math.random() * (limiteY + 1));

  botao.style.position = "absolute";
  botao.style.left = `${novoX}px`;
  botao.style.top = `${novoY}px`;

  const rect = botao.getBoundingClientRect();
  if (
    rect.right > window.innerWidth ||
    rect.left < 0 ||
    rect.bottom > window.innerHeight ||
    rect.top < 0
  ) {
    moverBotaoAleatorio(botao);
  }

  const hitbox = document.querySelector('.personagem .hitbox');
  verificarSobreposicao(botao, hitbox);
}

function verificarSobreposicao(aEl, bEl) {
  const a = aEl.getBoundingClientRect();
  const b = bEl.getBoundingClientRect();

  const overlap = !(
    a.right  < b.left ||
    a.left   > b.right ||
    a.bottom < b.top ||
    a.top    > b.bottom
  );

  aEl.classList.toggle('destaque', overlap);
}

botaoNao.addEventListener("click", function() {
  caminho = "nao";
  verificarCaminho();
  trocarImagemNao();
  moverBotaoAleatorio(botaoNao);
});