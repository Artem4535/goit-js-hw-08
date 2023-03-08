import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
let inputRef = document.querySelector('.feedback-form');
let textareaRef = document.querySelector('.feedback-form');

formRef.addEventListener('input', throttle(inputValue, 500));
formRef.addEventListener('submit', onButtonSubmitClick);

let formData = {}
initForm();
function inputValue(e) {
    e.preventDefault();
    formData[e.target.name] = e.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))
}

function initForm() {
    let objValues = localStorage.getItem("feedback-form-state")
    if (objValues) {
        objValues = JSON.parse(objValues);

        Object.entries(objValues).forEach(([name, value]) => {
            formData[name] = value;
            formRef.elements[name].value = value;
        }) 
    }
}




function onButtonSubmitClick(e) {
    e.preventDefault()
    console.log(formData)
    e.target.reset()
    localStorage.clear("feedback-form-state")
    formData = {}
}
