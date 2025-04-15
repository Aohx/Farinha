document.querySelector(".confirma").addEventListener("click", () => {
    const resposta = document.querySelector(".resposta").value.trim();

    if (resposta.toLowerCase() === "eu quero namorar voce") {
        window.location.href = "../PAGES/Final.html";
    } else {
        alert("Resposta errada.");
        document.querySelector(".resposta").value = '';
    };
});