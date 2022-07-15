
/**
 * this class is Auth for user authentication
 */
export default class Auth {

    #auth

    constructor() {
    }

    #checkAuth() {
        return localStorage.hasOwnProperty('c_user') ? this.#auth = true : this.#auth = false;
    }

    #index(url) {
        window.location.replace(url)
    }

    auth() {

        try {

            if (!this.#checkAuth())
                this.#index("http://127.0.0.1/app/pages/login.html");


        } catch (err) {
            throw this.#index("http://127.0.0.1/app/pages/test.html");
        }

    }

    redirect() {

        try {

            if (this.#checkAuth())
                this.#index('http://127.0.0.1/app/pages/home.html');


        } catch (err) {
            throw this.#index("http://127.0.0.1/app/pages/test.html");
        }

    }

    logOut() {

    }


}


