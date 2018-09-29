// LOGIN - XMLHttpRequest

function loginRequest() {
    var loginStudent = {
        "StudentMail": document.getElementById('username-login').value,
        "StudentPassword": document.getElementById('password-login').value
    }
    var loginLecturer = {
        "LecturerMail": document.getElementById('username-login').value,
        "LecturerPassword": document.getElementById('password-login').value
    }
    return JSON.stringify(loginStudent, loginLecturer);
}

document.getElementById('loginsubmit').addEventListener('click', () => {
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.open('POST', 'http://127.0.0.1:3000/login');
    xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlRequest.addEventListener('load', function() {
        console.log(xmlRequest.response);
    });
    xmlRequest.send(loginRequest());
});