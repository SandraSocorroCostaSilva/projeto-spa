 const Teste =document.getElementById('Teste') 
 Teste.addEventListener('submit',event=>{
    event.preventDefault()
    console.log('teste2')

})

const botaoEnviar = document.getElementById('form-botao')

function validarFormulario() {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');

    let isValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.classList.add('invalid');
            isValid = false;
        } else {
            input.classList.remove('invalid');
        }
    });

    return isValid;
}

botaoEnviar.addEventListener('click', enviarFormulario)

function enviarFormulario() {
    console.log('string teste')
    if (validarFormulario()) {
        enviarParaWhatsApp();
    }
}


function mascaraTelefone(telefone) {
    const texto = telefone.value;
    const textoApenasNumeros = texto.replace(/\D/g, '').substring(0, 11);

    let telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{5})(\d{4})/,'($1) $2-$3');

    if (textoApenasNumeros.length < 11) {
        telefoneFormatado = textoApenasNumeros.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    }

    telefone.value = telefoneFormatado;
}

const campoTelefone = document.getElementById('input-tel');
campoTelefone.addEventListener('input', function () {
    mascaraTelefone(this);
});

function enviarParaWhatsApp() {
    const nome = document.getElementById('form-nome').value;
    const email = document.getElementById('form-email').value;
    
    const mensagem = document.getElementById('form-mensagem').value;

    const texto = `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`;
    const textoCodificado = encodeURIComponent(texto);
    const numeroWhatsApp = '5581997214783'; 
    const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

    window.open(url, '_blank');
}