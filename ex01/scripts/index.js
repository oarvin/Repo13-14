// Get the modal
function onClick(element) {
  document.getElementById("myModal").style.display = "block";
  fetchLocalResource("../src/" + element.id +".html")
  
}
 function fetchLocalResource(url) {
  const req = new XMLHttpRequest();
  req.onload = function() {
    document.getElementById("modalBody").innerHTML = req.responseText;
  }
  req.open("GET",url);
  req.send()
}

function closeModal() {
  document.getElementById("myModal").style.display='none';
  document.getElementById("modalBody").innerHTML = "";
}