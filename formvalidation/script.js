const form = document.getElementById('validation-form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const successMessage = document.getElementById('success-message');

const showError = (input, message) => {
  const errorElement = document.getElementById(`${input.id}-error`);
    errorElement.textContent = message;
    input.style.borderColor = 'red';
};

const clearError = (input) => {
    const errorElement = document.getElementById(`${input.id}-error`);
    errorElement.textContent = '';
  input.style.borderColor = 'green';
};

const validateEmail = () => {
    if (email.validity.valueMissing) {
        showError(email, 'Email is required.');
    } else if(!email.validity.valid) {
    showError(email, 'Please enter a valid email address.');
    clearError(email);
  }
}

const validateCountry = () => {
    if (country.value.trim() === '') {
        showError(country, 'Country is required.');
    } else {
        clearError(country);
};

const validateZip = () => {
    const zipPattern = /^\d{5}$/; // Adjust this pattern based on your country
    if (!zipPattern.test(zip.value)) {
        showError(zip, 'Please enter a valid zip code.');
    } else {
        clearError(zip);
    }
};

const validatePassword = () => {
    if (password.value.length < 8) {
        showError(password, 'Password must be at least 8 characters long.');
    } else {
        clearError(password);
    }
};

const validateConfirmPassword = () => {
    if (confirmPassword.value !== password.value) {
        showError(confirmPassword, 'Passwords do not match.');
    } else {
        clearError(confirmPassword);
    }
};

form.addEventListener('input', (event) => {
    switch (event.target.id) {
        case 'email':
            validateEmail();
            break;
        case 'country':
            validateCountry();
            break;
        case 'zip':
            validateZip();
            break;
        case 'password':
            validatePassword();
            break;
        case 'confirm-password':
            validateConfirmPassword();
            break;
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateEmail();
    validateCountry();
    validateZip();
    validatePassword();
    validateConfirmPassword();

    if (document.querySelectorAll('.error:empty').length === 5) {
        successMessage.hidden = false;
    } else {
        successMessage.hidden = true;
    }
});
