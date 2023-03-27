function escreveNome(nome) {
   return  `Meu nome é ${nome}! `;
}

function verificaIdade(idade) {
   if(idade >= 18) {
      console.log(escreveNome('Amanda') + 'Sou maior de idade');
   } else {
      console.log(escreveNome('Amanda') + 'Sou menor de idade');
   } 
}

verificaIdade(17)