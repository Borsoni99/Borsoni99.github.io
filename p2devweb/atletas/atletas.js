const url = "https://botafogo-atletas.mange.li";

const body = document.body;

// Criar o header
const headerContainer = document.createElement('div');
headerContainer.className = 'header-container'
const headerText = document.createElement('h1');
headerText.innerText = 'Atletas Botafogo 2023-2';

const btnSair = document.createElement('button');
btnSair.id = "btnSair"
btnSair.innerText = 'Sair';
btnSair.onclick = () => window.location = '/index.html'; 

headerContainer.appendChild(headerText);
headerContainer.appendChild(btnSair);
document.body.appendChild(headerContainer);

// Criar div para conter o botão
const divButtons = document.createElement('div');
divButtons.id = "divButtons"

// Criar o botão masculino
const btnMasculino = document.createElement('button');
btnMasculino.innerHTML = "Masculino";
btnMasculino.onclick = () => handleClickBtns("masculino");

// Criar o botão Feminino
const btnFeminino = document.createElement('button');
btnFeminino.innerHTML = "Feminino";
btnFeminino.onclick = () => handleClickBtns("feminino");

// Criar o botão Todos
const btnTodos = document.createElement('button');
btnTodos.innerHTML = "Todos";
btnTodos.onclick = () => handleClickBtns("all");

divButtons.appendChild(btnMasculino);
divButtons.appendChild(btnFeminino);
divButtons.appendChild(btnTodos);
document.body.appendChild(divButtons);



const preenche = (atleta) => {
    const container = document.createElement('article');
    const titulo = document.createElement('h3');
    const imagem = document.createElement('img');
    const saibaMais = document.createElement('p');

    container.dataset.id = atleta.id;
    container.dataset.altura = atleta.altura;
    container.dataset.nome_completo = atleta.nome_completo;
    container.dataset.nascimento = atleta.nascimento;

    titulo.innerText = atleta.nome;
    imagem.src = atleta.imagem;
    imagem.alt = `Imagem de ${atleta.nome}`;
    saibaMais.innerHTML = "Saiba Mais";

    container.appendChild(titulo);
    container.appendChild(imagem);
    container.appendChild(saibaMais);

    container.onclick = () => handleClickContainer(atleta);

    document.body.appendChild(container);
};

const handleClickBtns = (caminho) => {
     document.body.innerHTML = '';
     document.body.appendChild(headerContainer);
     document.body.appendChild(divButtons);

    pegar_coisas(`${url}/${caminho}`).then(
        (entrada) => {
            for (atleta of entrada) {
                preenche(atleta);
            }
        }
    );
};

const handleClickContainer = (atleta) => {
    window.location = `/outros/atletaDescricao.html?id=${atleta.id}`;
};

const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}

const acha_cookie = (chave) => {
    const lista_de_cookies = document.cookie.split("; ");
    const procurado = lista_de_cookies.find(
        (e) => e.startsWith(chave));
    return procurado.split("=")[1];
}
