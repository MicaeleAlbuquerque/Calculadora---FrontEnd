function numero(num)
{
     var numero = document.getElementById('resultado').innerHTML;
    
     // impede começar com operador
    if(["+", "-", "*", "/"].includes(num) && numero.length === 0) {
        return;
    }
    
        if(["+", "-", "*", "/"].includes(num) && ["+", "-", "*", "/"].includes(numero.slice(-1))) {
            // troca o último operador pelo novo
            document.getElementById('resultado').innerHTML = numero.slice(0, -1) + num;
            return;
        }

        document.getElementById('resultado').innerHTML = numero + num;

    }

function clean(){
    document.getElementById('resultado').innerHTML ="";
}

function back()
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById("resultado").innerHTML = numero.substring(0, numero.length -1)
}

function calcular(){
    var numero = document.getElementById('resultado').innerHTML;
    if(numero){
        document.getElementById('resultado').innerHTML = eval(numero);
} else{
    document.getElementById('resultado').innerHTML = "";
    alert("impossivel para calcular");
}
}