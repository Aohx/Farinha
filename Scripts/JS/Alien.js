document.querySelector(".confirma").addEventListener("click", () => {
    const resposta = document.querySelector(".resposta").value.trim();

    if (resposta.toLowerCase() === "eu quero namorar voce" || resposta.toLowerCase() === "euqueronamorarvoce") {
        window.location.href = "../PAGES/Final.html";
    } else {
        alert("Resposta errada.");
        document.querySelector(".resposta").value = '';
    };
});

const button = document.querySelector(".dica");
const menu = document.getElementById("respostas");

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');

  const rect = button.getBoundingClientRect();

  const menuHeight = menu.offsetHeight || 150;
  menu.style.top = `${rect.top + window.scrollY - menuHeight - 10}px`;
  menu.style.left = `${rect.left + window.scrollX}px`;
});

const somzada = document.getElementById("somzada");

button.addEventListener("click", () => {
    somzada.volume = 0.5;
    somzada.play();
});
