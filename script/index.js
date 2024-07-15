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
    let teriyakireceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Teriyaki</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/teriyaki_receipt.jpg'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>4 sobrecoxas desossadas de frango sem pele</li><li>½ xícara (chá) de amido de milho</li><li>Sal e pimenta-do-reino</li><li>Gengibre em conserva (beni shōga) </li><li>Amido de milho</li><li>Molho Teriyaki</li><li>Gengibre em conserva.</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  teriyakireceipt;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

function tonkatsu_receipt(){
    let tonkatsureceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Tonkatsu</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/tonkatsu_receipt.jpg'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>4 metades de peito de frango desossado e sem pele (cada uma com 170 gramas)</li><li>3/4 colher de chá de sa</li><li>1/2 colher de chá de pimenta</li><li>2 ovos grandes, levemente batidos</li><li>3/4 xícara de farinha de trigo comum</li><li>1 xícara de panko (farinha de rosca japonesa</li><li>Óleo</li><li>Molho Tonkatsu</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  tonkatsureceipt;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

function yakitori_receipt(){
    let yakitorireceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Yakitori</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/yakitori_receipt.jpg'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>1/2 xícara de mirin (vinho de arroz doce)</li><li>1/2 xícara de saquê</li><li>1/2 xícara de molho de soja (shoyu)</li><li>1 colher de sopa de açúcar</li><li>2 grandes pimentões vermelhos doces, cortados em pedaços de 2 polegadas</li><li>2 libras de coxas de frango desossadas e sem pele, cortadas em pedaços de 1-1/2 polegadas</li><li>1 maço de cebolinhas</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  yakitorireceipt;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

//Lámen//

function shoyu_receipt(){
    let shoyureceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Shoyu Lámen</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/shoyu_receipt.jpg'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>Caldo : 1 frango inteiro / 200 grama(s) de pescoço de frango / 200 grama(s) de pé de frango / 4 litro(s) de água / filtrada 1 litro(s) de dashi</li><li>Caldo : 500 grama(s) de farinha de trigo peneirada / 220 mililitro (ml) de água filtrada / 10 mililitro (ml) de kansui industrial / 3/4 colher(es) de sopa de sal</li><li>Chasu : 400 grama(s) de copa-lombo / 1 litro(s) de shoyu</li><li>Montagem : Ovo cozido / Broto de bambu / Cebolinha </li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  shoyureceipt;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

function yakisoba_receipt(){
    let shoyureceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Yakisoba Lámen</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/yakisoba_receipt.jpg'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>250 g de macarrão tipo lámen</li><li>200 g de alcatra ou filé mignon</li><li>150 g de brócolis americano</li><li>150 g de repolho comum</li><li>Meia cebola roxa</li><li>Meia cenoura</li><li>100 ml de molho de soja (shoyu)</li><li>Sal (ou algum tempero para carnes à base de sal)</li><li>Azeite</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  shoyureceipt;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

function shio_receipt(){
    let shioreceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Shio</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/shio_receipt.jpg'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>Caldo:1 litro de água / 2 pedaços de alga kombu / 2 cogumelos shitake secos / 6 peixes secos / 1 kg de carcaça de frango / 4 sobrecoxas com coxas desossadas / Sal e pimenta-do-reino</li><li>Tempeiro: ½ xícara de chá de shoyu , ⅓ xícara de chá de saquê mirim, ½ xícara de chá de água / 4 rodelas de gengibre / 4 dentes de alho partidos ao meio / Talos de cebolinha / ½ xícara de chá do caldo / 2 colheres de sopa rasas de sal / 2 colheres de sopa de molho de peixe concentrado / 1 pacotinho de katsuoboshi / 1 colher de sopa de shoyu </li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  shioreceipt;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

function miso_receipt(){
    let misoreceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Miso Lamen</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/miso_receipt.jpg'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>1 colher de chá de óleo de gergelim</li><li>1 pacote de macarrão para lámen</li><li>1 pacote de macarrão para lámen</li><li>1 xícara de cogumelos shiitake fatiados</li><li>1 colher de sopa de molho de soja</li><li>2 xícaras de água ou caldo de frango</li><li>1/2 colher de sopa de sementes de gergelim</li><li>1 colher de chá de óleo de pimenta</li><li>5 dentes de alho</li><li>1 colher de sopa de gengibre picado</li><li>1 colher de chá de óleo vegetal</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  misoreceipt;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

//Peixes//

function sashimi_receipt(){
    let sashimireceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Sashimi</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/sashimi_receipt.jpg'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>300g de salmão sem pele e sem espinhas</li><li>Pasta de raiz forte</li><li>Molho shoyu</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  sashimireceipt;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

function tempura_receipt(){
    let tempurareceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Tempurá de peixe branco</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/tempura_receipt.jpg'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>500 g de filé de peixe branco</li><li>1 xícara de farinha de trigo</li><li>2 colheres de sopa de amido de milho</li><li>1 colher de chá de fermento em pó</li><li>1 xícara de água gelada</li><li>Sal a gosto</li><li>Óleo para fritar</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  tempurareceipt;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

function urumaki_receipt(){
    let urumakireceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Urumaki<span style='color:#E1E1E1;'>(x20)</span></h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/urumaki_receipt.jpg'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>1/2 folha de nori (alga marinha)</li><li>1/2 xícara (chá) de arroz japonês para sushi cozido</li><li>10 g de gergelim torrado (misto branco e preto)</li><li>1/2 colheres (sopa) de salmão cru, em cubinhos</li><li>Molho shoyu</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  urumakireceipt;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

function teppanyaki_receipt(){
    let teppanyakireceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Teppanyaki</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/teppanyaki_receipt.jpg'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>2 postas de salmão</li><li>Sal e pimenta-do-reino a gosto</li><li>Gengibre em pó</li><li>Azeite</li><li>Manteiga</li><li>Legumes variados (cenoura, brócolis, pimentão, vagem etc.)</li><li>Alho picado</li><li>Shoyu</li><li>Saquê Mirim.</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  teppanyakireceipt;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

//Combos

function urumakimisopepsi_receipt(){
    let urumakimisopepsi = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Combo Miso + Urumaki + Pepsi</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/Combo_Uramaki_Miso_Pepsi.png'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>Miso 500g</li><li>Pepsi 400ml</li><li>1 Pacote Urumaki Sushi</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  urumakimisopepsi;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

function tonkatsupepsi_receipt(){
    let tonkatsupepsi = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Combo Tonkatsu + Pepsi</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/Combo_Tonkatsu_Pepsi.png'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>Tonkatsu 400g</li><li>Pepsi 400ml</li><li>Salada de repolho.</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  tonkatsupepsi;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

//Bebidas

function fanta_receipt(){
    let fanta = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Fanta</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/fanta_receipt.png'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>Fanta Uva</li><li>Fanta Guaraná</li><li>Fanta Laranja</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  fanta;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}


function pepsi_receipt(){
    let fanta = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Pepsi</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/pepsi_receipt.png'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>Pepsi 400ml 3 Unidades</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  fanta;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

function coca_cola_receipt(){
    let coca_cola = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Coca Cola</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/coca_cola_receipt.png'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>Coca Cola 350ml 3 Unidades</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  coca_cola;

    document.body.appendChild(menu);
    document.body.style.overflow = "hidden";
    backgroundpage.style.filter = "blur(10px)";

}

function ryokucha_receipt(){
    let ryokucha = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>ryokucha</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/ryokucha_receipt.png'><div class='receipt-description'><aside><h3 style='font-weight:900;'>Conteúdo</h3><h4><ul class='receipt-ingredient'><li>Ryokucha 600ml 1 unidade</li></ul></h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let menu = document.createElement("div");
    menu.innerHTML =  ryokucha;

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
