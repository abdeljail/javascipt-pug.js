
/**
 *  this method is  when the Element is add event listener  Focus
 *  element required element to listener Click
 *  fun required function for excute on click
 */

function focusElement({  element, fun   }){

    try {
        
        if (!element.localName) throw "required  tag name for element"

        if (!(typeof fun === "function")) throw "required in type function  "

        if (!fun.name) throw "required in name function and function is found"

        element.addEventListener("focus", fun);

    } catch (error) {
        throw new Error(error)
    }



}


export {
    focusElement
}