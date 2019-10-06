//Create event listener
document.getElementById("button").addEventListener("click", loadText);

function loadText() {
  //Create XHR Object
  var xhr = new XMLHttpRequest();

  //Open - type, url/file, async
  xhr.open("GET", "sample.txt", true);

  //   xhr.onload = function() {
  //     if (this.status == 200) {
  //       console.log(this.responseText);
  //     }
  //   };

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      document.getElementById("text").innerHTML = this.responseText;
    } else if (this.status == 404) {
      document.getElementById("text").innerHTML = "Not found";
    }
  };
  //Sends Request
  xhr.send();
}
