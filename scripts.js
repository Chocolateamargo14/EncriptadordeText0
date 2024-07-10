function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;
    updateOutputContainer();
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decryptedText;
    updateOutputContainer();
}

function copyText() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

function updateOutputContainer() {
    let outputContainer = document.querySelector('.output-container');
    let outputText = document.getElementById('outputText').value;

    if (outputText === '') {
        outputContainer.innerHTML = `
            <img src="image.png" alt="No message found">
            <p>Ningún mensaje fue encontrado</p>
            <p>Ingresa el texto que desees encriptar o desencriptar.</p>
        `;
    } else {
        outputContainer.innerHTML = '';
    }
}
