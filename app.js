

//TODOS os elementos que existem no html, voce pode usar innerHTML, classlist,
// querySelector e etc...
//PARA LEMBRAR, se eu utilizo a palavra return em uma função, nada abaixo irá funcionar,
//ela ira parar ali e retornar o valor
const form = document.querySelector('#form');
// Capturar evento de submit do formulário, 'e' de 'event'

form.addEventListener('submit', function (e) {
    e.preventDefault();
    //para pegar o elemento do HTML podemos pegar com o query selector
    //que vai funcionar igual, porém também podemos utilizar o e.target
    //pois onde estaremos digitando é o target que queremos estar pegando
    //então da na mesma, porém esse modo é mais utilizado
    const weightInput = e.target.querySelector('#weight');
    const heightInput = e.target.querySelector('#height');

    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);

    //se weight não for real retorna erro, e para no return
    if (!weight) {
        //aqui estamos trazendo o set resultado,  como mensagem o peso invalido
        // e como valor do parametro is valid , o boolean false
        setResultado('Peso inválido', false);
        return;
    }

    if (!height) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getIMC(weight, height);
    const imcStats = getImcStats(imc);

    const msg = `Seu IMC é ${imc} (${imcStats})`

    setResultado(msg, true);

});

//IMPORTANTE- O ideal a se fazer é criar uma função para cada coisinha que for feita

//uma função que a especialidade dela é simplesmente colocar o HTML dentro da div resultado no HTML

function getImcStats(imc) {
    const stats = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    //não precisa de else if, pois a função ja vai parar com o return
    // se só tiver uma linha pode ser feito assim, para poupar código
    if (imc >= 39.9) return stats[5];
    if (imc >= 34.9) return stats[4];
    if (imc >= 29.9) return stats[3];
    if (imc >= 24.9) return stats[2];
    if (imc >= 18.5) return stats[1];
    if (imc < 18.5) return stats[0];

}

function getIMC(weight, height) {

    const imc = weight / height ** 2;
    return imc.toFixed(2);
}

function criaP() {
    //criando o elemento p
    const p = document.createElement('p');
    return p;
}

//parametro msg para colocar a mensagem no resultado, e parametro da msg de erro
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    //insere um filho 'p' nessa div resultado
    const p = criaP();

    if(isValid) {
        p.classList.add('pOkay')
        } else {
            p.classList.add('pWarning')
        }

    p.innerHTML = msg;
    resultado.appendChild(p);

}
document.querySelector('#clear').addEventListener('click', clearResult());

function clearResult(){
const resultado = document.querySelector('#resultado');
resultado.innerHTML = "";
}