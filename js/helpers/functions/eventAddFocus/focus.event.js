
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








export {
    focusElement,
    focusElementFunctions
}