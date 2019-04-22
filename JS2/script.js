
var contador = 0;

console.log("Escolha sua jogada:\n 1 - Papel\n 2 - Pedra \n 3 - Tesoura")


	var escolha = parseInt(prompt())

while(escolha > 0 &&  escolha < 4){

	var escolhaC = Math.ceil(Math.random()*3)

	if(escolhaC == 1){
		console.log("O computador jogou Papel")
	}
	else if(escolhaC == 2){ 
			console.log("O computador jogou Pedra")
	}
	else if(escolhaC == 3){ 
			console.log("O computador jogou Tesoura")
	}


	if(escolhaC == escolha){
		console.log("A rodada empatou!")
	}
	else if((escolha == 1 && escolhaC == 3) || (escolha = 2 && escolhaC == 1) || (escolha = 3 && escolhaC == 2)){
		console.log("Você perdeu!, A sua pontuação foi de " + contador)
	}
	else if((escolha == 1 && escolhaC == 2) || (escolha == 2 && escolhaC == 3) || (escolha == 3 && escolhaC == 1)){
		console.log("Você ganhou!")
		contador++;

	}

	var escolha = parseInt(prompt())


}


