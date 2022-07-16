
/**
 * this method is  when the Element is add event listener  Click
 * element required element to listener Click
 *  fun required function for excute on click
 */

function clickElement({ element, fun }) {

    try {
        element.hasAttribute("element")
        if(!fun.name) throw new Error("required in name function")
        element.addEventListener("click", fun);
    } catch (error) {
        throw new Error(error)
    }

}

export {
    clickElement
}