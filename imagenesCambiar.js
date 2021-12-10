/*Declaramos vectores para guardar las direcciones de cada imagen*/
var eliquids = new Array(9);
eliquids[0] = "e.liquids/el1.png";
eliquids[1] = "e.liquids/el2.png";
eliquids[2] = "e.liquids/el3.png";
eliquids[3] = "e.liquids/elf1.png";
eliquids[4] = "e.liquids/elf2.png";
eliquids[5] = "e.liquids/elf3.png";
eliquids[6] = "e.liquids/sn1.png";
eliquids[7] = "e.liquids/sn2.png";
eliquids[8] = "e.liquids/sn3.png";
var equipos = new Array(9);
equipos[0] = "equipos/ep1.png";
equipos[1] = "equipos/ep2.png";
equipos[2] = "equipos/ep3.png";
equipos[3] = "equipos/ke1.png";
equipos[4] = "equipos/ke2.png";
equipos[5] = "equipos/ke3.png";
equipos[6] = "equipos/me1.png";
equipos[7] = "equipos/me2.png";
equipos[8] = "equipos/me3.png";
var atomizadores = new Array(8);
atomizadores[0] = "atomizadores/arda1.png";
atomizadores[1] = "atomizadores/ardta1.png";
atomizadores[2] = "atomizadores/arta1.png";
atomizadores[3] = "atomizadores/arta2.png";
atomizadores[4] = "atomizadores/arta3.png";
atomizadores[5] = "atomizadores/arta4.png";
atomizadores[6] = "atomizadores/vtt1.png";
atomizadores[7] = "atomizadores/vtt2.png";
var accesorios = new Array(4);
accesorios[0] = "accesorios/re1.png";
accesorios[1] = "accesorios/re2.png";
accesorios[2] = "accesorios/re3.png";
accesorios[3] = "accesorios/re4.png";

/*invocar los botones de izquierda y derecha*/
var eliquidsIZQ = document.getElementById("izq");
var equiposIZQ = document.getElementById("izq2");
var atomizadoresIZQ = document.getElementById("izq3");
var accesoriosIZQ = document.getElementById("izq4");
var eliquidsDER = document.getElementById("der");
var equiposDER = document.getElementById("der2");
var atomizadoresDER = document.getElementById("der3");
var accesoriosDER = document.getElementById("der4");

/*Declaramos variables contadores*/
var cont1 = 0;
var cont2 = 0;
var cont3 = 0;
var cont4 = 0;

/*Damos funciones a los botones*/
function cambiarIzq1(){
	if(cont1==0)
	{
		cont1 = 8;
		document.getElementById("imgEliquids").src=eliquids[cont1];
	}
	else
	{
		cont1 -= 1;
		document.getElementById("imgEliquids").src=eliquids[cont1];
	}
}
function cambiarIzq2(){
	if(cont2==0)
	{
		cont2 = 8;
		document.getElementById("imgEquipos").src=equipos[cont2];
	}
	else
	{
		cont2 -= 1;
		document.getElementById("imgEquipos").src=equipos[cont2];
	}
}
function cambiarIzq3(){
	if(cont3==0)
	{
		cont3 = 7;
		document.getElementById("imgAtomizadores").src=atomizadores[cont3];
	}
	else
	{
		cont3 -= 1;
		document.getElementById("imgAtomizadores").src=atomizadores[cont3];
	}
}
function cambiarIzq4(){
	if(cont4==0)
	{
		cont4 = 3;
		document.getElementById("imgAccesorios").src=accesorios[cont4];
	}
	else
	{
		cont4 -= 1;
		document.getElementById("imgAccesorios").src=accesorios[cont4];
	}
}
function cambiarDer1(){
	if(cont1==8)
	{
		cont1 = 0;
		document.getElementById("imgEliquids").src=eliquids[cont1];
	}
	else
	{
		cont1 += 1;
		document.getElementById("imgEliquids").src=eliquids[cont1];
	}
}
function cambiarDer2(){
	if(cont2==8)
	{
		cont2 = 0;
		document.getElementById("imgEquipos").src=equipos[cont2];
	}
	else
	{
		cont2+= 1;
		document.getElementById("imgEquipos").src=equipos[cont2];
	}
}
function cambiarDer3(){
	if(cont3==7)
	{
		cont3 = 0;
		document.getElementById("imgAtomizadores").src=atomizadores[cont3];
	}
	else
	{
		cont3 += 1;
		document.getElementById("imgAtomizadores").src=atomizadores[cont3];
	}
}
function cambiarDer4(){
	if(cont4==3)
	{
		cont4 = 0;
		document.getElementById("imgAccesorios").src=accesorios[cont4];
	}
	else
	{
		cont4 += 1;
		document.getElementById("imgAccesorios").src=accesorios[cont4];
	}
}