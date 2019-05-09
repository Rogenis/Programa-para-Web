

function calcular() {

    var area =  document.getElementById("area");
    var circulo = document.myForm.circulo.value; 
    document.myForm.circulo.value = document.myForm.area.value *  document.myForm.area.value * 3.1415;

    var circuferencia = document.myForm.circulo.value; 
    document.myForm.circuferencia.value = 2*3.1415 * document.myForm.area.value;

}