/* Essa é a classe Piada, que representa a piada com o texto associado.
Ela tem um construtor que recebe o texto (a piada) e o método (contar()), que é responsável por imprimir a piada. O (this.texto) se refere à instância da classe, e o this.texto do construtor se refere ao atributo texto.
*/
class Piada {
    constructor(texto) {
        this.texto = texto;
    }

    contar() {
        console.log("%c " + this.texto, "color: blue; background: white; font-size: 14px; font-weight: bold;");
    }
}

/* Essa é a classe abstrata, que representa o comediante.
Ela tem um construtor (inicializa os atributos de uma instância), que recebe um array de strings ou seja as piadas, e o método (contarPiada()), vai selecionar aleatoriamente uma piada do repertório para conta-lá.
Lembrando que por ser uma classe abstrata, não pode ser instanciada diretamente, pois serve como molde genérico (define comportamentos e propriedades comuns para as classes que irão herdá-la), e por consequência é estendida por subclasses que são as classes concretas.
*/
class Comediante {
    constructor(nome, piadasTextos) {
        this.nome = nome;
        this.piadas = piadasTextos.map(texto => new Piada(texto));
    }

    contarPiada() {
        const piadaIndex = Math.floor(Math.random() * this.piadas.length);
        this.piadas[piadaIndex].contar();
    }
}

/* Essa é a subclasse do Comediante, que representa o Stand-Up Comedian. É uma subclasse pois herda da classe Comediante e passa seu nome e repertório de piadas para o construtor da classe pai (Comediante). Aqui o super() é usado para chamar o construtor da classe pai (Comediante).
*/
class StandUpComedian extends Comediante {
    constructor(nome, piadasTextos) {
        super(nome, piadasTextos);
    }
}

/* Essa também é uma subclasse do Comediante, e representa o ComedianteDePalco. Também passa seu nome e repertório de piadas para o construtor da classe pai (Comediante).
*/
class ComedianteDePalco extends Comediante {
    constructor(nome, piadasTextos) {
        super(nome, piadasTextos);
    }
}

/* Essa é a classe plateia, assim como o nome já diz, ela representa a audiência. O construtor recebe a instância comediante. O método interagirComComediante(), imprime a mensagem indicando que a plateia está assistindo e chama o contarPiada() do comediante.
*/
class Plateia {
    constructor(comediante) {
        this.comediante = comediante;
    }

    interagirComComediante() {
        console.log("%c A plateia está assistindo: " + this.comediante.nome, "color: yellow; background: black; font-size: 14px;");
        this.comediante.contarPiada();
    }
}

// Aqui são criadas as instâncias, com piadas divergentes, para cada tipo de comediante.
const standUpComedian = new StandUpComedian("Comediante 1", [
    "Estou tão pobre que até meus pecados, vou ter que parcelar.",
    "Se vizinho fosse bom não teriam inventado o muro.",
    "Acho que sou um pneu, quanto mais eu trabalho mais liso eu fico",
    "Quando era criança tinha medo do escuro... Agora vejo a conta de energia e tenho medo da luz.",
    "Se a vida anda difícil, imagina ela correndo."
]);

const comedianteDePalco = new ComedianteDePalco("Comediante 2", [
    "Hoje estou tranbalhando de forma culposa. Quando não há intenção de trabalhar.",
    "Quanto mais eu me escondo dos problemas mais eles me acham.",
    "Homens paguem o lanche para as mulheres! A última vez que uma mulher alimentou um homem nós fomos expulsos do jardim do Éden.",
    "Imagina se o pastor descobre que suas ovelhas estão enviando fotos sem lã."
]);

/* Aqui são criadas outras instâncias da Plateia, para cada um dos comediantes.
O método interagirComComediante(), faz com que a plateia assista ao comediante correspondente e assim a piada é contada de forma aleatória. */
const plateiaComStandUpComedian = new Plateia(standUpComedian);
plateiaComStandUpComedian.interagirComComediante();

const plateiaComComedianteDePalco = new Plateia(comedianteDePalco);
plateiaComComedianteDePalco.interagirComComediante();