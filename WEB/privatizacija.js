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
    
    
    console.log("HAS _ ",URL.slice(presek_start, presek_start + presek_end));
    
    
    if (URL.slice(presek_start, presek_start + presek_end) === ".ddns") {
      //".com." -syc. //.ddns
      HAS = URL.slice(0, presek_start) + dodatok;
      break;
    }
    console.log("HAS--",HAS);

    presek_start = presek_start + 1;
  }

  return HAS;
}

    console.log("-----",window.frameElement);




CLIENTOS = CLIENTOS[Koj_WEB_TI_E(window.frameElement)];
WELCOME_CLIENT(CLIENTOS);
function WELCOME_CLIENT(C) {
  let welcome_TITLE = document.getElementById("TiTle");
  let welocme_FOTO = document.getElementById("WELCOM_FOTO");
  let welcom_TXT = document.getElementById("WELCOM_TXT");
  let DefaltSRC = "https://simplesyc.github.io/HAS.SRC/MEDIA/HAS1000.png";
  if (C != undefined) {
    SYC_0000.child("WEB/" + C)
      .once("value")
      .then(function (snapshot) {
        let DATA = snapshot.val();
        welcome_TITLE.innerHTML = DATA["TITLE"];
        welcom_TXT.innerHTML = DATA["TXT"];
      });
    DefaltSRC = "https://simplesyc.github.io/HAS.SRC/WEB/MEDIA/" + C + "/WelcomFoto.png";
  }
  welocme_FOTO.src = DefaltSRC;
}
