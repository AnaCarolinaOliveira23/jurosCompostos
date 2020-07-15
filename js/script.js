function clicar() {
  var inicial = document.querySelector(".inicial").value;
  var juros = document.querySelector(".juros").value;
  var meses = document.querySelector(".meses").value;
  var montante = document.querySelector(".montante").value;
  var rendimento = document.querySelector(".rendimento").value;
  //var resultado = parseFloat(inicial) + parseFloat(juros) + parseInt(meses) + parseFloat(montante);
//document.querySelector(".resultado").innerHTML=resultado;


//var resultado = parseFloat ((1+(juros/100))** (meses) * (inicial));
//document.querySelector(".resultado").innerHTML=resultado;


var resultado = parseFloat ((1+(juros/100))** (meses) * (inicial));
document.querySelector(".resultado").innerHTML=resultado;

var rendimento = (resultado*100)/ inicial;


var diferença = rendimento - 100;
document.querySelector(".botaoRendimento").innerHTML=diferença;
}
