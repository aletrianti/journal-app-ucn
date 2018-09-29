// VIEW - XMLHttpRequest

window.addEventListener('load', () => {
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.open('GET', 'http://127.0.0.1:3000/view');
    xmlRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlRequest.addEventListener('load', function() {
        console.log(xmlRequest.response);
        // Parse response
        var refResult = JSON.parse(xmlRequest.response);
        // Loop through the parsed response
        for (ref in refResult) {
            document.getElementById('content').innerHTML += '<li class="refName">' + refResult[ref].ReflectionName + '</li>';
        }
    });
    xmlRequest.send();
});
