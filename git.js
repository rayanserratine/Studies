let why = ''

function question(){
  why = prompt('Porque vc ama a meg?')
    alert('Resposta: ' + why)
}

function result(){
    if(why == 'tetuda'){
        alert('Nao eh amor');
    } else {
        alert('eh amor')
    }
    }


question()
result()