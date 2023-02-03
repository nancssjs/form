export default function ehMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value)
    /* se a função for falsa avisa o erro customValidity */
    if (!validaIdade(dataNascimento)) {
        campo.setCustomValidity('O usuário não é maior de idade');
    }
}

function validaIdade(data) {
    /* new date pega a data atual */
    const dataAtual = new Date()
    /* data recebida MAIS 18 anos */
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    /* retora boolean/se a data atual é maior ou não que a mais18 */
    return dataAtual >= dataMais18
}