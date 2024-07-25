$(document).ready(function (){
    let box = $('.box2');
$('.creatacc-btn').click(function hidecontent(){
    $(box).hide();

    $(box).before("<div class='box2'> <h2>REGISTRAR-SE</h2> <div class='credencials'> <input class='input-email input-user' type='email' placeholder='EMAIL'> <br> <input class='input-email input-user' type='email' placeholder='CONFIRMAR EMAIL'> <br> <input class='input-password input-user' type='password' placeholder='SENHA'> <br> <input class='input-password input-user' type='password' placeholder='CONFIRMAR SENHA'> <div class='alternatives2'> <a href='index.html'> <button class='sign-user btn'>CADASTRAR-SE</button></a> <a href='login.html'> <button class='return-btn btn'>Retornar</button></a>");
    $(box).before("</div> </div> </div>");

    
});
});