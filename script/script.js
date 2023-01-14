let x = document.querySelector(".x");                               //SELETOR DO ELEMENTO 'X' NO HTML
let o = document.querySelector(".o");                               //SELETOR DO ELEMENTO 'O' NO HTML
let boxes = document.querySelectorAll('.box');                      //SELETOR DE TODAS AS ÁREAS CLICÁVEIS DO JOGO
let botoes = document.querySelectorAll('#container-botoes button'); //SELETOR DOS BOTÕES
let mensagemContainer = document.querySelector("#mensagem");        //SEELTOR DO CONTAINER DE MENSAGENS
let mensagemTexto = document.querySelector('#mensagem p');          //SELETOR DA TAG DE PARAGRAFO
let pVp = document.querySelector('#dois-jogadores');                //SELETOR DO BOTÃO DE 2 JOGADORES
let pVm = document.querySelector('#um-jogador')                     //SELETOR DO BOTÃO DE 1 JOGADOR
let jogo = document.querySelector('#container')                     //SELETOR DO CONTAINER QUE CONTÉM O JOGO
let divBotao = document.querySelector('#container-botoes')          //SELETOR DO CONTAINER QUE CONTÉM OS BOTÕES
let placarX = document.querySelector('#placar-1')                   //SELETOR DO PLACAR DE 'X'
let placarO = document.querySelector('#placar-2')                   //SELETOR DO PLACAR DE 'O'
pVp.setAttribute('onclick', 'iniciaJogo()')                         //ATRIBUTO PARA CHAMAR A FUNÇÃO DE INICIO DO JOGO COM 2 JOGADORES
pVm.setAttribute('onclick','iniciaJogo()')                          //ATRIBUTO PARA CHAMAR A FUNÇÃO DE INICIO DO JOGO

let jogador1 = 0;                                                   //CONTADOR DE JOGADAS DO JOGADOR 1
let jogador2 = 0;                                                   //CONTADOR DE JOGADAS DO JOGADOR 2

function iniciaJogo(){                                              //FUNÇÃO DO JOGO

    let qtdJogadores = this.event.srcElement.textContent            //VERIFICADOR DE QUANTIDADE DE JOGADORES
    jogo.classList.remove('hide')                                   //MOSTRAR JOGO E ESCONDER BOTÕES
    divBotao.classList.add('hide')                                  //MOSTRAR JOGO E ESCONDER BOTÕES
    for(i=0;i<boxes.length;i++){                                    
        boxes[i].addEventListener('click',function(){               //ADICIONANDO O EVENTO CLICK NAS AREAS DO JOGO 
        jogadorDaVez(jogador1,jogador2);                            //CHAMADO PARA ORDENAR A VEZ DOS JOGADORES (X É SEMPRE O PRIMEIRO), RETORNA O VALOR DE "el"
        if(this.childNodes.length == 0){                            //CONDIÇÃO PARA EXISTIR SOMENTE UMA DIV DENTRO DA ÁREA CLICÁVEL    
            if(jogador1 == jogador2){                               //CONDIÇÃO PARA ADICIONAR O ELEMENTO 'X' NA ÁREA CLICÁVEL
                jogador1++;                                         //INCREMENTA VALOR À VARIAVEL
                let cloneDeEl = el.cloneNode(true);                 
                this.appendChild(cloneDeEl);
                if(qtdJogadores == '1 Jogador'){                    //CONDIÇÃO CASO A OPÇÃO 1 JOGADOR FOR ESCOLHIDA
                    contraIa();
                    jogador2++
                }
            }else{                                                  //CONDIÇÃO PARA ADICIONAR O ELEMENTO 'O' NA ÁREA CLICÁVEL   
                jogador2++;                                         //INCREMENTA VALOR À VARIAVEL
                let cloneDeEl = el.cloneNode(true);
                this.appendChild(cloneDeEl);
            }
            verificaVencedor()                                      //CHAMADO PARA FUNÇÃO DE CONDIÇÕES DE VITÓRIA
        }      
    })
    }

    function jogadorDaVez(jogador1,jogador2){                        //ORDENANDO JOGADORES
        // de quem é a vez
        if(jogador1 == jogador2){                                    //JOGADOR 1
            //vez do x
            el=x;
            return el;
        }else{                                                       //JOGADOR 1
            //vez do o
            el=o;
            return el;
        }   
    }

    function contraIa(){                                             //FUNÇÃO QUE DETERMINA ONDE A 'INTELIGENCIA ARTIFICIAL' IRÁ JOGAR
        let cloneO = o.cloneNode(true)                               //CLONE DO ELEMENTO 'O'
        for(let i = 0;i<boxes.length;i++){
            if(boxes[i].childNodes[0] == undefined){  
                let number = parseInt(Math.random()*9 )              //GERADOR DE NUMERO INTEIRO ALEATÓRIO
                if(boxes[number].childNodes.length == 0){            //CONDIÇÃO QUE RESTRINGE A QUANTIDADE DE FILHOS DO ELEMENTO A 0
                    boxes[number].appendChild(cloneO);               //INSERINDO O ELEMENTO 'O' 
                    break;
                }else{                                               //RECURSIVIDADE CASO A CONDIÇÃO NÃO FOR CUMPRIDA 
                    contraIa()                                      
                }
            break;
            }
        }
    }
    
}

