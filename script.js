function Encriptar(){
    const encriptar = document.getElementById('input-texto').value;
    const encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.getElementById("msg").value = encriptado
    document.getElementById("input-texto").value=" ";
}


function Desencriptar(){
    const desencriptar= document.getElementById ("input-texto").value;
    const desencriptado= desencriptar.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById("msg").value = desencriptado
    document.getElementById("input-texto").value=" ";
}

function Copiar(){
    const copyText = document.getElementById("msg");
    copyText.select();
    document.execCommand("Copy");
    document.getElementById("msg").value=" ";
}