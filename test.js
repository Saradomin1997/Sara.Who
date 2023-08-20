xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  document.write(this.responseText);
}
xhttp.open("GET", "index.html", true);
xhttp.send();
