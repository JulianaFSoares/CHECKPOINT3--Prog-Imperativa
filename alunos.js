// Passo 1  (1,5 pontos):
function Aluno(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;

// Passo 2 (1,5 pontos):
    this.calcularMedia = function () {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma = soma + this.notas[i];

        }
        return soma / this.notas.length
    }

    this.faltasTotal = function () {
        return this.faltas++
      }
}

const aluno1 = new Aluno("Ana", 1, [1, 2, 4, 8]);
const aluno2 = new Aluno("Mcdonalds", 1, [8, 7, 7, 9]);
const aluno3 = new Aluno("Alice", 6, [8, 8, 8, 8]);
const aluno4 = new Aluno("Felipo", 1, [6, 5, 5, 8]);
const aluno5 = new Aluno("Guanabara", 0, [10, 10, 10, 10]);

console.log(aluno2.calcularMedia());
console.log(aluno5.faltasTotal());


// Passos 3 (1,5 pontos) 
let curso = {
    nomeDoCurso: 'CTD',
    notaAprovacao: 7,
    faltaMax: 3,
    estudantes: [aluno2, aluno3, aluno4]

}


//4 (1,5 pontos)
const addAluno = (nome, qtdFaltas, notas) => {
    const novoaluno = new aluno(nome,qtdFaltas,notas);
    curso.estudantes.push(novoaluno);
} 

addAluno('Cardoso',  0, [10, 7, 8, 9]);
addAluno('Valkilmer', 4, [2, 5, 4, 2, 2]);

console.log(curso);

//5 (2,0 pontos)

function aprov(aluno){
    let nota = aluno.media();
    let faltas = aluno.qtdFaltas;
    let aprovadofaltas = curso.notaAprovacao * 1.1;
  
    if(nota >= curso.notaAprovacao && faltas < curso.faltaMax){
      return true;
    } else if (faltas == curso.faltaMax && nota >= aprovadofaltas){
      return true;
    } else{
      return false
    }
  }

//6 (2,0 pontos)

  const fechamento = () => {

    let bool= [];
    for (const elemento of curso.estudantes) {
      bool.push(aprov(elemento));
    
    }
    console.log(bool);
   }
  
   fechamento();

//TURMA I 
//2º BIMESTRE
//PROFº LUCAS FEITOSA
/* ALUNOS:
Adam Conservani
Daniel Oliveira
Jennifer Plothow
Juliana Freire
*/
