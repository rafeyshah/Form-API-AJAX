function validateEmail(email) {

    return email.length <= 50 && /[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

function validatePhone(phone) {
    return /^[0]+[3]+[0-9]{9}$/.test(phone);
}

function validatePassword(password) {
    return /^[A-Za-z0-9]{1,50}$/.test(password);
}
function validateName(name) {
    return /^[a-zA-Z\s]{1,50}$/.test(name);
}

function validateCity(city) {
    return /^[a-zA-Z\s]{1,50}$/.test(city);
}

function validateNo(no) {
    return /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/.test(no);
}

function matchPassword(pass, con) {
    return pass == con;
}