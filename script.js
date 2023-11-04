const cabecalho=document.querySelector("#cabecalho");
const menu=document.querySelector("#menu");
const btn_home=document.querySelector("#btn_home");
const btn_novo=document.querySelector("#btn_novo");
const btn_pesquisar=document.querySelector("#btn_pesquisar");
const btn_gestao=document.querySelector("#btn_gestao");
const btn_sobre=document.querySelector("#btn_sobre");
const principal=document.querySelector("#principal");


btn_home.addEventListener("click",(e)=>{
    abrirPagina(e.target, "./home.html")
});
btn_novo.addEventListener("click",(e)=>{
    abrirPagina(e.target, "./novo.html")
});
btn_pesquisar.addEventListener("click",(e)=>{
    abrirPagina(e.target, "./pesquisar.html")
});
btn_gestao.addEventListener("click",(e)=>{
    abrirPagina(e.target, "./gestao.html")
});
btn_sobre.addEventListener("click", (e)=>{
    abrirPagina(e.target, "./sobre.html")
});

const abrirPagina=(el, url)=>{
    const abas=[...document.querySelectorAll(".aba")];
    abas.forEach(e =>{
        e.classList.remove("abaSelecionada");
    });
    console.log(abas)
    el.classList.add("abaSelecionada");
    window.open(url, "if_principal")
}

