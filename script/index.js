let karaagebtn = document.getElementById('karaagebuy');
let body = document.body;

function karaage_receipt(){
    let karaagereceipt = "<div class='receipt-background'><button class='button-close' onclick='receipt_close()'>X</button><h2>Karaage</h2><div class='meal-product-details'><img class='receipt-img' src='img/receipt/karaage_receita.png' style='height: 37.5rem; width: 37.5rem;'><div class='receipt-description'><aside><h3>Receita</h3><h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores illo consequuntur qui. Assumenda, ducimus harum in mollitia voluptates nisi blanditiis et laborum autem, magni qui vitae eveniet molestias soluta amet.</h4></aside><div id='button'></div></div></div><div class='receipt-buy-button'><a class='receipt-buy inert' href='login.html'>Peça já</a></div></div>";

    let karaagemenu = document.createElement("div");
    karaagemenu.innerHTML =  karaagereceipt;

    document.body.appendChild(karaagemenu);
    document.body.style.overflow = "hidden";


}

function receipt_close(){

    let karaagemenu = document.querySelector(".receipt-background")
    if (karaagemenu){
        karaagemenu.remove();

    }

    document.body.style.overflow = "auto";



}