function verificaVencedor(){                                        //FUNÇÃO QUE DETERMINA O VENCEDOR

    b1 = document.querySelector('#block-1').childNodes
    b2 = document.querySelector('#block-2').childNodes
    b3 = document.querySelector('#block-3').childNodes
    b4 = document.querySelector('#block-4').childNodes
    b5 = document.querySelector('#block-5').childNodes
    b6 = document.querySelector('#block-6').childNodes
    b7 = document.querySelector('#block-7').childNodes
    b8 = document.querySelector('#block-8').childNodes
    b9 = document.querySelector('#block-9').childNodes

    //DETERMINADORES DE VENCEDOR NA HORIZONTAL

    if(b1.length + b2.length + b3.length == 3){                     //LINHA 1
        if(b1[0].className == 'x'&& b2[0].className == 'x' && b3[0].className == 'x'){
            //x venceu
            declaraVencedor('x');
            //declaraVencedor('x');
        }else if(b1[0].className == 'o'&& b2[0].className == 'o' && b3[0].className == 'o'){
            //o venceu
            declaraVencedor('o');
        }
    }

    if(b4.length + b5.length + b6.length == 3){                     //LINHA 2
        if(b4[0].className == 'x'&& b5[0].className == 'x' && b6[0].className == 'x'){
            //x venceu
            declaraVencedor('x');
        }else if(b4[0].className == 'o'&& b5[0].className == 'o' && b6[0].className == 'o'){
            //o venceu
            declaraVencedor('o');
        }
    }

    if(b7.length + b8.length + b9.length == 3){                     //LINHA 3
        if(b7[0].className == 'x'&& b8[0].className == 'x' && b9[0].className == 'x'){
            //x venceu
            declaraVencedor('x'); 
        }else if(b7[0].className == 'o'&& b8[0].className == 'o' && b9[0].className == 'o'){
            //o venceu
            declaraVencedor('o');   
        }
    }
    
    //DETERMINADORES DE VENCEDOR NA VERTICAL

    if(b1.length + b4.length + b7.length == 3){                     //COLUNA 1
        if(b1[0].className == 'x'&& b4[0].className == 'x' && b7[0].className == 'x'){
            //x venceu
            declaraVencedor('x');
        }else if(b1[0].className == 'o'&& b4[0].className == 'o' && b7[0].className == 'o'){
            //o venceu
            declaraVencedor('o');
        }
    }

    if(b2.length + b5.length + b8.length == 3){                     //COLUNA 2
        if(b2[0].className == 'x'&& b5[0].className == 'x' && b8[0].className == 'x'){
            //x venceu
            declaraVencedor('x');
        }else if(b2[0].className == 'o'&& b5[0].className == 'o' && b8[0].className == 'o'){
            //o venceu
            declaraVencedor('o');
        }
    }

    if(b3.length + b6.length + b9.length == 3){                     //COLUNA 3
        if(b3[0].className == 'x'&& b6[0].className == 'x' && b9[0].className == 'x'){
            //x venceu
            declaraVencedor('x');
        }else if(b3[0].className == 'o'&& b6[0].className == 'o' && b9[0].className == 'o'){
            //o venceu
            declaraVencedor('o');
        }
    }

    //DETERMINADORES DE VENCEDOR NA DIAGONAL

    if(b1.length + b5.length + b9.length == 3){                     //DIAGONAL 1
        if(b1[0].className == 'x'&& b5[0].className == 'x' && b9[0].className == 'x'){
            //x venceu
            declaraVencedor('x');       
        }else if(b1[0].className == 'o'&& b5[0].className == 'o' && b9[0].className == 'o'){
            //o venceu
            declaraVencedor('o');  
        }
    }

    if(b3.length + b5.length + b7.length == 3){                     //DIAGONAL 2
        if(b3[0].className == 'x'&& b5[0].className == 'x' && b7[0].className == 'x'){
            //x venceu
            declaraVencedor('x');
        }else if(b3[0].className == 'o'&& b5[0].className == 'o' && b7[0].className == 'o'){
            //o venceu
            declaraVencedor('o');
        }
    }

    //DETERMINADOR DE 'DEU VELHA'
    if(b1.length + b2.length + b3.length + b4.length + b5.length + b6.length + b7.length + b8.length + b9.length == 9){
        //velha
        declaraVencedor('velha');
    }
}

function declaraVencedor(vencedor){                                 //FUNÇÃO QUE DECLARA O VENCEDOR NA TELA
    setTimeout(()=>{
        if(vencedor == 'x'){
            mensagemTexto.innerHTML = 'Jogador 1 é o vencedor';
            mensagemContainer.classList.remove('hide')
        }else if(vencedor == 'o'){
            mensagemTexto.innerHTML = 'Jogador 2 é o vencedor';
            mensagemContainer.classList.remove('hide')
        }else{
            mensagemTexto.innerHTML = 'Deu velha!';
            mensagemContainer.classList.remove('hide')
        }

    setTimeout(()=>{                                                //TIMEOUT PARA TIRAR A MENSAGEM DE VENCEDOR NA TELA
        mensagemContainer.classList.add('hide')
    },2000)
                
    if(vencedor == 'x'){                                            //ADICIONA VALORES AO PLACAR DE X
        placarX.textContent = parseInt(placarX.textContent) + 1;
    }else if(vencedor == 'o'){                                      //ADICIONA VALORES AO PLACAR DE O
        placarO.textContent = parseInt(placarO.textContent) + 1
    }
        
    jogador1 = 0;                                                   //ZERA AS JOGADAS DE JOGADOR 1                
    jogador2 = 0;                                                   //ZERA AS JOGADAS DE JOGADOR 2                

    let filhoParaRemover = document.querySelectorAll(".box div")    //RETIRA OS ELEMENTOS DAS ÁREAS CLICÁVEIS
    for(p = 0;p<filhoParaRemover.length;p++){
        filhoParaRemover[p].parentNode.removeChild(filhoParaRemover[p])
    }
    },200)
    return
}
