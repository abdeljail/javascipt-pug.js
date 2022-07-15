
/**
 * export the file authorization information
 */
import Auth from "./helpers/Class/Auth.c.js";
const auth = new Auth()
auth.auth()


// const instagram = async () => await fetch("https://graph.instagram.com/v14.0/7152470988156971?fields=id,username,media_count,account_type,media&access_token=IGQVJWTk5Dd2N3Wmh0RzBScDBsYlJTLTBJU0trTTViYVdOTjV0dHRWUlptVUlWY0hKcC1PazFCWWhSRmlYSkpCWTV1ZAEdFRncxaTNEaVgxWVNWQ25tcUlfWU5ZAYXVaOE8zdGJyYkp6c2RFU1ZAUX05DVwZDZD")

// const res = await instagram()
//             .then((result) => result.json())
