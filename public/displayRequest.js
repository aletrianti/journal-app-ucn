// View in write.html - XMLHttpRequest

window.addEventListener('load', () => {
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.open('GET', 'http://127.0.0.1:3000/view');
    xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlRequest.addEventListener('load', function() {
        console.log(xmlRequest.response);
        // Parse response
        var refResult = JSON.parse(xmlRequest.response);
        document.getElementsByClassName('refName').addEventListener('click', () => {
            // Redirect to the page of the reflection which was clicked
            // Display title (ReflectionName) and body (ReflectionBody) in the form in write.html
        });
    });
    xmlRequest.send();
});