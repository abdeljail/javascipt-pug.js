
/**
 * export the files 
 */



import Login from "./Login.c.js"


/**
 * class in Create Account User
 * 
 */

export default class Create extends Login {
    #name;
    #phone;

    constructor(name, phone, email, password, errors = []) {
        super(email, password, errors)
        this.#name = name;
        this.#phone = phone;
    }

    get Name() {
        return this.#name;
    }

    set Name(newName) {
        this.#name = newName;
    }

    get Phone() {
        return this.#phone;
    }

    set Phone(newPhone) {
        this.#phone = newPhone;
    }

}






