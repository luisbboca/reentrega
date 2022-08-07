
let ingles;
let leng;
let mate;
let progra;
let promedioTotal;

function promedio(){
    ingles=document.calculo.ingles.value;
    leng=document.calculo.leng.value;
    mate=document.calculo.mate.value;
    progra=document.calculo.progra.value;
    /*promedio de notas*/
    promedioTotal=(parseFloat(ingles)+parseFloat(leng)+parseFloat(mate)+parseFloat(progra))/4;
    document.getElementById('promedio').innerHTML=promedioTotal;
    /*evaluacion*/
    if (promedioTotal>=6) {
        document.getElementById('evaluacion').innerHTML="APROBADO";
    }else{
        document.getElementById('evaluacion').innerHTML="DESAPROBADO";
    }
}