const headerText = "Codewithabhi";
const welcomeMessage = "Hello User";

// Usage examples:
console.log(headerText);       // "Codewithabhi"
console.log(welcomeMessage);   // "Hello User"
let text = [
  "Codewithabhi",
  "Hello Coder",
  
];
let count = 0;
let currentText = "";
let letter = 0;
document.querySelector(".multiple-text").innerHTML = text[0] + "";

let typing = setInterval(function () {
  currentText += text[count].charAt(letter);
  document.querySelector(".multiple-text").innerHTML = currentText;
  letter++;
  if (letter == text[count].length) {
    count++;
    if (count == text.length) {
      count = 0;
    }
    currentText = "";
    letter = 0;
  }
},200);
function run() {
  var html = document.getElementById("html").value;
  var css = "<style>" + document.getElementById("css").value + "</style>";
  var javascript = "<script>" + document.getElementById("javascript").value + "<\/script>";
  var output = document.getElementById("output").contentWindow.document;
  output.open();
  output.write(html + css + javascript);
  output.close();
}

function saveAllFiles() {
  var zip = new JSZip();
  zip.file("index.html", document.getElementById("html").value);
  zip.file("style.css", document.getElementById("css").value);
  zip.file("script.js", document.getElementById("javascript").value);
  zip.generateAsync({
      type: "blob"
    })
    .then(function (content) {
      saveAs(content, "code_files.zip");
    });
}

function toggleMode() {
  document.body.classList.toggle('dark-mode');
  const icon = document.querySelector('.toggle-button i');
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');
}