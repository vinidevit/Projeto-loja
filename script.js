const abrirModal = document.querySelector("#abrir-modal");
const fecharModal = document.querySelector("#fechar-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const eventos = [abrirModal, fade, fecharModal];
var godOfWar = document.getElementById("gow");
var residentEvil = document.getElementById("rev");
var stardew = document.getElementById("sv");
var assassins = document.getElementById("acv");
var halo = document.getElementById("hi");
var minecraft = document.getElementById("mine");
var forza = document.getElementById("fh");
var sea = document.getElementById("st");
var animal = document.getElementById("ac");
var superMario = document.getElementById("smo");
var marioKart = document.getElementById("mk");
var zelda = document.getElementById("tloz");
var add = document.getElementById("add");
var carrinho = document.getElementById("pedidos");
var limpar = document.getElementById("btn-limpar");
var valorTotal = document.getElementById("valor-total");
var soma = 0;
const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};
eventos.map(el => {
  el.addEventListener("click", () => toggleModal());
});
limpar.addEventListener("click", () => {
  carrinho.innerHTML = "";
  valorTotal.innerHTML = "<p>Valor Total :</p>";
  soma = 0;
});
var jogos = [
  { nome: "God of War 2", valor: 49.9 },
  { nome: "God of war", valor: 159.9 },
  { nome: "spider man", valor: 59.9 },
  { nome: "lego avengers", valor: 79.9 },
  { nome: "lego movie", valor: 109.9 },
  { nome: "super mario", valor: 99.9 },
  { nome: "mortal kombat 11", valor: 154.9 },
  { nome: "mortal kombat xl", valor: 119.9 },
  { nome: "The last of us", valor: 129.9 },
  { nome: "the last of us 2", valor: 199.9 }
];
godOfWar.addEventListener("click", () => {
  soma += jogos[0].valor;
  carrinho.innerHTML += `<p>${jogos[0].nome} - R$ ${jogos[0].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
residentEvil.addEventListener("click", () => {
  soma += jogos[1].valor;
  carrinho.innerHTML += `<p>${jogos[1].nome} - R$ ${jogos[1].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
stardew.addEventListener("click", () => {
  soma += jogos[2].valor;
  carrinho.innerHTML += `<p>${jogos[2].nome} - R$ ${jogos[2].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
assassins.addEventListener("click", () => {
  soma += jogos[3].valor;
  carrinho.innerHTML += `<p>${jogos[3].nome} - R$ ${jogos[3].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
halo.addEventListener("click", () => {
  soma += jogos[4].valor;
  carrinho.innerHTML += `<p>${jogos[4].nome} - R$ ${jogos[4].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
minecraft.addEventListener("click", () => {
  soma += jogos[5].valor;
  carrinho.innerHTML += `<p>${jogos[5].nome} - R$ ${jogos[5].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
forza.addEventListener("click", () => {
  soma += jogos[6].valor;
  carrinho.innerHTML += `<p>${jogos[6].nome} - R$ ${jogos[6].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
sea.addEventListener("click", () => {
  soma += jogos[7].valor;
  carrinho.innerHTML += `<p>${jogos[7].nome} - R$ ${jogos[7].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});

animal.addEventListener("click", () => {
  soma += jogos[8].valor;
  carrinho.innerHTML += `<p>${jogos[8].nome} - R$ ${jogos[8].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
superMario.addEventListener("click", () => {
  soma += jogos[9].valor;
  carrinho.innerHTML += `<p>${jogos[9].nome} - R$ ${jogos[9].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
marioKart.addEventListener("click", () => {
  soma += jogos[10].valor;
  carrinho.innerHTML += `<p>${jogos[10].nome} - R$ ${jogos[10].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});
zelda.addEventListener("click", () => {
  soma += jogos[11].valor;
  carrinho.innerHTML += `<p>${jogos[11].nome} - R$ ${jogos[11].valor.toFixed(
    2
  )}</p>`;
  valorTotal.innerHTML = `<p>Valor Total : ${soma.toFixed(2)}</p>`;
});