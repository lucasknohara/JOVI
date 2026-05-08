const listaModos = document.querySelector("#listaModos");

const modosSalvos = JSON.parse(localStorage.getItem("modos")) || [];

if (modosSalvos.length > 0) {
    listaModos.innerHTML = "";
};

modosSalvos.forEach((modo) => {

    const item = document.createElement("div");

    item.classList.add("item-modo-personalizado");

    item.innerHTML = `
        <div class="icone-modo-personalizado">
            <img src="${modo.icone}">
        </div>
        <span class="nome-modo-personalizado">${modo.nome}</span>
    `;

    listaModos.appendChild(item);

});