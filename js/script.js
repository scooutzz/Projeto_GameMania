$( document ).ready(function() {

    $("#barras").click(function(){
        // $("#menu").addClass("menu_ativo")

        $("#menu").toggleClass("menu_ativo")

        // if ($("#menu").hasClass("menu_ativo")) {
        //     $("#menu").removeClass("menu_ativo")
        // } else {
        //     $("#menu").addClass("menu_ativo")
        // }

    })

})


let email = document.getElementById("cad_email");
let menu = document.getElementById("menu");


        function mostrarMenu() {
            if (getComputedStyle(menu).display == "none") {
                menu.style.display = "flex"
            } else {
                menu.style.display = "none"
            }
        }


//DOM - Document Object Model

function enviarCadastro() {
    let emailDigitado = email.value;
    console.log(emailDigitado);
}

function renderizarNoticias() {
    let espaco = document.getElementById("espaco_noticias");
    
    let listaNoticias = [
        {
            titulo: "Brasil toma gol no inicio do jogo.",
            descricao: "Houve uma falha na defesa brasileira, que deixou o atacante adversário cara-a-cara com o goleiro."
        },
        {
            titulo: "O dolar está alto.",
            descricao: "O dolar está em alta há muito tempo."
        },
        {
            titulo: "Brasil toma gol no inicio do jogo.",
            descricao: "Houve uma falha na defesa brasileira, que deixou o atacante adversário cara-a-cara com o goleiro."
        },
        {
            titulo: "O dolar está alto.",
            descricao: "O dolar está em alta há muito tempo."
        },
        {
            titulo: "Brasil toma gol no inicio do jogo.",
            descricao: "Houve uma falha na defesa brasileira, que deixou o atacante adversário cara-a-cara com o goleiro."
        },
        {
            titulo: "O dolar está alto.",
            descricao: "O dolar está em alta há muito tempo."
        },
    ]

    let template = "";
    
    for (let index = 0; index < listaNoticias.length; index++) {
        const noticia = listaNoticias[index];
        
        template += `<div class="cont_produtos">
        <a href="login.html"><img src="img/produto.png" alt="Imagem Produto 1"></a>
        <h1>Produto</h1>
        <h2>R$59,99</h2>
      </div>`

    } // interpolacao: ${noticia.titulo}

    espaco.innerHTML = template;

}