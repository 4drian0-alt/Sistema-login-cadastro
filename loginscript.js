function verificar(){
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    if(email === ""){
        console.log("Digite um email valido!");
        alert("Digite um email valido!");
    } else if( senha === ""){
        console.log("Digite uma senha valida!");
        alert("Digite uma senha!");
    }else{
        console.log(" login com sucesso");
    }
}
function cadastra(){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    if(nome === ""){
        console.log("Digite um nome valido!");
        alert("Digite um nome valido!");
    }else if(email === ""){
        console.log("Digite um email valido!");
        alert("Digite um email valido!");
    }else if( senha === ""){
        console.log("Digite uma senha valida!");
        alert("Digite uma senha!");
    }else{
        console.log("Cadastro feito com sucesso");
    }
return 0;
}