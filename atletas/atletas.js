if (!sessionStorage.getItem('auth')){
    alert("Acesso não autorizado")
    window.location = '/P2DevWeb';
}

const url = "https://botafogo-atletas.mange.li";

const body = document.body;

// Criar o botão dropdown
const btnDropdown = document.createElement('button');
btnDropdown.innerHTML = "Opções";
btnDropdown.id = "btnDropdown";

const dropdownContent = document.createElement('div');
dropdownContent.className = "dropdown-content";

const dropdownOptions = ["Masculino", "Feminino", "Todos"];


dropdownOptions.forEach(option => {
    const btnOption = document.createElement('button');
    btnOption.innerHTML = option;
    btnOption.onclick = () => handleClickBtns(option.toLowerCase());
    dropdownContent.appendChild(btnOption);
});

btnDropdown.onclick = function() {
    dropdownContent.style.display = 'block';
};

// Criar o header
const headerContainer = document.createElement('div');
headerContainer.className = 'header-container'
const headerText = document.createElement('h1');
headerText.innerText = 'Atletas Botafogo 2023-2';

const btnSair = document.createElement('button');
btnSair.id = "btnSair"
btnSair.innerText = 'Sair';
btnSair.onclick = () => {
    sessionStorage.removeItem('auth');
    window.location = '/P2DevWeb';
};

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
document.body.appendChild(btnDropdown);
document.body.appendChild(dropdownContent);


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
    if (caminho == 'todos') {
        caminho = 'all';
    }
     document.body.innerHTML = '';
     document.body.appendChild(headerContainer);
     document.body.appendChild(divButtons);
     document.body.appendChild(btnDropdown);
     document.body.appendChild(dropdownContent);
     dropdownContent.style.display = 'none';
    pegar_coisas(`${url}/${caminho}`).then(
        (entrada) => {
            for (atleta of entrada) {
                preenche(atleta);
            }
        }
    );
};

const handleClickContainer = (atleta) => {
    window.location = `https://borsoni99.github.io/P2DevWeb/outros/atletaDescricao.html?id=${atleta.id}`;
};

const pegar_coisas = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}


