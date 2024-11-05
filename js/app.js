let amigosIncluidos = [];

function adicionar(){
    let nomeAmigo = document.getElementById('nome-amigo').value;
    let lista = document.getElementById('lista-amigos');
    
    
    if(nomeAmigo == ''){
        alert('Insira um nome!');
    } else if(amigosIncluidos.includes(nomeAmigo)){
        alert('Esse amigo ja foi adicionado');   
    } else if(lista.textContent == ''){
        amigosIncluidos.push(nomeAmigo);
        lista.textContent = nomeAmigo;
    } else {
        amigosIncluidos.push(nomeAmigo);
        lista.textContent = lista.textContent + ', ' + nomeAmigo;
    }
    
    
}

function sortear(){
    if(amigosIncluidos.length % 2 != 0, amigosIncluidos.length < 4){
        alert('Para realizar o sorteio é necessário que a quantidade de participantes seja par e maior que 4.');
        return;
    }
    embaralha(amigosIncluidos);
    let sorteio = document.getElementById('lista-sorteio');
    for(i = 0; i < amigosIncluidos.length; i++){
        if(i == amigosIncluidos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigosIncluidos[i] + ' --> ' + amigosIncluidos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigosIncluidos[i] + ' --> ' + amigosIncluidos[i + 1] + '<br>';
        }
        
    }
  }



function reiniciar(){
    amigosIncluidos = [];
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
