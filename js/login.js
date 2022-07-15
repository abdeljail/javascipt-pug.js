/**
 * export the file authorization information
 */
import Auth from "./helpers/Class/Auth.c.js";
const auth = new Auth()
auth.redirect()

/**
 * export the files 
 */
import { selectById } from "./helpers/functions/selectElements/byId.m.js";
import { addClass, addClasses, checkClass_and_AddClass } from "./helpers/functions/classCss/addClass.m.js";
import { removeClass, removeClasses, checkClass_and_removeClass } from "./helpers/functions/classCss/removeClass.m.js";
import Login from "./helpers/Class/Login.c.js";

const email = selectById("l-email")
const password = selectById("l-password")
const send = selectById("l-send")
const closeAlert = selectById("alert-close")
const show = selectById("alert")
const contentAlert = show.querySelector(".body-alert")

let login = new Login("", "")

function focus() {

    if (!this.classList.contains("err-input"))
        return;

    removeClass({ el: this, nameClass: "err-input" });

}
const hiddenAlert = () => { removeClass({ el: show, nameClass: "show" }); contentAlert.innerHTML = "" }

function showAlert(response) {

    addClass({ el: show, nameClass: "show" })

    if (!response.hasOwnProperty("mes")) {
        contentAlert.innerHTML = `
            <div> error 500 !!! opps ): </div>
        `
        return;
    }

}

/**
*  this method is login user 
*/
async function loginUser() {

    if (login.notClickButton(this))
        return;

    login.Email = email.value
    login.Password = password.value

    const response = login.checkValid(this, addClasses)

    if (response instanceof Array) {

        if (response.includes("email"))
            addClass({ el: email, nameClass: "err-input" })

        if (response.includes("password"))
            addClass({ el: password, nameClass: "err-input" })

        return
    }

    await login.send(this, removeClasses, "login").then((response) => showAlert(response)).catch((err) => showAlert(err));
}

email.addEventListener("focus", focus);
password.addEventListener("focus", focus);
send.addEventListener("click", loginUser)
closeAlert.addEventListener("click", hiddenAlert);
