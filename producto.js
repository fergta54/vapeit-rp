
$(document).ready(() => {
//jquery productos

let producto;
var cantidad = 1;
var cantalm;
var fav = 0;
var estrella;


let ccarr = 0;
var nombrep = "NULL";
var nombrep2 = "NULL";
var preciop = "NULL";
var preciop2 = "NULL";
$("#carr1").hide();
$("#carr2").hide();
$("#carr3").hide();


//definimos las estrellas que tendra el producto ☼☼☼☼☼

switch(parseInt(localStorage.getItem("estrella")))
{
    case 1:
        $("#st1").css("color","yellow");  
    break;
    case 2:
        $("#st1,#st2").css("color","yellow");  
    break;
    case 3:
        $("#st1,#st2,#st3").css("color","yellow");   
    break;
    case 4:
        $("#st1,#st2,#st3,#st4").css("color","yellow");  
    break;
    case 5:
        $("#st1,#st2,#st3,#st4,#st5").css("color","yellow");  
    break;
    default:
        $("#st1,#st2,#st3,#st4,#st5").css("color","grey");  
        ;
}

//definimos la cantidad de nuestro producto

$("#cantidad").html(cantidad);

$("#mas").click(function(){
     cantidad = cantidad + 1;
     localStorage.setItem("cantalm" , cantidad);
    $("#cantidad").html(cantidad);
})

$("#menos").click(function(){
    if(cantidad <= 1)
    {}
    else
    {
    cantidad = cantidad - 1;
    localStorage.setItem("cantalm" , cantidad);
    $("#cantidad").html(cantidad);
    }
})

//reiniciamos la cantidad
$("#bbc").click(function(){
localStorage.setItem("cantalm" , 1);
})

//validacion compra y carrito
$("#compr").click(function(){
   if(cantidad > 20)
   {
       alert("no puede ordenar mas de 20 articulos");
   }
   else 
   {
   localStorage.ccarr = Number(localStorage.ccarr)+ 1;


   if(localStorage.ccarr > 3)
    {
        localStorage.ccarr = 3;
        alert("Tiene 3 articulos en el carrito no puedes ordenar mas!!");
    }

    preciop=($("#precio").text());
    nombrep=($("#nombreprod").text());
    localStorage.setItem("nombrep2" , nombrep);
    localStorage.setItem("preciop2" , preciop);

    if(localStorage.ccarr == 1)
    {
    localStorage.nombreau1 = localStorage.nombrep2;
    localStorage.cantiau1 = localStorage.cantalm;
    localStorage.preciau1 = localStorage.preciop2;
    }
    if(localStorage.ccarr == 2)
    {
    localStorage.nombreau2 = localStorage.nombrep2;
    localStorage.cantiau2 = localStorage.cantalm;
    localStorage.preciau2 = localStorage.preciop2;
    }
    if(localStorage.ccarr == 3)
    {
    localStorage.nombreau3 = localStorage.nombrep2;
    localStorage.cantiau3 = localStorage.cantalm;
    localStorage.preciau3 = localStorage.preciop2;
    }

    }
})

//vaciamos el carrito

$("#vac").click(function(){
    localStorage.ccarr = 0;
    window.location.reload();
})

$("#Nombrep").html(localStorage.nombreau1);
$("#Cantidadp").html(localStorage.cantiau1);
$("#Preciop").html(localStorage.preciau1);
$("#Nombrep1").html(localStorage.nombreau2);
$("#Cantidadp1").html(localStorage.cantiau2);
$("#Preciop1").html(localStorage.preciau2);
$("#Nombrep2").html(localStorage.nombreau3);
$("#Cantidadp2").html(localStorage.cantiau3);
$("#Preciop2").html(localStorage.preciau3);

//para definir los precios de los productos deacuerdo a la cantidad

if(localStorage.ccarr == 1)
{
$("#carr1").show();
precio1=($("#Preciop").text());
cantii1=($("#Cantidadp").text());
precio2=0;
precio3=0;
precio1=(parseInt(precio1)*parseInt(cantii1));
ptotal = parseInt(precio1) + parseInt(precio2) + parseInt(precio3);
localStorage.setItem("total" , ptotal);
$("#prectotal").html(localStorage.getItem("total"));
$("#prectotal1").html(localStorage.getItem("total"));
}

if(localStorage.ccarr == 2)
{
$("#carr1").show();
$("#carr2").show();
precio1=($("#Preciop").text());
cantii1=($("#Cantidadp").text());
precio2=($("#Preciop1").text());
cantii2=($("#Cantidadp1").text());
precio3=0;
precio1=(parseInt(precio1)*parseInt(cantii1));
precio2=(parseInt(precio2)*parseInt(cantii2));
ptotal = parseInt(precio1) + parseInt(precio2) + parseInt(precio3);
localStorage.setItem("total" , ptotal);
$("#prectotal").html(localStorage.getItem("total"));
$("#prectotal1").html(localStorage.getItem("total"));
}

if(localStorage.ccarr == 3)
{
$("#carr1").show();
$("#carr2").show();
$("#carr3").show();
precio1=($("#Preciop").text());
cantii1=($("#Cantidadp").text());
precio2=($("#Preciop1").text());
cantii2=($("#Cantidadp1").text());
precio3=($("#Preciop2").text());
cantii3=($("#Cantidadp2").text());
precio1=(parseInt(precio1)*parseInt(cantii1));
precio2=(parseInt(precio2)*parseInt(cantii2));
precio3=(parseInt(precio3)*parseInt(cantii3));
ptotal = parseInt(precio1) + parseInt(precio2) + parseInt(precio3);
localStorage.setItem("total" , ptotal);
$("#prectotal").html(localStorage.getItem("total"));
$("#prectotal1").html(localStorage.getItem("total"));
}

var cantii1=0, cantii2=0, cantii3=0;
var precio1=0, precio2=0, precio3=0;
var ptotal=0;
var total;

//botones de borrar productos funcionalidad

if(localStorage.ccarr == 0)
{
    localStorage.setItem("total" , 0);
    $("#prectotal").html(localStorage.getItem("total"));
    $("#prectotal1").html(localStorage.getItem("total"));
}

$("#quit1").click(function(){
    $("#carr1").hide();
    localStorage.ccarr = Number(localStorage.ccarr)-1;
    window.location.reload();
 })
$("#quit2").click(function(){
    $("#carr2").hide();
    localStorage.ccarr = Number(localStorage.ccarr)-1;
    window.location.reload();
})
$("#quit3").click(function(){
    $("#carr3").hide();
    localStorage.ccarr = Number(localStorage.ccarr)-1;
    window.location.reload();
})

//accion de favoritos

$("#fav").click(function(){
    fav = 1;
    if(fav == 1)
    {
        alert("articulo agregado a favoritos");
        $("#fav").css("background-color","red");
    }
 })

 if(fav == 1)
 {
     $("#fav").css("background-color","red");
 }

 //funcion ocultar / mostrar barra de opciones

    $(".bg-primary").hide();

    $("#botonf").click(function(){
        $(".bg-primary").animate({
          width: 'toggle'
        });
      });

    $("#bdcc2").dblclick(function(){
        $(".bg-primary").hide();
    }); 

    //funcion ocultar mostrar - filtrado de objetos
    $("#tlt11").click(function(){

        $("#oc1, #oc2, #oc3, #oc4, #oc5, #oc6, #oc7, #oc8, #oc9").show();

        $("#occ1, #occ2, #occ3, #occ4, #occ5, #occ6, #occ7, #occ8, #occ9").show();

        $("#oca1, #oca2, #oca3, #oca4, #oca5, #oca6, #oca7, #oca8").show();

        $("#ocr1, #ocr2, #ocr3, #ocr4").show();

    })
    //eliquids
    $("#el1").click(function(){
        $("#oc1, #oc2, #oc3, #oc4, #oc5, #oc6, #oc7, #oc8, #oc9").hide();
        $("#oc1, #oc7, #oc8").show();
    })

    $("#el2").click(function(){
        $("#oc1, #oc2, #oc3, #oc4, #oc5, #oc6, #oc7, #oc8, #oc9").hide();
        $("#oc2, #oc4, #oc6").show();
    })

    $("#el3").click(function(){
        $("#oc1, #oc2, #oc3, #oc4, #oc5, #oc6, #oc7, #oc8, #oc9").hide();
        $("#oc3, #oc5, #oc9").show();
    })
    //equipos
    $("#ecc1").click(function(){
        $("#occ1, #occ2, #occ3, #occ4, #occ5, #occ6, #occ7, #occ8, #occ9").hide();
        $("#occ1, #occ2, #occ3").show();
    })

    $("#ecc2").click(function(){
        $("#occ1, #occ2, #occ3, #occ4, #occ5, #occ6, #occ7, #occ8, #occ9").hide();
        $("#occ4, #occ5, #occ6").show();
    })

    $("#ecc3").click(function(){
        $("#occ1, #occ2, #occ3, #occ4, #occ5, #occ6, #occ7, #occ8, #occ9").hide();
        $("#occ7, #occ8, #occ9").show();
    })
    //atomizadores
    $("#acat1").click(function(){
        $("#oca1, #oca2, #oca3, #oca4, #oca5, #oca6, #oca7, #oca8").hide();
        $("#oca1, #oca2, #oca3, #oca4").show();
    })

    $("#acat2").click(function(){
        $("#oca1, #oca2, #oca3, #oca4, #oca5, #oca6, #oca7, #oca8").hide();
        $("#oca5").show();
    })

    $("#acat3").click(function(){
        $("#oca1, #oca2, #oca3, #oca4, #oca5, #oca6, #oca7, #oca8").hide();
        $("#oca6").show();
    })
    
    $("#acat4").click(function(){
        $("#oca1, #oca2, #oca3, #oca4, #oca5, #oca6, #oca7, #oca8").hide();
        $("#oca7, #oca8").show();
    })
    //accesorios
    $("#ares1").click(function(){
        $("#ocr1, #ocr2, #ocr3, #ocr4").hide();
        $("#ocr1, #ocr2").show();
    })

    $("#ares2").click(function(){
        $("#ocr1, #ocr2, #ocr3, #ocr4").hide();
        $("#ocr3, #ocr4").show();
    })

    //evento click---------que producto va ha ser mostrado

    //e.liquids
    $(".cel1").click(function(){
        localStorage.setItem("producto", 1);localStorage.setItem("estrella", 4);
    })
    $(".cef1").click(function(){
        localStorage.setItem("producto", 2);localStorage.setItem("estrella", 3);
    })
    $(".cen1").click(function(){
        localStorage.setItem("producto", 3);localStorage.setItem("estrella", 4);
    })
    $(".cel2").click(function(){
        localStorage.setItem("producto", 4);localStorage.setItem("estrella", 5);
    })
    $(".cef2").click(function(){
        localStorage.setItem("producto", 5);localStorage.setItem("estrella", 4);
    })
    $(".cen2").click(function(){
        localStorage.setItem("producto", 6);localStorage.setItem("estrella", 2);
    })
    $(".cel3").click(function(){
        localStorage.setItem("producto", 7);localStorage.setItem("estrella", 1);
    })
    $(".cef3").click(function(){
        localStorage.setItem("producto", 8);localStorage.setItem("estrella", 5);
    })
    $(".cen3").click(function(){
        localStorage.setItem("producto", 9);localStorage.setItem("estrella", 4);
    });

    //equipos
    $(".epi1").click(function(){
        localStorage.setItem("producto", 11);localStorage.setItem("estrella", 1);
    })
    $(".epi2").click(function(){
        localStorage.setItem("producto", 21);localStorage.setItem("estrella", 2);
    })
    $(".epi3").click(function(){
        localStorage.setItem("producto", 31);localStorage.setItem("estrella", 4);
    })
    $(".emi1").click(function(){
        localStorage.setItem("producto", 41);localStorage.setItem("estrella", 3);
    })
    $(".emi2").click(function(){
        localStorage.setItem("producto", 51);localStorage.setItem("estrella", 5);
    })
    $(".emi3").click(function(){
        localStorage.setItem("producto", 61);localStorage.setItem("estrella", 3);
    })
    $(".eki1").click(function(){
        localStorage.setItem("producto", 71);localStorage.setItem("estrella", 4);
    })
    $(".eki2").click(function(){
        localStorage.setItem("producto", 81);localStorage.setItem("estrella", 2);
    })
    $(".eki3").click(function(){
        localStorage.setItem("producto", 91);localStorage.setItem("estrella", 4);
    });
    //atomizadores

    $(".rta1").click(function(){
        localStorage.setItem("producto", 12);localStorage.setItem("estrella", 4);
    })
    $(".rta2").click(function(){
        localStorage.setItem("producto", 22);localStorage.setItem("estrella", 5);
    })
    $(".rta3").click(function(){
        localStorage.setItem("producto", 32);localStorage.setItem("estrella", 4);
    })
    $(".rta4").click(function(){
        localStorage.setItem("producto", 42);localStorage.setItem("estrella", 2);
    })
    $(".rdta1").click(function(){
        localStorage.setItem("producto", 52);localStorage.setItem("estrella", 3);
    })
    $(".rda1").click(function(){
        localStorage.setItem("producto", 62);localStorage.setItem("estrella", 4);
    })
    $(".tank1").click(function(){
        localStorage.setItem("producto", 72);localStorage.setItem("estrella", 1);
    })
    $(".tank2").click(function(){
        localStorage.setItem("producto", 82);localStorage.setItem("estrella", 2);
    })
    //accesorios
    $(".resti1").click(function(){
        localStorage.setItem("producto", 13);localStorage.setItem("estrella", 4);
    })
    $(".resti2").click(function(){
        localStorage.setItem("producto", 23);localStorage.setItem("estrella", 5);
    })
    $(".bati1").click(function(){
        localStorage.setItem("producto", 33);localStorage.setItem("estrella", 4);
    })
    $(".bati2").click(function(){
        localStorage.setItem("producto", 43);localStorage.setItem("estrella", 2);
    })

    //inventario de la tienda --------

    //producto 1 eliquids
    var nombree1 = "Alt Zero, Excision - X Rated";
    var precioe1 = "150";
    var psnie1 = "Bs 120,00";
    var marcae1 = "Alt Zero";
    var modeloe1 = "Excision - X Rated";

    //producto 2 f
    var nombree2 = "Air Factory - Mango";
    var precioe2 = "190";
    var psnie2 = "Bs 160,00";
    var marcae2 = "Air Factory";
    var modeloe2 = "Mango";

    //producto 3 n
    var nombree3 = "BLVK Unicorn - Cuban Cigar";
    var precioe3 = "170";
    var psnie3 = "Bs 140,00";
    var marcae3 = "BLVK";
    var modeloe3 = "Unicorn";
    
    //producto 4
    var nombree4 = "Anarchist - Black ";
    var precioe4 = "150";
    var psnie4 = "Bs 120,00";
    var marcae4 = "Anarchist";
    var modeloe4 = "Black ";

    //producto 5
    var nombree5 = "Bali Fruits - Pear Mango Guava";
    var precioe5 = "190";
    var psnie5 = "Bs 160,00";
    var marcae5 = "Bali Fruits";
    var modeloe5 = "Pear Mango Guava";

    //producto 6
    var nombree6 = "Coastal Clouds - Blueberry Limeade";
    var precioe6 = "170";
    var psnie6 = "Bs 140,00";
    var marcae6 = "Coastal Clouds";
    var modeloe6 = "Blueberry Limeade";    

    //producto 7
    var nombree7 = "FRYD - Ice Cream";
    var precioe7 = "150";
    var psnie7 = "Bs 130,00";
    var marcae7 = "FRYD";
    var modeloe7 = "Ice Cream"; 

    //producto 8
    var nombree8 = "Big Kahuna - Papaya Punch";
    var precioe8 = "190";
    var psnie8 = "Bs 160,00";
    var marcae8 = "Big Kahuna";
    var modeloe8 = "Papaya Punch";

    //producto 9
    var nombree9 = "Creamy RY4 - Butterscotch Reserve ";
    var precioe9 = "170";
    var psnie9 = "Bs 140,00";
    var marcae9 = "Creamy RY4";
    var modeloe9 = "Butterscotch Reserve";

    //productos equipos

    //producto 1e
    var nombrer1 = "SMOK - Acro";
    var precior1 = "360";
    var psnir1 = "Bs 340,00";
    var marcar1 = "SMOK";
    var modelor1 = "Acro";
    
    //producto 2e
    var nombrer2 = "SMOK - Nord X";
    var precior2 = "440";
    var psnir2 = "Bs 420,00";
    var marcar2 = "SMOK";
    var modelor2 = "Nord X";
    
    //producto 3e
    var nombrer3 = "Uwell - Caliburn G";
    var precior3 = "360";
    var psnir3 = "Bs 320,00";
    var marcar3 = "Uwell";
    var modelor3 = "Caliburn Grn";
        
    //producto 4e
    var nombrer4 = "Artic Dolphin - Anita Mod (Squonker)";
    var precior4 = "330";
    var psnir4 = "Bs 310,00";
    var marcar4 = "Artic Dolphin";
    var modelor4 = "Anita Mod (Squonker)";
    
    //producto 5e
    var nombrer5 = "DOVPO - Topside Single (Squonker)";
    var precior5 = "690";
    var psnir5 = "Bs 550,00";
    var marcar5 = "DOVPO";
    var modelor5 = "Topside Single (Squonker)";
    
    //producto 6e
    var nombrer6 = "Geek Vape - Aegis L200";
    var precior6 = "550";
    var psnir6 = "Bs 530,00";
    var marcar6 = "Geek Vape";
    var modelor6 = "Aegis L200";    
    
    //producto 7e
    var nombrer7 = "Freemax - Marvos T";
    var precior7 = "360";
    var psnir7 = "Bs 340,00";
    var marcar7 = "Freemax";
    var modelor7 = "Marvos T"; 
    
    //producto 8e
    var nombrer8 = "Voopoo - Drag 3";
    var precior8 = "650";
    var psnir8 = "Bs 630,00";
    var marcar8 = "Voopoo";
    var modelor8 = "Drag 3";
    
    //producto 9e
    var nombrer9 = "Voopoo - Drag X";
    var precior9 = "530";
    var psnir9 = "Bs 510,00";
    var marcar9 = "Voopoo";
    var modelor9 = "Drag X";


    //atomizadores producto

    //producto 1a
    var nombrea1 = "ADVKEN - MANTA RTA";
    var precioa1 = "380";
    var psnia1 = "Bs 360,00";
    var marcaa1 = "ADVKEN";
    var modeloa1 = "MANTA RTA";

    //producto 2a
    var nombrea2 = "DOVPO - Blotto RTA";
    var precioa2 = "380";
    var psnia2 = "Bs 360,00";
    var marcaa2 = "DOVPO";
    var modeloa2 = "Blotto RTA";

    //producto 3a
    var nombrea3 = "HELLVAPE+ - Dead Rabbit V2 RTA";
    var precioa3 = "350";
    var psnia3 = "Bs 330,00";
    var marcaa3 = "HELLVAPE+";
    var modeloa3 = "Dead Rabbit V2 RTA";
    
    //producto 4a
    var nombrea4 = "GAS MODS – KREE 24 RTA";
    var precioa4 = "300";
    var psnia4 = "Bs 280,00";
    var marcaa4 = "GAS MODS";
    var modeloa4 = "KREE 24 RTA";

    //producto 5a
    var nombrea5 = "GAS MODS - HALA RDTA";
    var precioa5 = "300";
    var psnia5 = "Bs 280,00";
    var marcaa5 = "GAS MODS";
    var modeloa5 = "HALA RDTA";

    //producto 6a
    var nombrea6 = "No Limits Mods - GLOK 24 RDA";
    var precioa6 = "300";
    var psnia6 = "Bs 280,00";
    var marcaa6 = "No Limits Mods";
    var modeloa6 = "GLOK 24 RDA";    

    //producto 7a
    var nombrea7 = "Voopoo - PnP Tank (Claromizador)";
    var precioa7 = "160";
    var psnia7 = "Bs 140,00";
    var marcaa7 = "Voopoo";
    var modeloa7 = "PnP Tank (Claromizador)"; 

    //producto 8a
    var nombrea8 = "Vopoo - TPP Tank";
    var precioa8 = "150";
    var psnia8 = "Bs 130,00";
    var marcaa8 = "Vopoo";
    var modeloa8 = "TPP Tank";

    //accesorios producto

    //producto 1r
    var nombret1 = "Hilo Para Resistencias - MASTER WIRE";
    var preciot1 = "100";
    var psnit1 = "Bs 80,00";
    var marcat1 = "MASTER WIRE";
    var modelot1 = "Hilo Para Resistencias";

    //producto 2r
    var nombret2 = "Drip Tip 510 Metalico / Ultem - Cthulhu";
    var preciot2 = "50";
    var psnit2 = "Bs 30,00";
    var marcat2 = "Ultem";
    var modelot2 = "Cthulhu";

    //producto 3r
    var nombret3 = "Batería Samsung 40T 21700";
    var preciot3 = "150";
    var psnit3 = "Bs 130,00";
    var marcat3 = "Samsung";
    var modelot3 = "40T 21700";
    
    //producto 4r
    var nombret4 = "Batería Samsung 25R 18650";
    var preciot4 = "85";
    var psnit4 = "Bs 65,00";
    var marcat4 = "Samsung";
    var modelot4 = "25R 18650";


    //condicionales ------------

    window.onload = function () {

    //eliquids
    if(localStorage.getItem("producto") == 1)
    {
        $("#nombreprod").html(nombree1);
        $("#precio").html(precioe1);
        $("#psni").html(psnie1);
        $("#marca").html(marcae1);
        $("#modelo").html(modeloe1);
        $('#imgprod').attr('src','e.liquids/el1.png');
    }

    if(localStorage.getItem("producto") == 2)
    {
        $("#nombreprod").html(nombree2);
        $("#precio").html(precioe2);
        $("#psni").html(psnie2);
        $("#marca").html(marcae2);
        $("#modelo").html(modeloe2);
        $('#imgprod').attr('src','e.liquids/elf1.png');
    }

    if(localStorage.getItem("producto") == 3)
    {
        $("#nombreprod").html(nombree3);
        $("#precio").html(precioe3);
        $("#psni").html(psnie3);
        $("#marca").html(marcae3);
        $("#modelo").html(modeloe3);
        $('#imgprod').attr('src','e.liquids/sn1.png');
    }

    if(localStorage.getItem("producto") == 4)
    {
        $("#nombreprod").html(nombree4);
        $("#precio").html(precioe4);
        $("#psni").html(psnie4);
        $("#marca").html(marcae4);
        $("#modelo").html(modeloe4);
        $('#imgprod').attr('src','e.liquids/el2.png');
    }

    if(localStorage.getItem("producto") == 5)
    {
        $("#nombreprod").html(nombree5);
        $("#precio").html(precioe5);
        $("#psni").html(psnie5);
        $("#marca").html(marcae5);
        $("#modelo").html(modeloe5);
        $('#imgprod').attr('src','e.liquids/elf2.png');
    }

    if(localStorage.getItem("producto") == 6)
    {
        $("#nombreprod").html(nombree6);
        $("#precio").html(precioe6);
        $("#psni").html(psnie6);
        $("#marca").html(marcae6);
        $("#modelo").html(modeloe6);
        $('#imgprod').attr('src','e.liquids/sn2.png');
    }

    if(localStorage.getItem("producto") == 7)
    {
        $("#nombreprod").html(nombree7);
        $("#precio").html(precioe7);
        $("#psni").html(psnie7);
        $("#marca").html(marcae7);
        $("#modelo").html(modeloe7);
        $('#imgprod').attr('src','e.liquids/el3.png');
    }

    if(localStorage.getItem("producto") == 8)
    {
        $("#nombreprod").html(nombree8);
        $("#precio").html(precioe8);
        $("#psni").html(psnie8);
        $("#marca").html(marcae8);
        $("#modelo").html(modeloe8);
        $('#imgprod').attr('src','e.liquids/elf3.png');
    }

    if(localStorage.getItem("producto") == 9)
    {
        $("#nombreprod").html(nombree9);
        $("#precio").html(precioe9);
        $("#psni").html(psnie9);
        $("#marca").html(marcae9);
        $("#modelo").html(modeloe9);
        $('#imgprod').attr('src','e.liquids/sn3.png');
    }

    //equipos

    if(localStorage.getItem("producto") == 11)
    {
        $("#nombreprod").html(nombrer1);
        $("#precio").html(precior1);
        $("#psni").html(psnir1);
        $("#marca").html(marcar1);
        $("#modelo").html(modelor1);
        $('#imgprod').attr('src','equipos/ep1.png');
    }

    if(localStorage.getItem("producto") == 21)
    {
        $("#nombreprod").html(nombrer2);
        $("#precio").html(precior2);
        $("#psni").html(psnir2);
        $("#marca").html(marcar2);
        $("#modelo").html(modelor2);
        $('#imgprod').attr('src','equipos/ep2.png');
    }

    if(localStorage.getItem("producto") == 31)
    {
        $("#nombreprod").html(nombrer3);
        $("#precio").html(precior3);
        $("#psni").html(psnir3);
        $("#marca").html(marcar3);
        $("#modelo").html(modelor3);
        $('#imgprod').attr('src','equipos/ep3.png');
    }

    if(localStorage.getItem("producto") == 41)
    {
        $("#nombreprod").html(nombrer4);
        $("#precio").html(precior4);
        $("#psni").html(psnir4);
        $("#marca").html(marcar4);
        $("#modelo").html(modelor4);
        $('#imgprod').attr('src','equipos/me1.png');
    }

    if(localStorage.getItem("producto") == 51)
    {
        $("#nombreprod").html(nombrer5);
        $("#precio").html(precior5);
        $("#psni").html(psnir5);
        $("#marca").html(marcar5);
        $("#modelo").html(modelor5);
        $('#imgprod').attr('src','equipos/me2.png');
    }

    if(localStorage.getItem("producto") == 61)
    {
        $("#nombreprod").html(nombrer6);
        $("#precio").html(precior6);
        $("#psni").html(psnir6);
        $("#marca").html(marcar6);
        $("#modelo").html(modelor6);
        $('#imgprod').attr('src','equipos/me3.png');
    }

    if(localStorage.getItem("producto") == 71)
    {
        $("#nombreprod").html(nombrer7);
        $("#precio").html(precior7);
        $("#psni").html(psnir7);
        $("#marca").html(marcar7);
        $("#modelo").html(modelor7);
        $('#imgprod').attr('src','equipos/ke1.png');
    }

    if(localStorage.getItem("producto") == 81)
    {
        $("#nombreprod").html(nombrer8);
        $("#precio").html(precior8);
        $("#psni").html(psnir8);
        $("#marca").html(marcar8);
        $("#modelo").html(modelor8);
        $('#imgprod').attr('src','equipos/ke2.png');
    }

    if(localStorage.getItem("producto") == 91)
    {
        $("#nombreprod").html(nombrer9);
        $("#precio").html(precior9);
        $("#psni").html(psnir9);
        $("#marca").html(marcar9);
        $("#modelo").html(modelor9);
        $('#imgprod').attr('src','equipos/ke3.png');
    }

    //atomizadores

    if(localStorage.getItem("producto") == 12)
    {
        $("#nombreprod").html(nombrea1);
        $("#precio").html(precioa1);
        $("#psni").html(psnia1);
        $("#marca").html(marcaa1);
        $("#modelo").html(modeloa1);
        $('#imgprod').attr('src','atomizadores/arta1.png');
    }

    if(localStorage.getItem("producto") == 22)
    {
        $("#nombreprod").html(nombrea2);
        $("#precio").html(precioa2);
        $("#psni").html(psnia2);
        $("#marca").html(marcaa2);
        $("#modelo").html(modeloa2);
        $('#imgprod').attr('src','atomizadores/arta2.png');
    }

    if(localStorage.getItem("producto") == 32)
    {
        $("#nombreprod").html(nombrea3);
        $("#precio").html(precioa3);
        $("#psni").html(psnia3);
        $("#marca").html(marcaa3);
        $("#modelo").html(modeloa3);
        $('#imgprod').attr('src','atomizadores/arta3.png');
    }

    if(localStorage.getItem("producto") == 42)
    {
        $("#nombreprod").html(nombrea4);
        $("#precio").html(precioa4);
        $("#psni").html(psnia4);
        $("#marca").html(marcaa4);
        $("#modelo").html(modeloa4);
        $('#imgprod').attr('src','atomizadores/arta4.png');
    }

    if(localStorage.getItem("producto") == 52)
    {
        $("#nombreprod").html(nombrea5);
        $("#precio").html(precioa5);
        $("#psni").html(psnia5);
        $("#marca").html(marcaa5);
        $("#modelo").html(modeloa5);
        $('#imgprod').attr('src','atomizadores/ardta1.png');
    }

    if(localStorage.getItem("producto") == 62)
    {
        $("#nombreprod").html(nombrea6);
        $("#precio").html(precioa6);
        $("#psni").html(psnia6);
        $("#marca").html(marcaa6);
        $("#modelo").html(modeloa6);
        $('#imgprod').attr('src','atomizadores/arda1.png');
    }

    if(localStorage.getItem("producto") == 72)
    {
        $("#nombreprod").html(nombrea7);
        $("#precio").html(precioa7);
        $("#psni").html(psnia7);
        $("#marca").html(marcaa7);
        $("#modelo").html(modeloa7);
        $('#imgprod').attr('src','atomizadores/vtt1.png');
    }

    if(localStorage.getItem("producto") == 82)
    {
        $("#nombreprod").html(nombrea8);
        $("#precio").html(precioa8);
        $("#psni").html(psnia8);
        $("#marca").html(marcaa8);
        $("#modelo").html(modeloa8);
        $('#imgprod').attr('src','atomizadores/vtt2.png');
    }
    //accesorios

    if(localStorage.getItem("producto") == 13)
    {
        $("#nombreprod").html(nombret1);
        $("#precio").html(preciot1);
        $("#psni").html(psnit1);
        $("#marca").html(marcat1);
        $("#modelo").html(modelot1);
        $('#imgprod').attr('src','accesorios/re1.png');
    }

    if(localStorage.getItem("producto") == 23)
    {
        $("#nombreprod").html(nombret2);
        $("#precio").html(preciot2);
        $("#psni").html(psnit2);
        $("#marca").html(marcat2);
        $("#modelo").html(modelot2);
        $('#imgprod').attr('src','accesorios/re2.png');
    }

    if(localStorage.getItem("producto") == 33)
    {
        $("#nombreprod").html(nombret3);
        $("#precio").html(preciot3);
        $("#psni").html(psnit3);
        $("#marca").html(marcat3);
        $("#modelo").html(modelot3);
        $('#imgprod').attr('src','accesorios/re3.png');
    }

    if(localStorage.getItem("producto") == 43)
    {
        $("#nombreprod").html(nombret4);
        $("#precio").html(preciot4);
        $("#psni").html(psnit4);
        $("#marca").html(marcat4);
        $("#modelo").html(modelot4);
        $('#imgprod').attr('src','accesorios/re4.png');
    }

}

});