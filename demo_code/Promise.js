
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

/*
function timeout(ms){
  return new Promise((resolve,reject) => { setTimeout(resolve, ms, "done"); });
}
timeout(1000).then(value => { console.log(value); });

// load image asynchronously
function loadImgAsync(url){
  return new Promise(function(resolve,reject){
    var img = new Image();
    img.onload = function(){
      resolve(img);
    };
    img.onerror = function(){
      reject(new Error("could not load image at " + url));
    };
      img.src = url;
    });
}

// realize ajax with Promise
var getJSON = function(url){
  var promise = new Promise(function(resolve,reject){
    var client = new XMLHttpRequest();
    client.open("GET",url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send(null);
    function handler() {
      if(this.readyState !== 4) {
        return;
      }
      if(this.status === 200) {
        resolve(this.response);
      } else {
        // reject(new Error(this.statusText));
      }
    }
  });
  return promise;
};
getJSON("/posts.json").then(function(json) {
  console.log("contents:",json);
  return json;
}, function(error) {
  console.log("error:",error);
}).then(function(json) {
  console.log("another json function");
});

var promise1 = new Promise(function(resolve,reject) {
  resolve("ok");
  // throw new Error("test");
});
promise1.then(function(value) {
  console.log(value);
}).catch(function(error) {
  console.log(error);
});

console.log("------------------------------");
var p1 = Promise.resolve("hello");
p1.then(function(s){ console.log(s) }); //hello
var p2 = Promise.reject("sth wrong");
p2.catch(function(s){ console.log(s) }); //sth wrong
*/


function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}
timeout(100).then((value) => {
  console.log(value);
});

// once Promise is created, it will run immediately
let promise = new Promise((resolve, reject) => {
  console.log('promise');
  resolve();
});

promise.then(() => {
  console.log('resolved');
});

console.log('hi'); // promise, hi, resolved

// load images async
function loadImageAsync(url) {
  return new Promise((resolve, reject) => {
    var image = new Image();
    image.onload = function(){
      resolve(image);
    };
    image.onerror = function(){
      reject(new Error('Could not load image at ' + url));
    };
    image.src = url;
  });
}

//realize ajax with Promise
function getJSON(url) {
  var promise = new Promise((resolve, reject) => {
    var client = new XMLHttpRequest();
    client.open('Get', url);
    client.onreadystatechange = handleChangeReadyState;
    client.responseType = 'json';
    client.setRequestHeader('Accept', 'application/json');
    client.send();

    function handleChangeReadyState() {
      if (this.readyState !== 4) {
        return;
      }
      if ((this.status >= 200 && this.status < 300) || this.status === 304) {
        resolve(this.response);
      } else {
        // reject(new Error(this.statusText));
      }
    }
  });

  return promise;
}

getJSON('/posts.json').then((json) => {
  console.log('Contents:', json);
}, (error) => {
  console.error('error:', error);
});


var promises = [2, 3, 5].map(function(id) {
  return getJSON('/post/' + id + '.json');
});

Promise.all(promises).then(function(posts){})
.catch(function(error) {});









