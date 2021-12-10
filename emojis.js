function iniciar()
{
    var canvasEmoticonFeliz = document.getElementById('canvasemojifeliz');
    var contexto = canvasEmoticonFeliz.getContext('2d');
    contexto.beginPath();
    contexto.arc(37.5,37.5,37.5,0,Math.PI * 2, true);
    contexto.moveTo(62.5,37.5);
    contexto.arc(37.5,37.5,25,0,Math.PI,false);
    contexto.moveTo(27.5,22.5);
    contexto.arc(22.5,22.5,5,0,Math.PI * 2, true);
    contexto.moveTo(57.5,22.5);
    contexto.arc(52.5,22.5,5,0,Math.PI * 2, true);
    contexto.strokeStyle="yellow";
    contexto.stroke();
}
window.addEventListener("load",iniciar);
function iniciar2()
{
    var canvasEmoticonFeliz = document.getElementById('canvasemojienojado');
    var contexto = canvasEmoticonFeliz.getContext('2d');
    contexto.beginPath();
    contexto.arc(37.5,37.5,37.5,0,Math.PI * 2, true);
    contexto.moveTo(62.5,62);
    contexto.arc(37.5,62,25,0,Math.PI,true);
    contexto.moveTo(27.5,22.5);
    contexto.arc(22.5,22.5,5,0,Math.PI * 2, true);
    contexto.moveTo(57.5,22.5);
    contexto.arc(52.5,22.5,5,0,Math.PI * 2, true);
    contexto.strokeStyle="yellow";
    contexto.stroke();
}
window.addEventListener("load",iniciar2);