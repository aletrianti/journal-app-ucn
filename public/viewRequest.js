// VIEW - XMLHttpRequest

function viewRequest() {
    var viewReflection = {
        "ReflectionName": document.getElementById('title').value
    }
    return JSON.stringify(viewReflection);
}

document.getElementById('content').addEventListener('load', () => {
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.open('GET', 'http://127.0.0.1:3000/view');
    xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlRequest.addEventListener('load', function() {
        console.log(xmlRequest.response);
    });
    xmlRequest.send(viewRequest());
});