
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


















