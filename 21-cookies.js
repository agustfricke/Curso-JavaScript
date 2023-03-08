// Cookie = un pequeno archivo de texto alojado en tu computadora usado para recordar indomacion 
// sobre el usuario se guarda en nombre = valor

// check si tu navegador tiene las cookies prendidas
console.log(navigator.cookieEnabled)

// crear una cookie, nombre valor fecha y path 
document.cookie = 'name=agustin; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/'
// obtener la cookie
console.log(document.cookie)

document.cookie = 'name=agustin; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/'
document.cookie = 'apellido=Lopez; expires=Thu, 01 Jan 2024 00:00:00 UTC; path=/'

// Si ponemos una fecha que ya paso se va a eliminar

document.cookie = 'apellido=Lopez; expires=Thu, 01 Jan 1999 00:00:00 UTC; path=/'

// Creemos una logica para extender estos conociminentos un poco mas


const firstText = document.querySelector("#firstText");
const lastText = document.querySelector("#lastText");
const submitBtn = document.querySelector("#submitBtn");
const cookieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click", () => {
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});
cookieBtn.addEventListener("click", () => {
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

function setCookie(name, value, daysToLive){
    const date = new Date();
    date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`
}
function deleteCookie(name){
    setCookie(name, null, null);
}
function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    console.log(cArray)
    let result = null;
    
    cArray.forEach(element => {
        if(element.indexOf(name) == 0){
            result = element.substring(name.length + 1)
        }
    })
    return result;
}

 <label for="firstText">first name:</label>
    <input id="firstText"><br>
    <label for="lastText">last name:</label>
    <input id="lastText"><br>
    <button id="submitBtn">submit</button>
    <button id="cookieBtn">get cookies</button>
    <script src="index.js"></script>
