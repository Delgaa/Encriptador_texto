let $text = document.getElementById('text')
let $encript = document.getElementById('btn-encriptar')
let $desencript = document.getElementById('btn-desencriptar')
let $outputText = document.getElementById('outputText')
let $copy = document.getElementById('copy')

$encript.addEventListener('click', () => {
    const tiping = $text.value;
    if (tiping.length > 0) {
        document.getElementById('encript').style.display = 'flex';
        document.getElementById('result').style.display = 'none';
        const encript = encriptar(tiping);
        $outputText.innerText = encript;
    }
})

$desencript.addEventListener('click', () => {
    const tiping = $text.value;
    if (tiping.length > 0) {
        document.getElementById('encript').style.display = 'flex';
        document.getElementById('result').style.display = 'none';
        const desencript = desencriptar(tiping);
        $outputText.innerText = desencript;
    }
})

$copy.addEventListener('click', () => {
    const copyText = $outputText.innerText
    navigator.clipboard.writeText(copyText)
    alert("Copiado al portapapeles")
})

function encriptar(text) {
    let outputText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    return outputText
}

function desencriptar(text) {
    let outputText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return outputText
}

