function registerformvalidate(){
    let username = document.getElementById('name').value;
    localStorage.setItem("UserName", username);
}
function clearlocalstorage(){
    localStorage.clear();
}
function fecthlocalstorage(){
    document.getElementById('result').innerHTML = "Hello!" + localStorage.getItem('UserName');
}   