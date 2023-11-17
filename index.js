function submitForm() {
    var senhaInput = document.getElementById('senha');
    var senha = senhaInput.value;
    var senhamd5 = "81dc9bdb52d04dc20036dbd8313ed055";
    var inputMD5 = hex_md5(senha)

    if (inputMD5 == senhamd5) {
        sessionStorage.setItem('auth', 'autorizado');
        window.location = "https://borsoni99.github.io/P2DevWeb/atletas/atletas.html";
    } else {
        alert("senha incorreta!");
    }
}


