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

    if(inpt_username.value != ""){
        
        username = inpt_username.value;
        armazenar_nome_de_usuario.push(username);
        console.log(armazenar_nome_de_usuario);
        alert(`Usuário cadastrado!`);
        dv_exibir_resultados.innerHTML = ``;
    } else{
        alert(`Favor digitar um nome!`);
    };
};

function editar(){

    username_existente = armazenar_nome_de_usuario.includes(inpt_username.value);
    
    if(username_existente == true){

      alterar_username =  prompt(`Digite o novo nome de usuário:`);
        posicao_username = armazenar_nome_de_usuario.indexOf(inpt_username.value);
        armazenar_nome_de_usuario.splice(posicao_username, 1, alterar_username);
        console.log(armazenar_nome_de_usuario);
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
        alert(`Usuário Excluido!`);
        console.log(armazenar_nome_de_usuario);
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