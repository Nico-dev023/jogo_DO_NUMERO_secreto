let ListaDenumerosSorteados = [];
let numeroLimite = 100;
let NumeroSecreto = gerarNumeroAleatorio();
let Tentativas = 1 ;

function exibirTextonaTela (tag,texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextonaTela('h1', 'jogo do numero secreto');
    exibirTextonaTela('p', 'Escolha um numero de 1 a 50');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if(chute == NumeroSecreto){
        exibirTextonaTela ('h1','acertou!');
         let PalavraTentativa = Tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentivas = `voce descobriu o numero secreto com ${Tentativas} ${PalavraTentativa}`;
        exibirTextonaTela('p',mensagemTentivas);
        
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > NumeroSecreto){
            exibirTextonaTela('p','o numero secreto e menor');
        } else{
            exibirTextonaTela('p','o numero secreto e maior');
        }
        Tentativas++;
        LimparCampo();
    }


}

function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt( Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = ListaDenumerosSorteados.length;

  if(quantidadeDeElementosNaLista == numeroLimite){
    ListaDenumerosSorteados = [];
  }

  if (ListaDenumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  }else{
    ListaDenumerosSorteados.push(numeroEscolhido);
    console.log(ListaDenumerosSorteados);
    return numeroEscolhido;
  }
}
function LimparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    NumeroSecreto = gerarNumeroAleatorio();
    LimparCampo();
    Tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}




