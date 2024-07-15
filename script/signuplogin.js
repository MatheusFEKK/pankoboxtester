$(document).ready(function (){
    let box = $('.login');
$('#donthave').click(function hidecontent(){
    $(box).hide();

    $(box).before("<div class='signup'> <div class='credencials'> <input type='email' placeholder='EMAIL'> <br> <input type='email' placeholder='CONFIRMAR EMAIL'> <br> <input type='password' placeholder='SENHA'> <br> <input type='password' placeholder='CONFIRMAR SENHA'> <div class='alternatives'> <a href='index.html'> <button id='signupac'>CADASTRAR-SE");
    $(box).before("</button> </a> </div> </div> </div>");

    
});
});