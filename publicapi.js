function generateBaconIpsum() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://baconipsum.com/api/?type=all-meat&paras=1", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      var baconText = response[0];

      var container = document.getElementById("baconTextContainer");
      container.innerHTML = "<p class='bacon-text'>" + baconText + "</p>";
    }
  };
  xhr.send();
}
