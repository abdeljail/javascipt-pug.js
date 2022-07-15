/**
 * this function check class name is not empty
 */

const checkNameClass = name => name === null || name === undefined || name === "" ? false : true
const checkNameClassArray = name => Array.isArray(name) && name.length !== 0 ? true : false

/**
 * this function check class in element
 *  if element is has class return true
 *  else return false
 */
function hasClass({ element, nameClass }) {
    try {

        element.hasAttribute("element")

        if (!checkNameClass(nameClass)) throw new Error("this files is required")

        return element.classList.contains(nameClass)

    } catch (error) {
        throw new Error(error);
    }
}


/**
 * this function check multiple classes in element
 *  if element is not has classes return array of classes 
 *  else return true
 */
function hasClasses({ element, nameClassArray }) {
    try {

        element.hasAttribute("element")

        if (!checkNameClassArray(nameClassArray)) throw new Error("this files is required in array of classes")

        let notFounds = [];

        nameClassArray.forEach(cas => {

            if (!element.classList.contains(cas))
                notFounds.push(cas)

        })

        return Boolean(notFounds.length) ? notFounds  : true

    } catch (error) {
        throw new Error(error);
    }
}

export {
    hasClass,
    hasClasses
}

