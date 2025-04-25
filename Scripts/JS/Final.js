const cartao = document.querySelector(".cartao img");

cartao.addEventListener("click", function () {
    if (confirm("seu código: INC R1F 7X8 LEXY")) {
        window.open("https://www.spotify.com/br-pt/redeem/", "_blank");
    }
});