//Form Validation
let regForm=document.querySelector('#register-form');

regForm.addEventListener('submit',function(event){
    event.preventDefault(); //stops auto form submissions
    if(validateForm()){
        alert("Form submitted successfully"); //if submitted then backend logic instead of this
    }
    else{
        alert("Something went wrong");
    }
});

let validateForm = () =>{
    return(checkUsername() & checkEmail() & checkPassword() & checkConfirmPassword());
}


//check Username

let checkUsername = () =>{
    let inputEl= document.querySelector('#username');
    let feedbackEl=document.querySelector('#username-check');
    let regExp=/^[a-zA-Z0-9]{4,10}$/; //the expression can only have a-z, A-Z, 0-9 and can be min(4) max(10)
    if(regExp.test(inputEl.value)){
        makeValid(inputEl, feedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl,feedbackEl);
        return false;
    }
};

let checkEmail = () =>{
    let inputEl= document.querySelector('#email');
    let feedbackEl=document.querySelector('#email-check');
    let regExp=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     //copied from internet for email regEx check
    if(regExp.test(inputEl.value)){
        makeValid(inputEl, feedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl,feedbackEl);
        return false;
    }
};

let checkPassword = () =>{
    let inputEl= document.querySelector('#password');
    let feedbackEl=document.querySelector('#password-check');
    let regExp=/^[A-Za-z]\w{7,14}$/;
    //copied from internet for password regEx check
    if(regExp.test(inputEl.value)){
        makeValid(inputEl, feedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl,feedbackEl);
        return false;
    }
};
let checkConfirmPassword = () =>{
    let inputEl= document.querySelector('#c_password');
    let passEl =document.querySelector('#password');
    let feedbackEl=document.querySelector('#c_password-check');
    let regExp=/^[A-Za-z]\w{7,14}$/;
    //copied from internet for password regEx check
    if(regExp.test(inputEl.value) && (passEl.value===inputEl.value)){
        makeValid(inputEl, feedbackEl);
        return true;
    }
    else{
        makeInvalid(inputEl,feedbackEl);
        return false;
    }
};
let makeValid = (input,feedback) =>{
    input.classList.add('is-form-valid');
    input.classList.remove('is-form-invalid');
    feedback.classList.add('text-success');
    feedback.classList.remove('text-fail');
    feedback.innerText='Nice';
};

let makeInvalid = (input,feedback) =>{
    input.classList.remove('is-form-valid');
    input.classList.add('is-form-invalid');
    feedback.classList.remove('text-success');
    feedback.classList.add('text-fail');
    feedback.innerText='Not Nice';
};

let inputUsername=document.querySelector('#username');
inputUsername.addEventListener('keyup',checkUsername);

let inputEmail=document.querySelector('#email');
inputEmail.addEventListener('keyup',checkEmail);

let inputPass = document.querySelector('#password');
inputPass.addEventListener('keyup',checkPassword);

let inputCpass = document.querySelector('#c_password');
inputCpass.addEventListener('keyup',checkConfirmPassword);

//for making password visible
let showPasword = document.querySelector('#passCheckbox');
showPasword.addEventListener('click',function(){
    if(inputPass.getAttribute("type")==="password"){
        inputPass.setAttribute("type","text");
        inputCpass.setAttribute("type","text");
    }
    else{
        inputPass.setAttribute("type","password");
        inputCpass.setAttribute("type","password");
    }
});
