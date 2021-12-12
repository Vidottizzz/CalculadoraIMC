
(function () {

    const form = document.querySelector('.form');


    function recebeEventoForm(event) {
        event.preventDefault();

        const data = [];

        let weight = form.querySelector('#weight');
        let height = form.querySelector('#height');
        let result = document.querySelector('#result');

        data.push({
            weight: weight.value,
            height: height.value
        });
        let imc = (weight.value / (height.value * height.value)).toFixed(1)
        console.log(data);

    result.innerHTML = `Seu IMC é: <strong>${imc}</strong>`;
    
    };



    //É calculado dividindo o peso (em kg) pela altura ao quadrado (em metros).

    


    form.addEventListener('submit', recebeEventoForm);
})();



