let karaagebtn = document.getElementById('karaagebuy');
let body = document.body;
let backgroundpage = document.getElementById('background_page');

function karaage_receipt(){
    let karaagereceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Karaage</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/karaage_receita.png' style='height: 37.5rem; width: 37.5rem;'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Ingredientes</h3><h4><ul class='receipt-ingredient'><li>900g de coxas de frango sem pele e com osso, cortadas em pedaços pequenos.</li><li>⅓ Xícara de molho de soja.</li><li>2 colheres de sopa de saquê.</li><li>25g de gengibre fresco ralado</li><li>170g de amido de batata (katakuriko)</li><li>Óleo vegetal para fritar</li><li>½ limão (para servir)</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let karaagemenu = document.createElement("div");
    karaagemenu.innerHTML =  karaagereceipt;

    document.body.appendChild(karaagemenu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

function receipt_close(){

    let karaagemenu = document.querySelector(".receipt-background")
    if (karaagemenu){
        karaagemenu.remove();

    }

    document.body.style.overflow = "auto";
    backgroundpage.style.filter = "none";



}

function dropdownmenu(){

    let divmenu = document.getElementById('menudrop');
    let buttondropdown = document.getElementById('dropmenu');
    let menuopening = "<div class='menu'> <ul>"
    let menuclosing = "</ul> </div>"

    divmenu.innerHTML = (menuopening + menuclosing);
}