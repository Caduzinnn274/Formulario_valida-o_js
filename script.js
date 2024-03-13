const form= document.getElementById("form");
const nameInput= document.querySelector("#name");
const cpfInput= document.querySelector("#cpf");
const emailInput= document.querySelector("#email");
const passwordInput= document.querySelector("#password");
const jobSelect= document.querySelector("#job");
const messageTextArea= document.querySelector("#message");

form.addEventListener("submit", (event)=>{
   // console.log(nameInput, cpfInput, emailInput);
   event.preventDefault();

   if(nameInput.value===""){
    alert("Por favor preencha seu nome");
    return;
   }

   if(cpfInput.value===""){
    alert("Por favor preencha seu CPF");
    return;
   }

   if(emailInput.value===""||!isEmailValid(emailInput.value)){
    alert("Por favor preencha seu email");
    return;
   }
   
   if(!validatePassword(passwordInput.value,8)){
    alert("Por favor preencha sua senha");
    return;
   }

   if(jobSelect.value===""){
    alert("Por favor selecione uma opição");
    return;
   }

   if(messageTextArea.value===""){
    alert("Por favor escreva uma mensagem");
    return;
   }

   form.onsubmit()
});

function iEmailValid(email){
    //padrão de email
    //usuario12@servico.com
    const emailRegex= new RegExp(
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2,0}/
    );
    if(emailRegex.test(email)){
        return true;
    }
    return false
}

function validatePassword(password,minDigits){
    if(password.leght >=minDigits){
        return true;
    }
    return false;
}

function isCpfValid(cpf){
    const cpfRegex = new RegExp(
        //xxx.xxx.xxx-xx
       /^([0-9]){3}\.([0-9]){3}\.-([0-9]){3}-([0-9]){2}$/
    );
    if(cpfRegex.test(cpf)){
        return true;
    }
    return false;
    
} 