
/**
 *  this method is  when the Element is add event listener  Focus
 *  element required element to listener Focus
 *  fun required function for excute on Focus
 */

function focusElement({ element, fun }) {

    try {

        if (!element.localName) throw "required  tag name for element"

        if (!(typeof fun === "function")) throw "required in type function  "

        if (!fun.name) throw "required in name function and function is found"

        element.addEventListener("focus", fun);

    } catch (error) {
        throw new Error(error)
    }



}


/**
 *  this method is  when the Element is add event listener  Focus
 *  element required element to listener Focus
 *  fun required multiple function for excute on click in array 
 */


function focusElementFunctions({ element, functions }) {

    try {

        if (!element.localName) throw "required  tag name for element"

        if (!(functions instanceof Array)) throw "required in type array for functions"

        if (!functions.length) throw "required count in array > 0"

        functions.forEach((fun, idx) => {
            if (!(typeof fun === "function")) throw "required in type function in index : " + idx
            if (!fun.name) throw "required in name function and function is found"
            element.addEventListener("focus", fun);
        });

    } catch (error) {
        throw new Error(error)
    }

}


/**
 *  this method is add event focus in multiple elements and add same function
 *  elements required element to listener Focus
 *  fun required function for excute on Focus 
 */

function focusElements({ elements, fun }) {

    try {

        if (!(elements instanceof Array)) throw new Error("required in type array for elements")

        if (!elements.length) throw new Error("required count in element > 0")


        if (!typeof fun) throw new Error("required in type function ")

        if (!fun.name) throw new Error("required in name function and function is found")

        elements.forEach((element, idx) => {
            if (!element.localName) throw new Error("required  tag name for elements =>  is not defined elment in index : " + idx)
            element.addEventListener("focus", fun);
        });

    } catch (error) {
        throw new Error(error)
    }

}



/**
 *  this method is add event focus in multiple elements and add same function
 *  elements required element to listener Focus
 *  fun required function for excute on Focus 
 */

function focusElementsFunctions(array) {

    try {

        if (!(array instanceof Array)) throw "required in type array for elements"

        if (!array.length) throw "required count in array > 0"

        array.forEach((obj, idx) => {

            if (!(obj instanceof Object)) throw "required in type object in array"

            if (!Object.keys(obj).length) throw "required in  object in empty in index : " + idx

            const [element, fun] = Object.values(obj)

            if (!element.localName) throw "required  tag name for elements =>  is not defined elment in index : " + idx

            if (!(typeof fun === "function")) throw new Error("required in type function in index : " + idx)

            if (!fun.name) throw new Error("required in name function and function is found")

            element.addEventListener("focus", fun);
        });

    } catch (error) {
        throw new Error(error)
    }

}













export {
    focusElement,
    focusElementFunctions,
    focusElements,
    focusElementsFunctions
}