
/**
 *  this method is  when the Element is add event listener  Click
 *  element required element to listener Click
 *  fun required function for excute on click
 */

function clickElement({ element, fun }) {

    try {

        element.hasAttribute("element")

        if (!fun.name) throw new Error("required in name function and function is found")

        element.addEventListener("click", fun);

    } catch (error) {
        throw new Error(error)
    }

}



/**
 *  this method is add event click in multiple elements and add same function
 *  elements required element to listener Click
 *  fun required function for excute on click 
 */

function clickElements({ elements, fun }) {

    try {

        if (!(elements instanceof Array)) throw new Error("required in type array for elements")

        if (!elements.length) throw new Error("required count in element > 0")

        elements.forEach((element, idx) => {
            if (!element.localName) throw new Error("required  tag name for elements =>  is not defined elment in index : " + idx)
            element.addEventListener("click", fun);
        });

    } catch (error) {
        throw new Error(error)
    }

}


export {
    clickElement,
    clickElements
}