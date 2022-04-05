
const formControls = document.querySelectorAll(".form__control");
const contactName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function submitForm(e){
    e.preventDefault();
    let hasError = "";
    for( let i = 0; i < formControls.length; i++) {
        hasError += validate(formControls[i]);
    }

    console.log(hasError);
}


const validate = (formControl) => {
    let errorMessage = "";
    if(!formControl.value) {
        formControl.classList.add("form__error");
        formControl.nextElementSibling.innerHTML = "This field is required"; 
        errorMessage += formControl.nextElementSibling.innerHTML         
    }
    else {
        formControl.classList.remove("form__error");
        formControl.classList.add("form__active");
        formControl.nextElementSibling.innerHTML = "";
        errorMessage += formControl.nextElementSibling.innerHTML
    }

  if(formControl.id === "email" && formControl.value){
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formControl.value)){
            formControl.classList.remove("form__error");
            formControl.classList.add("form__active");
            formControl.nextElementSibling.innerHTML = "";
            errorMessage += formControl.nextElementSibling.innerHTML
        } else {
            formControl.classList.add("form__error");
            formControl.nextElementSibling.innerHTML = "Please use a valid email address";
            errorMessage += formControl.nextElementSibling.innerHTML
        }     
  }
    
    return errorMessage;
}