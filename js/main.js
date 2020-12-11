$(document).ready(function(){
    var valor = ("todos");
    if(valor == 'todos'){
        $('.filtro').not('.' + valor).hide('1000');
        $('.filtro').filter('.' + valor).show('1000');
    }
    $('.enlaces' ).click(function(){
        var valor = $(this).attr('data-nombre');
        if(valor == 'todos'){
            $('.filtro').not('.' + valor).hide('1000');
            $('.filtro').filter('.' + valor).show('1000');
        }else{
            $('.filtro').not('.' + valor).hide('1000');
            $('.filtro').filter('.' + valor).show('1000');
        }
    });

    var mostrar = true;
    $("#flip").click(function(){
        if(mostrar == true){
            $("#panel").slideDown("slow");
        }
        if(mostrar == false){ 
            $("#panel").slideUp("slow");
        }
        mostrar = !mostrar;
      });
});