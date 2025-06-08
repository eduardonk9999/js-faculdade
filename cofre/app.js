/**
 * Gera uma senha aleatória de 3 dígitos (entre 100 e 999). [X]
 * 
 * O jogador tem até 5 tentativas para adivinhar a senha.
 * 
 * A cada tentativa, mostra se o palpite é maior ou menor do que a senha.
 * 
 * No final, mostra se ele venceu ou perdeu.
 * 
 * 
 */






var senhaAleatoria = (Math.random() * 99);

console.log(Math.floor(senhaAleatoria))


var tentativas = 5;

while(Math.floor(tentativas) > 0) {
    var promptUser = Math.floor(prompt("Digite seu valor"));

    if(senhaAleatoria > promptUser){
        console.log("MAIOR QUE ESSE VALOR")
    } else {
        console.log("MENOR QUE ESSE VALOR")
    }


    if(Math.floor(senhaAleatoria) == promptUser) {
        alert("Voce acerto")
        
        break;
        
    }

    tentativas--;
}
console.log("Acabou as tentativas")