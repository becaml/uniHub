function saberSala() {
    window.location.href = "boot.html";
}

function acessarPortal() {
    // Redireciona para outro site
    window.location.href = "https://seu-portal.com";
}

function telaLogin() {
    // Redireciona para outro site
    window.location.href = "index.html";
}

function portal() {
    // Redireciona para outro site
    window.location.href = "dasboard.html";
}
//Calendario
const daysEl = document.getElementById("days");
const panel = document.getElementById("eventPanel");

const eventos = {
    "13": ["Aniversário UniHub"],
    "20": ["Avaliação BD"],
};

function gerarCalendario() {
    daysEl.innerHTML = "";

    const diasNoMes = 30;
    const hoje = new Date().getDate();

    for (let d = 1; d <= diasNoMes; d++) {
        let div = document.createElement("div");
        div.innerText = d;

        if (d === hoje) div.classList.add("today");
        if (eventos[d]) div.classList.add("event-day");

        div.onclick = () => {
            panel.innerHTML = eventos[d]
                ? `<h4>Eventos</h4>${eventos[d].join("<br>")}`
                : "<h4>Eventos</h4>Sem eventos";
        };

        daysEl.appendChild(div);
    }
}

gerarCalendario();

function toggleMenu(id) {

    const submenu = document.getElementById(id);

    if (submenu.style.display === "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }

}

function abrirPopup() {

    document.getElementById("popup").style.display = "flex";

}

function fecharPopup() {

    document.getElementById("popup").style.display = "none";

}