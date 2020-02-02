const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const form = document.getElementById('form');

showSuccess = (input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
};

showError = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const error = formControl.querySelector('small');
    error.innerText = message;
};

checkRequired = (inputs) => {
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${input.getAttribute('fieldName')} is required.`);
        } else {
            showSuccess(input);
        }
    });
};

checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `${input.getAttribute('fieldName')} must be at least ${min} characters.`);
    } else if (input.value.length > max) {
        showError(input, `${input.getAttribute('fieldName')} must be less than ${max} characters.`);
    } else {
        showSuccess(input);
    }
};

CheckPasswordsMatch = (pass, confirmPass) => {
    if (pass.value !== confirmPass.value) {
        showError(confirmPass, 'Passwords do not match');
    }
}

isValidEmail = (input) => {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid.')
    }
};

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkRequired([username, email, password, confirmPassword]);
    checkLength(username, 3, 18);
    checkLength(password, 6);
    isValidEmail(email);
    CheckPasswordsMatch(password, confirmPassword);
});