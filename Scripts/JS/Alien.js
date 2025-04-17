document.querySelector(".confirma").addEventListener("click", () => {
    const resposta = document.querySelector(".resposta").value.trim();

    if (resposta.toLowerCase() === "eu quero namorar voce") {
        window.location.href = "../PAGES/Final.html";
    } else {
        alert("Resposta errada.");
        document.querySelector(".resposta").value = '';
    };
});

document.querySelector(".dica").addEventListener("click", function(){
    // Criar link invisível para baixar o .zip
    const linkDownload = document.createElement('a');
    linkDownload.href = "../Yaldabaoth/Download/MundoMaterial.zip"; // Caminho relativo ao seu projeto
    linkDownload.download = "MundoMaterial.zip";
    document.body.appendChild(linkDownload);
    linkDownload.click(); // Inicia o download
    document.body.removeChild(linkDownload); // Limpa o DOM
      
    // Abre nova aba
    window.open("../Yaldabaoth/Yalda/login.html", '_blank');
})