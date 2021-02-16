var botao = document.getElementById('botao')
var select = document.getElementById('select')
botao.addEventListener('click', ()=>{
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var resultado = document.getElementById('resultado')
    var cont= 0;
    if(select.value=='+'){
        cont = parseInt(n1)+parseInt(n2);
        resultado.innerHTML=`Resultado: ${cont}`
        
        
    }
    else if(select.value=='-'){
        cont = parseInt(n1)-parseInt(n2);
        resultado.innerHTML=`Resultado: ${cont}`
    }
    else if(select.value=='*'&&n1>0){
        cont = parseInt(n1)*parseInt(n2);
        resultado.innerHTML=`Resultado: ${cont}`
    }
    else if(select.value=='/'&&n1>0&&n1>=n2){
        cont = parseInt(n1)/parseInt(n2);
        resultado.innerHTML=`Resultado: ${cont.toFixed(2)}`
    }
    
        
})
