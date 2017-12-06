// calc_array = new Array();
// var calcul=0;
// var a = 0
// var b = 0

// function $id(id)
// {
//         return document.getElementById(id);
// }
// function f_calc(id,n)
// {
//         if(n=='ce')
//         {
//                 initialiser_calc(id);
//         }
//         else if(n=='=')
//         {
//                 if(calc_array[id][0]!='=' && calc_array[id][1]!=1)
//                 {
//                         eval('calcul='+calc_array[id][2]+calc_array[id][0]+calc_array[id][3]+';');
//                         calc_array[id][0] = '=';
//                         $id(id+'_resultat').value=calcul;
//                         calc_array[id][2]=calcul;
//                         calc_array[id][3]=0;
//                 }

// function byId(calc) {
//     return document.getElementById(calc);
// }

// function add(a,b){
// 	return (a) + (b);
// }

// function sub(a,b){
// 	return (a) - return (b);
// }

// function mult(a,b){
// 	return (a) * return (b);
// }

// function div(a,b){
// 	if (b>0) return (a) / (b);
// 	if (b =< 0) return a / b;
//                else return "Impossible de diviser par 0";
// }


console.log ("l'éléphant");

function camelCase(id) {
    // console.log (id);
    // console.log (document.getElementById(id).value);
    //va chercher le chiffre entré par l'utilisateur et le stocke dans la variable nombre
    var nombre=document.getElementById(id).value;
  
    console.log ("nombre:",nombre);
    //On ajoute nombre à la valeur de calc_resultat pour afficher les chiffres tapés à la calculatrices les uns à la suite des autres
    document.getElementById("calc_resultat").value= calc_resultat.value + nombre;

}

// fonction clear/supprimer
function supprimer() {
    document.getElementById("calc_resultat").value ="";
    
}


//on fixe les états initiaux des variables a et b
var a = 0; 

var b = 0;

//a= a + b;


//on créé une fonction addition qui renvoie le résultat des arguments a et b
function addition(a,b) {
    console.log(b);
    a = document.getElementById("calc_resultat").value;
    b = parseInt(a) + parseInt(b);

    //console.log ("a :", parseInt(a));
    //console.log ("b :", parseInt(b));
    //document.getElementById("calc_resultat").value = b;
    console.log("addition :" + b)
    return b
    
}






//stocker les nombres et opérations de l'utilisateur

/* - une   fonction   nommée   "addition"   qui   renvoie   le   résultat  
 de   l'addition   des  deux​ ​ arguments​ ​ a ​ ​ et​ ​ b. 
- une   fonction   nommée   "soustraction"   qui   renvoie   le   résultat 
  de   la  soustraction​ ​ des​ ​ deux​ ​ arguments​ ​ a ​ ​ et​ ​ b. 
- une   fonction   nommée   "multiplication"   qui   renvoie   le   résultat  
 de   la  multiplication​ ​ des​ ​ deux​ ​ arguments​ ​ a ​ ​ et​ ​ b. 
- une​ ​ fonction​ ​ nommée​ ​ "division": 
- Si​ ​ b ​ ​ > ​ ​ 0 ​ ​ qui​ ​ renvoie​ ​ le​ ​ résultat​ ​ de​ ​ la​ ​ division​ ​ a/b. 
- Si   b   =<   0   qui   renvoie   le   message   d'erreur   
suivant   :   "Impossible   de  diviser​ ​ par​ ​ 0" */







