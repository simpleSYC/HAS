let CLIENTOS = {
  "https://testo333.ddns.net": "GOGO33",
  "https://testo987.ddns.net": "DODO",
};
/// samo moje takvo hsotnato ke ima tuka... so url i web

function Koj_WEB_TI_E(URL) {
  let HAS = undefined;
  let presek_end = 5;
  let presek_start = 8;
  let dodatok = ".ddns.net"; ///".ddns.net/"
  for (i in URL) {
    if (URL.slice(presek_start, presek_start + presek_end) === ".ddns") {
      //".com." -syc. //.ddns
      HAS = URL.slice(0, presek_start) + dodatok;
      break;
    }
    presek_start = presek_start + 1;
  }

  return HAS;
}

var YRL;
window.addEventListener("message", function(event){
YRL=event["origin"];

CLIENTOS = CLIENTOS[Koj_WEB_TI_E(YRL)];
WELCOME_CLIENT(CLIENTOS);
}, false);

function WELCOME_CLIENT(C) {
  let URL_SRC = "https://simplesyc.github.io/HAS.SRC/";
  let welcome_TITLE = document.getElementById("TiTle");
  let welocme_FOTO = document.getElementById("WELCOM_FOTO");
  let welcom_TXT = document.getElementById("WELCOM_TXT");
  let DefaltSRC = URL_SRC + "MEDIA/HAS1000.png";
  if (C != undefined) {
    SYC_0000.child("WEB/" + C)
      .once("value")
      .then(function (snapshot) {
        let DATA = snapshot.val();
        welcome_TITLE.innerHTML = DATA["TITLE"];
        welcom_TXT.innerHTML = DATA["TXT"];
      });
    DefaltSRC = URL_SRC + "WEB/" + C + "/LoginFoto.png";
  }
  welocme_FOTO.src = DefaltSRC;
}
