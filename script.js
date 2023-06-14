// Objetivo: pegar o número escolhido no input e gerar uma taboada
// Se o campo ficar vazio deve aparecer uma mensagem para que o usuário digite um número

// Na primeira parte da function, foram criadas variáveis para salvar o valor inserido no form e o local onde irá aparecer o resultado.
// Foi usado if para evitar que o usuário deixasse o campo em branco, mostrando um alert.
// No else foi convertido a string inserida no form, usando Number

function gerar() {
    let numberForm = document.querySelector('#numberForm');
    let res = document.querySelector('#contentResult')
    if(numberForm.value.length == 0) {
        alert('Por favor, informe um valor!')
    } else {
        // Abaixo, o valor inserido no formulário, que é uma string, será convertido em número
        let num = Number(numberForm.value);
        // O inner no res abaixo é obrigatório, pois caso contrário o resultado irá aparecer fora do select
        res.innerHTML = ''
        for (let i = 1; i <= 10; i++ ) {
            let result = i * num;
            res.innerHTML += `${i} x ${num} = ${result} <br>`
        }
    }
}

function reset() {
    let res = document.querySelector("#contentResult")
    res.innerHTML = 'Insira um número acima...'
}



