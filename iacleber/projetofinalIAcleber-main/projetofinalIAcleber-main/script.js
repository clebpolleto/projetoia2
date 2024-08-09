const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é inteligência artificial?",
        alternativas: [
            {
                texto: "Uma forma de tecnologia que imita a inteligência humana.",
                afirmacao: "Sim pois no futuro a inteligência artifial pode tomarligar dos seres umanos. "
            },
            {
                texto: "Um tipo de software usado apenas em computadores superpoderosos.",
                afirmacao: "Não pois por que atualmente todos possui acesso a intelignêcia artifial e se encontra nos celulares."
            }
        ]
    },
    {
        enunciado: "Quais são algumas aplicações comuns de inteligência artificial?",
        alternativas: [
            {
                texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
                afirmacao: "Conseguiu utilizar a IA para buscar informações úteis."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios recursos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Qual é a diferença entre inteligência artificial fraca e forte?",
        alternativas: [
            {
                texto: "A inteligência artificial fraca se refere a sistemas que podem realizar tarefas específicas",
                afirmacao: "Sim pois executam tarefas mas simples."
            },
            {
                texto: " A inteligência artificial fraca é usada apenas em computadores pessoais, enquanto a forte é usada em supercomputadores.",
                afirmacao: "Na verdade não existe IA forte ou fraca apenas ussos diferentes."
            }
        ]
    },
    {
        enunciado: "Como os algoritmos de inteligência artificial aprendem?",
        alternativas: [
            {
                texto: "Através de tentativa e erro, ajustando pesos e conexões entre unidades neurais..",
                afirmacao: "Não pois a IA utiliza programaçoẽs e não tem como ela aprender com seus erros."
            },
            {
                texto: "Através de programação estática que  pode ou não ser alterada",
                afirmacao: "Sim pois a IA é apenas uma programação."
            }
        ]
    },
    {
        enunciado: "Quais são algumas preocupações éticas em torno da inteligência artificial?",
        alternativas: [
            {
                text: "Que a IA possibilita a automação de enpregos asim subistituindo as pessoas.",
                afirmacao:"Sim é possivel a automação de enpregos mas nem todos os enpregos são possiveis "
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();