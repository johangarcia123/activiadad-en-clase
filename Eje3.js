//Crear un programa que permita ingresar números enteros del 1 al 10, 
//y muestre su equivalente en números romanos 
/*Anthony Molina y Johann Garcia */
	var suma;
	var n = new Number();
	var prom = new Number();
	var x = new Number();
	n = 1;
	x = 0;
	suma = 0;
	prom = 0;
	while (n!=0) {
		document.write("Ingresa una nota hasta 0",'<BR/>');
		n = Number(prompt("Ingresa una nota hasta 0"));
		if (n!=0) {
			suma = suma+n;
			x = x+1;
			prom = suma/x;
		}
	}
	if (x==0) {
		document.write("El primedio de las notas es:",0,'<BR/>');
	} else {
		document.write("El promedio de las notas es:",prom,'<BR/>');
	}

