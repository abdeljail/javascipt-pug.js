/**
 * this function for select element by id
 * and return element
 * @params name type string
 * @params name id and name required
 */


function selectById(name) {

    if (name === "")
        throw new Error("this param in empty ")

    if (name === null)
        throw new Error("this param in null ")

    if (name === undefined)
        throw new Error("this param in undefined ")

    if (typeof name !== "string")
        throw new Error("this param in not string ")


    return name.startsWith("#") ? document.getElementById(name.slice(1)) :  document.getElementById(name)

}



/**
 * this function for select element by id
 * and return element 
 * @params name id
 */


function selectByClass(name) {

    if (name === "")
        throw console.log(new Error("this param in empty "))

    if (name === null)
        throw new Error("this param in null ")

    if (name === undefined)
        throw new Error("this param in undefined ")

    if (typeof name !== "string")
        throw new Error("this param in not string ")


    console.log("yes")


}






export {
    selectById,
    selectByClass
}