const Title = "FAQ about HAS";
const TXT = "Here can fina all important FAQ";
const WebUrl = "https://simplesyc.github.io/HAS.SRC/";
const LogoSRC = WebUrl + "MEDIA/HAS1000.png";
const LastUpdejt = "Date of last change : 15/13/2020";
const DATA = {
  "KOJ ste vie??": ["jas sum taj i taj"],
  "KOJ e toj": ["toj e tdasdsa", "i e najak"],
  "KOJ e toj": ["toj e tdasdsa", "i e najak"],
  "KOJ e ovoj ?": ["najakito"],
  "KOJ e pa sega onoj ": ["jole", " bole"],
  "KOJ e toj": ["toj e tdasdsa", "i e najak"],
};
document.getElementsByTagName("TITLE")[0].innerHTML = Title;
document.getElementById("TXT").innerHTML = TXT;
document.getElementsByTagName("IMG")[2].src = LogoSRC;
document.getElementById("Link").innerHTML = WebUrl;

let blanko = document.getElementById("Blanko").children[0];
let N = 0;
for (i in DATA) {
  N = N + 1;
  cl(i, DATA[i], N);
}
document.getElementById("Blanko").remove();

document.getElementById("dtUPDATE").innerHTML = LastUpdejt;
function cl(d, D, n) {
  let i_d = "colapse" + n;
  var cln = blanko.cloneNode(true);
  cln
    .getElementsByClassName("panel-heading")[0]
    .setAttribute("href", "#" + i_d);
  cln.getElementsByClassName("panel-title")[0].innerHTML = d;
  cln.getElementsByClassName("panel-collapse collapse")[0].id = i_d;
  cln.getElementsByClassName("panel-body")[0].innerHTML = D[0];
  if (D.length == 2) {
    cln.getElementsByClassName("panel-footer")[0].innerHTML = D[1];
  } else {
    cln.getElementsByClassName("panel-footer")[0].remove();
  }
  document.getElementById("FAQ").appendChild(cln);
}
