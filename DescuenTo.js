/*Anthony Molina y Johann Garcia */



// Descuento 
document.write("Cual es tu tipo a pagar ", '<BR/>');
document.write("1.- 0 a 100 ", '<BR/>');
document.write("2.- 100.01 a 250 ", '<BR/>');
document.write("3.- 250.01 a 800", '<BR/>');
document.write("4.- 800.01 a mas ", '<BR/>');
num = Number(prompt());
document.write("Escribir un tu valor a pagar", '<BR/>');
val = Number(prompt("Escribir un tu valor a pagar"));
switch (num) {
	case "1":
		if (val <= 100) {
			total = (0.02 * val);
			total = (val - total);
			document.write("Tu descuento es del 2%", '<BR/>');
			document.write("Tu valor a pagar es de $ ", (total), '<BR/>');
		} else {
			document.write("algo salio mal repita", '<BR/>');
		}
		break;
	case "2":
		if (val <= 250 && val >= 100.01) {
			total = (0.05 * val);
			total = (val - total);
			document.write("Tu descuento es del 5%", '<BR/>');
			document.write("Tu valor a pagar es de $ ", (total), '<BR/>');
		} else {
			document.write("algo salio mal repita", '<BR/>');
		}
		break;
	case "3":
		if (val <= 800 && val >= 250.01) {
			total = (0.08 * val);
			total = (val - total);
			document.write("Tu descuento es del 8%", '<BR/>');
			document.write("Tu valor a pagar es de $ ", (total), '<BR/>');
		} else {
			document.write("algo salio mal repita", '<BR/>');
		}
		break;
	case "4":
		if (val <= 100000000 && val >= 8001.01) {
			total = (0.12 * val);
			total = (val - total);
			document.write("Tu descuento es del 12%", '<BR/>');
			document.write("Tu valor a pagar es de $ ", (total), '<BR/>');
		} else {
			document.write("algo salio mal repita", '<BR/>');
		}
		break;
	default:
		document.write("No tiene descuento", '<BR/>');
}


