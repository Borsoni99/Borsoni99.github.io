const foto = document.getElementById('foto');
const nome = document.getElementById('nome');
const descricao = document.getElementById('descricao');
const nascimento = document.getElementById('nascimento');
const altura = document.getElementById('altura');
const posicao = document.getElementById('posicao');
const btnVoltar = document.getElementById('btnVoltar');

btnVoltar.onclick = () => window.location = '/atletas/atletas.html';

const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

const obterDadosEPopular = async () => {
    const parametros = new URLSearchParams(window.location.search);
    const url = "https://botafogo-atletas.mange.li/" + parametros.get('id');

    const atleta = await pegar_coisas(url);

    if (atleta.descricao !== null && atleta.descricao !== undefined) {
        descricao.innerHTML = atleta.descricao;
    } else {
        alert("Description não encontrada no localStorage.");
    }

    if (atleta.nome_completo !== null && atleta.nome_completo !== undefined) {
        nome.innerText = atleta.nome_completo;
    } else {
        alert("Name não encontrada no localStorage.");
    }

    if (atleta.posicao !== null && atleta.posicao !== undefined) {
        posicao.innerText = atleta.posicao;
    } else {
        alert("Name não encontrada no localStorage.");
    }

    if (atleta.nascimento !== null && atleta.nascimento !== undefined) {
        nascimento.innerText = `Data de Nascimento: ${atleta.nascimento}`;
    } else {
        alert("Nascimento não encontrada no localStorage.");
    }

    if (atleta.altura !== null && atleta.altura !== undefined) {
        altura.innerText = `Altura: ${atleta.altura}`;
    } else {
        alert("Altura não encontrada no localStorage.");
    }

    if (atleta.imagem !== null && atleta.imagem !== undefined) {
        foto.src = atleta.imagem;
    } else {
        alert("Image URL não encontrada no localStorage.");
    }
}

obterDadosEPopular();





