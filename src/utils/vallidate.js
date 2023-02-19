export function validateEmail(email) {
    // eslint-disable-next-line no-useless-escape
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let result = mailformat.test(email);
    return result;
}

export function validatePass(password) {
    let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let result = pattern.test(password);
    return result;
}

