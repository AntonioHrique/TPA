function juros () {
 var resultado = document.getElementById('resultado');
 
 var aplicado = parseFloat(document.getElementById("aplicado").value);

 var juro = parseFloat(document.getElementById("juro").value);

 var numero = parseFloat(document.getElementById("numero").value);
 var calc='';

calc = aplicado * ((((1 + (juro/100))** numero) - 1) / (juro/100));
 
resultado.textContent = `Olá, se você aplicar ${aplicado} reais por mês, à taxa de ${juro/100}% ao mês, durante ${numero} meses, acumulará uma poupança de ${calc.toFixed(2)} reais`;
}
