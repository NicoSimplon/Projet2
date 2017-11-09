calc_array = new Array();
var calcul=0;
var a = 0
var b = 0

function $id(id)
{
        return document.getElementById(id);
}
function f_calc(id,n)
{
        if(n=='ce')
        {
                initialiser_calc(id);
        }
        else if(n=='=')
        {
                if(calc_array[id][0]!='=' && calc_array[id][1]!=1)
                {
                        eval('calcul='+calc_array[id][2]+calc_array[id][0]+calc_array[id][3]+';');
                        calc_array[id][0] = '=';
                        $id(id+'_resultat').value=calcul;
                        calc_array[id][2]=calcul;
                        calc_array[id][3]=0;
                }

function byId(calc) {
    return document.getElementById(calc);
}

function add(a,b){
	return (a) + (b);
}

function sub(a,b){
	return (a) - return (b);
}

function mult(a,b){
	return (a) * return (b);
}

function div(a,b){
	if (b>0) return (a) / (b);
	if (b =< 0) return a / b;
               else return "Impossible de diviser par 0";
}


