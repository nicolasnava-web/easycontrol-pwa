function mostrarMensagem(tipo) {

    const toast =
        document.getElementById("toast");

    toast.textContent =
        `Você selecionou: ${tipo}`;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2000);
}


function irPara(tela) {

    mostrarMensagem(
        `Abrindo ${tela}`
    );

}
if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        () => {

            navigator.serviceWorker
                .register(
                    "service-worker.js"
                )
                .then(() => {

                    console.log(
                        "PWA funcionando!"
                    );

                })
                .catch(error => {

                    console.error(
                        "Erro:",
                        error
                    );

                });

        }
    );

}
