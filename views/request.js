function GetRequest() {
    // do something
}

let request = new XMLHttpRequest();
    
request.open('PUT', 'http://127.0.0.1:3000/');
uest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
request.send(GetRequest());