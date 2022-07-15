/**
 * export the files 
 */

 import {hasClass} from "./hasClass.m.js";

/**
 * this function check class name is not empty
 */

const checkNameClass = name => name === null || name === undefined || name === "" ? false : true

/**
 * this function add class 
 */
function addClass({ el = "", nameClass }) {
    if (!checkNameClass(nameClass)) throw new Error("this files is required")
    const element = el === "" ? this : el
    element.classList.add(nameClass)
}


/**
 * this function for add class in box element
 */
function addClasses({ el = "", nameClassArray }) {
    if (!Array.isArray(nameClassArray)) return new Error("this files is required type in array")
    const element = el === "" ? this : el
    element.classList.add(...nameClassArray)
}


/**
 * this function check has class in element
 *  if true return flase  =>  this element is has class 
 *  else add class and return true
 */

function checkClass_and_AddClass({ el = "", nameClass }) {

    if (!checkNameClass(nameClass)) return new Error("this files is required")

    const element = el === "" ? this : el

    if (hasClass({ element, nameClass }))
        return;

    addClass({ el: element, nameClass })

}

export {
    addClass,
    addClasses,
    checkClass_and_AddClass
}

