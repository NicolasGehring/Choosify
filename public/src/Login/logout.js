export default function () {
    //In order to succesfully logout we have to change the url to login and delete the accestoken
    localStorage.clear();
    document.location.href = '/'
}