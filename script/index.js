//Variaveis declaradas para o sistema de receitas.//

let body = document.body;
let backgroundpage = document.getElementById('background_page');

// Receitas de Frango//
function karaage_receipt(){
    let karaagereceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Karaage</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/karaage_receita.png'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>900g de coxas de frango sem pele e com osso, cortadas em pedaços pequenos.</li><li>⅓ Xícara de molho de soja.</li><li>2 colheres de sopa de saquê.</li><li>25g de gengibre fresco ralado</li><li>170g de amido de batata (katakuriko)</li><li>Óleo vegetal para fritar</li><li>½ limão (para servir)</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  karaagereceipt;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

function teriyaki_receipt(){
    let teriyakireceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Teriyaki</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/teriyaki_receipt.JPG'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>4 sobrecoxas desossadas de frango sem pele</li><li>½ xícara (chá) de amido de milho</li><li>Sal e pimenta-do-reino</li><li>Gengibre em conserva (beni shōga) </li><li>Amido de milho</li><li>Molho Teriyaki</li><li>Gengibre em conserva.</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  teriyakireceipt;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

function tonkatsu_receipt(){
    let tonkatsureceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Tonkatsu</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/tonkatsu_receipt.JPG'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>4 metades de peito de frango desossado e sem pele (cada uma com 170 gramas)</li><li>3/4 colher de chá de sa</li><li>1/2 colher de chá de pimenta</li><li>2 ovos grandes, levemente batidos</li><li>3/4 xícara de farinha de trigo comum</li><li>1 xícara de panko (farinha de rosca japonesa</li><li>Óleo</li><li>Molho Tonkatsu</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  tonkatsureceipt;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

function yakitori_receipt(){
    let yakitorireceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Yakitori</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/yakitori_receipt.JPG'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>1/2 xícara de mirin (vinho de arroz doce)</li><li>1/2 xícara de saquê</li><li>1/2 xícara de molho de soja (shoyu)</li><li>1 colher de sopa de açúcar</li><li>2 grandes pimentões vermelhos doces, cortados em pedaços de 2 polegadas</li><li>2 libras de coxas de frango desossadas e sem pele, cortadas em pedaços de 1-1/2 polegadas</li><li>1 maço de cebolinhas</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  yakitorireceipt;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

//Lámen//

function shoyu_receipt(){
    let shoyureceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Shoyu Lámen</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/shoyu_receipt.JPG'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>Caldo : 1 frango inteiro / 200 grama(s) de pescoço de frango / 200 grama(s) de pé de frango / 4 litro(s) de água / filtrada 1 litro(s) de dashi</li><li>Caldo : 500 grama(s) de farinha de trigo peneirada / 220 mililitro (ml) de água filtrada / 10 mililitro (ml) de kansui industrial / 3/4 colher(es) de sopa de sal</li><li>Chasu : 400 grama(s) de copa-lombo / 1 litro(s) de shoyu</li><li>Montagem : Ovo cozido / Broto de bambu / Cebolinha </li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  shoyureceipt;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

function yakisoba_receipt(){
    let shoyureceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Yakisoba Lámen</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/shoyu_receipt.JPG'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>Caldo : 1 frango inteiro / 200 grama(s) de pescoço de frango / 200 grama(s) de pé de frango / 4 litro(s) de água / filtrada 1 litro(s) de dashi</li><li>Caldo : 500 grama(s) de farinha de trigo peneirada / 220 mililitro (ml) de água filtrada / 10 mililitro (ml) de kansui industrial / 3/4 colher(es) de sopa de sal</li><li>Chasu : 400 grama(s) de copa-lombo / 1 litro(s) de shoyu</li><li>Montagem : Ovo cozido / Broto de bambu / Cebolinha </li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  shoyureceipt;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}


function receipt_close(){

    let menu = document.querySelector(".receipt-background")
    if (menu){
        menu.remove();

    }

    document.body.style.overflow = "auto";
    backgroundpage.style.filter = "none";



}

function dropdownmenu(){
    let divmenu = document.getElementById('menudrop');
    let menuopening = "<div class='menu'> <ul>"
    let menuclosing = "</ul> </div>"

    divmenu.innerHTML = (menuopening + menuclosing);
}
