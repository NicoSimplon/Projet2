var a = 0;
var b = 0;
var operateur;
var longueur;
var ecran;
var ecran_modif;

function supprimer () 
{
	document.getElementById("calc_resultat").value = '';
}

function supp()
{
	ecran = document.getElementById("calc_resultat").value;
	ecran_modif = ecran.substring(0,ecran.length-1);
	document.getElementById("calc_resultat").value = ecran_modif;
}

function camelCase(id)
{
	var nombre=document.getElementById(id).value;
	document.getElementById("calc_resultat").value = calc_resultat.value + nombre;
}

function addition()
{
	a = document.getElementById("calc_resultat").value;
	supprimer();
	operateur = "+";
}
function soustraction()
{
	a = document.getElementById("calc_resultat").value;
	supprimer();
	operateur = "-";
}
function multiplication()
{
	a = document.getElementById("calc_resultat").value;
	supprimer();
	operateur = "*";
}
function division()
{
	a = document.getElementById("calc_resultat").value;
	supprimer();
	operateur = "/";
}

function resultat() 
{
	b = document.getElementById("calc_resultat").value;
	
	if(operateur == "+")
	{
		a= parseInt (a) + parseInt (b) ;
		supprimer();
		document.getElementById("calc_resultat").value = a;
	}
	else if(operateur == "-")
	{
		a = parseInt (a) - parseInt (b) ;
		supprimer();
		document.getElementById("calc_resultat").value = a;
	}
	else if(operateur == "*")
	{
		a = parseInt (a) * parseInt (b) ;
		supprimer();
		document.getElementById("calc_resultat").value = a;
	}
	else if(operateur == "/" && b != 0)
	{
		a = parseInt (a) / parseInt (b) ;
		supprimer();
		document.getElementById("calc_resultat").value = a;
	}
console.log(resultat);
}