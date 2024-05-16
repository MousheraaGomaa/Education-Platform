const validateEmail = (email) => {
    let messageError = ''
    email = email.trim();
    if (email) {
        let emailRegex = /^\w+(\.\w+)+@[a-zA-Z_]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            messageError = 'Email is Invalid'
        }
    }
    else {
        messageError = 'Email is required'
    }

    return messageError;
}
const validatePassword = (password) => {
    let messageError = ''
    password = password?.trim()
    if (password) {
        if (password.length >= 8 && password.length <= 12) {
            let passwordRegex = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            if (!passwordRegex.test(password)) {
                messageError = 'Must contain an uppercase letter, number, special character'
            }
        }
        else {
            messageError = 'Password must be 8 to 12 characters long'
        }
    }
    else {
        messageError = 'The password is required';
    }

    return messageError;
}
const validateUsername = (username) => {
    let messageError = ''
    username = username?.trim();
    if (username) {
        if (username.length < 3) {
            messageError = 'The username must be more than three letters';
        }
    }
    else {
        messageError = 'The username is required';
    }

    return messageError;
}

export { validateEmail, validatePassword, validateUsername}