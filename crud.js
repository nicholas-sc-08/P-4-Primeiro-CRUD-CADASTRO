let slct_opcoes = document.getElementById(`slct_opcoes`);
let inpt_username = document.getElementById(`inpt_username`);
let dv_exibir_resultados = document.getElementById(`exibir_resultados`);
let armazenar_nome_de_usuario = [];
let username_existente;
let posicao_username;
let alterar_username;
let username;

function opcoes(){

    switch(slct_opcoes.value){
        case `1`:
            cadastrar();
            break;
        case `2`:
            editar();
            break;
        case `3`:
            excluir();
            break;
        default:
            listar();
            break;
    };
};

function cadastrar(){
    
    username_existente = armazenar_nome_de_usuario.includes(inpt_username.value);

    if(inpt_username.value != "" && username_existente == false){
        
        username = inpt_username.value;
        armazenar_nome_de_usuario.push(username);
        alert(`Usuário cadastrado!`);
        localStorage.setItem(`Nome de usuário:`, armazenar_nome_de_usuario);
        dv_exibir_resultados.innerHTML = ``;
    } else{
        alert(`Nome de usuário já existente ou inválido!`);
    };
};

function editar(){

    username_existente = armazenar_nome_de_usuario.includes(inpt_username.value);
    
    if(username_existente == true){

      alterar_username =  prompt(`Digite o novo nome de usuário:`);
        posicao_username = armazenar_nome_de_usuario.indexOf(inpt_username.value);
        armazenar_nome_de_usuario.splice(posicao_username, 1, alterar_username);
        localStorage.setItem(`Nome de usuário:`, armazenar_nome_de_usuario);
        dv_exibir_resultados.innerHTML = ``;

    } else {

        alert(`Usuário não existente!`);

    };
};

function excluir(){

    username_existente = armazenar_nome_de_usuario.includes(inpt_username.value);

    if(username_existente == true){

        posicao_username = armazenar_nome_de_usuario.indexOf(inpt_username.value);
        armazenar_nome_de_usuario.splice(posicao_username, 1);
        localStorage.setItem(`Nome de usuário:`, armazenar_nome_de_usuario);
        alert(`Usuário Excluido!`);
        dv_exibir_resultados.innerHTML = ``;

    } else {

        alert(`Usuário não existente!`);

    };
};

function listar(){

    if(armazenar_nome_de_usuario.length > 1){

        dv_exibir_resultados.innerHTML = armazenar_nome_de_usuario;
        inpt_username.value = ``;

    } else {

        alert(`Não há nenhum nome na lista!`);

    };
};
