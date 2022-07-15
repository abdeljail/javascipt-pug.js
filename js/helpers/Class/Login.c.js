
/**
 * export the files 
 */

import { email, fullName, phone, password } from "../functions/inputs/inputs.m.js"

/**
 * class in login User
 * 
 */

export default class Login {

    #email;
    #password;
    #url;
    #errors = [];

    constructor(email, password, url) {
        this.#email = email;
        this.#password = password;
        this.#url = url
    }

    get Email() {
        return this.#email;
    }

    set Email(newEmail) {
        this.#email = newEmail;
    }

    get Password() {
        return this.#password;
    }

    set Password(newPassword) {
        this.#password = newPassword;
    }


    /**
    * this method is check attribute disabled and class 
    * @params btn for check the attributes disabled and classes
    */


    notClickButton(btn) {
        if ((!btn.hasAttribute("disabled") && btn.classList.contains("button-spiner")))
            window.location.reload()
        if (btn.classList.contains("button-spiner"))
            return true;

        return false;
    }


    /**
    * this method is validates the password field and the email field 
    *  returns true if the password is valid and email is valid
    *  else returns array of errors [ "email" , "password"]
    * @params btn for validates [email , password ] 
    * @params fun for add classList type of Array in element btn for loading data 
    */

    checkValid(btn, fun, send = true) {

        if (this.#errors.length !== 0)
            this.#errors = []

        if (!email(this.#email))
            this.#errors.push("email")

        if (!password(this.#password))
            this.#errors.push("password")

        if (!send) {
            if (!fullName(this.Name))
                this.#errors.push("name")
            if (!phone(this.Phone))
                this.#errors.push("phone")
        }

        if (this.#errors.length !== 0)
            return this.#errors;

        fun({ el: btn, nameClassArray: ["b-c", "button-spiner"] })
        btn.setAttribute("disabled", "disabled")

        return true;

    }

    /**
     * this method is called when the user click  to check login status in back end
     * @params btn for send data [email , password ] 
     * @params fun for remove classList type of Array  in element btn for loading data
     */

    async send(btn, fun, type) {

        this.#url = type === "login" ? "http://localhost/app/backEnd/login" : "http://localhost/app/backEnd/create"

        const fd = new FormData();

        if (type !== "login") {
            fd.append("fullname", this.Name)
            fd.append("phone", this.Phone)
        }

        fd.append("email", this.Email)
        fd.append("password", this.Password)

        return await fetch(this.#url, { method: "POST", body: fd }).then(response => response.json()).finally(() => {
            fun({ el: btn, nameClassArray: ["b-c", "button-spiner"] })
            btn.removeAttribute("disabled")
        })

    }

}






