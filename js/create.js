
/**
 * export the files 
 */
import { selectById } from "./helpers/functions/selectElements/byId.m.js";
import { addClass, addClasses } from "./helpers/functions/classCss/addClass.m.js";
import { removeClass, removeClasses } from "./helpers/functions/classCss/removeClass.m.js";
import { hasClass, hasClasses } from "./helpers/functions/classCss/hasClass.m.js";
import Create from "./helpers/Class/Create.c.js";

const name = selectById("l-name")
const phone = selectById("l-phone")
const email = selectById("l-email")
const password = selectById("l-password")
const send = selectById("l-send")
const closeAlert = selectById("alert-close")
const show = selectById("alert")
const contentAlert = show.querySelector(".body-alert")
let create = new Create("", "", "", "")

console.log(hasClasses({element: name , nameClassArray:["input"]}))

function focus() {

    if (!hasClass({ element: this, nameClass: "err-input" }))
        return;

    removeClass({ el: this, nameClass: "err-input" });

}

const hiddenAlert = () => { removeClass({ el: show, nameClass: "show" }); contentAlert.innerHTML = "" }

function showAlert(response) {
    addClass({ el: show, nameClass: "show" })
    if (response.hasOwnProperty("exp")) {
        contentAlert.innerHTML = `
            <div> error 500 ): !!! oops ): </div>
        `
        return;
    }
    if (response.hasOwnProperty("create")) {
        if (!response.create && typeof response.create === "boolean")
            contentAlert.innerHTML = `
                        <div> this account is already created</div>
                    `
        else {
            localStorage.setItem("c_user", response.create);
            localStorage.setItem("name", create.Name);
            localStorage.setItem("email", create.Email);
            localStorage.setItem("img", null);
            auth.redirect()
        }
        return;
    }
    if (response.hasOwnProperty("error")) {
        console.log(response.error)
        return;
    }

}

/**
*  this method is login user 
*/
async function createUser() {

    if (create.notClickButton(this))
        return;

    create.Email = email.value
    create.Password = password.value
    create.Name = name.value
    create.Phone = phone.value

    const response = create.checkValid(this, addClasses, false)

    if (response instanceof Array) {

        if (response.includes("email"))
            addClass({ el: email, nameClass: "err-input" })

        if (response.includes("password"))
            addClass({ el: password, nameClass: "err-input" })

        if (response.includes("name"))
            addClass({ el: name, nameClass: "err-input" })

        if (response.includes("phone"))
            addClass({ el: phone, nameClass: "err-input" })

        return

        return response.forEach(element => addClass({ el: selectById(`l-${element}`), nameClass: "err-input" }));

    }

    await create.send(this, removeClasses, "create").then((response) => showAlert(response)).catch((err) => showAlert(err));


}

email.addEventListener("focus", focus);
password.addEventListener("focus", focus);
name.addEventListener("focus", focus);
phone.addEventListener("focus", focus);
send.addEventListener("click", createUser)
closeAlert.addEventListener("click", hiddenAlert);

