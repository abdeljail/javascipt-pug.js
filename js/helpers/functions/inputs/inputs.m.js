const string = (value) => {
    return value
}


const fullName = (value) => {

    if (value === "")
        return false

    if (value === null)
        return false

    if (value === undefined)
        return false

    if (typeof value !== "string")
        return false

    value = value.trim()
    
    const regexp = RegExp('(^[A-Za-z]{3,16}) ([ ]{0,1})([A-Za-z]{3,16})', 'g');

    if (regexp.exec(value) === null)
        return false

    return true
}


const phone = (value) => {

    if (value === "")
        return false

    if (value === null)
        return false

    if (value === undefined)
        return false

    if (typeof value !== "string")
        return false

    const regexp = RegExp('[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}', 'g')
    if (regexp.exec(value) === null)
        return false

    return true



}



const email = (email) => {
    if (email === "")
        return false

    if (email === null)
        return false

    if (email === undefined)
        return false

    if (typeof email !== "string")
        return false

    const checkEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return checkEmail.test(String(email).toLowerCase());
}

const password = (password) => {

    if (password === "")
        return false

    if (password === null)
        return false

    if (password === undefined)
        return false

    if (typeof password !== "string")
        return false

    return true;


}


const number = () => {

    console.log(number)

}

const file = () => {

    console.log(file)

}






export {
    string,
    fullName,
    phone,
    email,
    password,
    number,
    file
}