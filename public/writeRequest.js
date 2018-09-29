// WRITE - XMLHttpRequest

function writeRequest() {
    var writeReflection = {
        "ReflectionName": document.getElementById('title').value,
        "ReflectionBody": document.getElementById('body').value
    }
    /*
    var writeNote = {
        "NoteName": document.getElementById('title').value,
        "NoteBody": document.getElementById('body').value
    }
    */
    return JSON.stringify(writeReflection, /*writeNote*/);
}

document.getElementById('save').addEventListener('click', () => {
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.open('POST', 'http://127.0.0.1:3000/write');
    xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlRequest.addEventListener('load', function() {
        console.log(xmlRequest.response);
    });
    xmlRequest.send(writeRequest());
});