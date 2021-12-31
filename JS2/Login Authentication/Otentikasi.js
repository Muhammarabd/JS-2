
function cekLogin() {
    const username = 'ahmad2017';
    const password = 'integrity';

    var cekUsername = document.getElementById('username').value;
    var cekPassword = document.getElementById('password').value;

    if(username == cekUsername && password == cekPassword) {
        console.log('ini sama');
        console.log(password);

        window.location.href = "loginberhasil.html";
    } else {
        console.log('sama');

        var getErr =  document.getElementById("error");
        getErr.style.display = 'block';

    }
}

function closeLah() {
    var getErr =  document.getElementById("error");
    getErr.style.display = 'none';
}