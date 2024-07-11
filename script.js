// Função para validar entrada numérica e exibir mensagem de erro se necessário
function validarEntradaNumerica(valor, resultadoSpan) {
    if (isNaN(valor)) {
        exibirResultado('Por favor, insira um valor numérico válido.', resultadoSpan);
        return false;
    }
    return true;
}

// Função para calcular o IVA (Imposto sobre o Valor Adicionado)
function calcularIVA() {
    const totalInputIva = document.getElementById('total-inputIva');
    const resultadoSpan = document.getElementById('resultadoBsIva');

    const valor = parseFloat(totalInputIva.value);

    if (!validarEntradaNumerica(valor, resultadoSpan)) {
        return;
    }

    const resultado = valor / 19;
    resultadoSpan.innerText = `Base IVA: ${resultado.toFixed(2)}`;

    setTimeout(() => {
        resultadoSpan.innerText = '';
        const inputs = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
        exibirResultado('', resultadoSpan);
    }, 50000);
}

// Função para calcular a Base Não Gravável
function calcularBaseNaoGravavel() {
    const totalInput = document.getElementById('total-input');
    const brutoInput = document.getElementById('bruto-input');
    const resultadoSpan = document.getElementById('resultadoNGrav');

    const total = parseFloat(totalInput.value);
    const bruto = parseFloat(brutoInput.value);

    if (!validarEntradaNumerica(total, resultadoSpan) || !validarEntradaNumerica(bruto, resultadoSpan)) {
        return;
    }

    const resultado = total - bruto;
    resultadoSpan.innerText = `Base no gravable:  ${resultado.toFixed(2)}`;

    setTimeout(() => {
        resultadoSpan.innerText = '';
        const inputs = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
        exibirResultado('', resultadoSpan);
    }, 50000);
}

// Função para calcular a Base Impo-Consumo
function calcularImpoConsumo() {
    const valorImpoInput = document.getElementById('valorImpo');
    const resultadoSpan = document.getElementById('resultadoImpo');

    const valorImpo = parseFloat(valorImpoInput.value);

    if (!validarEntradaNumerica(valorImpo, resultadoSpan)) {
        return;
    }

    const resultado = valorImpo / 8;
    resultadoSpan.innerText = `Base Impo-Consumo:  ${resultado.toFixed(2)}`;

    setTimeout(() => {
        resultadoSpan.innerText = '';
        const inputs = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
        exibirResultado('', resultadoSpan);
    }, 50000);
}

// Função para calcular a Base AIU
function calcularAiu() {
    const aiuInput = document.getElementById('valorAiu');
    const subtotalAiu = document.getElementById('subAiu');
    const resultadoSpan = document.getElementById('resultadoAiu');

    const aiu = parseFloat(aiuInput.value);
    const subTotal = parseFloat(subtotalAiu.value);

    if (!validarEntradaNumerica(aiu, resultadoSpan) || !validarEntradaNumerica(subTotal, resultadoSpan)) {
        return;
    }

    const resultadoAiu = aiu / 19;
    const resultadoSub = resultadoAiu - subTotal;

    resultadoSpan.innerText = `Base AIU:  ${resultadoAiu.toFixed(2)} | Base no gravable:  ${resultadoSub.toFixed(2)}`;

    setTimeout(() => {
        resultadoSpan.innerText = '';
        const inputs = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
        exibirResultado('', resultadoSpan);
    }, 50000);
}

// Função para exibir resultados na página
function exibirResultado(mensagem, resultadoSpan, isError = false) {
    const outputElement = document.getElementById("output");
    outputElement.innerText = mensagem;
    outputElement.className = isError ? 'erro' : 'sucesso';

    setTimeout(() => {
        outputElement.innerText = '';
        outputElement.className = '';
    }, 3000);
}


// Função para alternar entre os modos escuro e claro
function alternarModoEscuro() {
    const body = document.body;
    const modoEscuroAtivo = body.classList.toggle('modo-escuro');

    // Altera dinamicamente a imagem do ícone com base no modo escuro
    let moonIcon = document.getElementById('moonIcon');

    //caso queira fazer alteração do icone posteriormente.
    if (moonIcon) {
        if (modoEscuroAtivo) {
            moonIcon.src = 'https://img.icons8.com/sf-regular-filled/48/moon-symbol.png';
        } else {
            moonIcon.src = 'https://img.icons8.com/sf-regular-filled/48/moon-symbol.png';

        }
    }

    // Salvar a preferência do usuário no localStorage (opcional)
    localStorage.setItem('modoEscuro', modoEscuroAtivo);

    // Remova ou ajuste o setTimeout conforme necessário
    //setTimeout(() => {}, 0); // Alterado o tempo para 0 para executar imediatamente
}

// Inclusão do script JavaScript
document.addEventListener("DOMContentLoaded", function() {
    let docTitle = document.title;
    window.addEventListener("blur", () => {
        document.title = "CO - Calculadora";
    })
    window.addEventListener("focus", () => {
        document.title = docTitle;
    })
});