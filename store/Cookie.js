import Cookies from 'js-cookie';

// Definindo um cookie
export function setCookie(cname, cvalue, exdays) {
    Cookies.set(cname, cvalue, { expires: exdays });
}

// Obtendo um cookie
export function getCookie(cname) {
    return Cookies.get(cname) || '';
}

// Verificando se um cookie existe
export function checkCookie(cname) {
    return Cookies.get(cname) !== undefined;
}

// Excluindo um cookie
function deleteCookie(cname) {
    Cookies.remove(cname);
}