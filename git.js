let why = ''

function question(){
  why = prompt('Você ama a meg?')
    alert('Resposta: ' + why)
}

function choice(){
    
}

function result(){
    
    if(why == 'sim'){
        let yes = prompt('Por que?');
        if(yes === 'tetuda')
        alert('Nao eh amor')
    else {
        alert('Eh amor')
    }
    } else {
        alert('eh amor')
    }
    } while(why === 'nao')


question()
result()