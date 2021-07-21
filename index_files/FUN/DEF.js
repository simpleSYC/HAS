const EL_ = {
  CLIK_MENY: document.getElementById("mySidebar"),
  INTRO: document.getElementById("home"),
  FAQ: document.getElementById("faq"),
};

function w3_open() {
  if (EL_["CLIK_MENY"].style.display === "block") {
    EL_["CLIK_MENY"].style.display = "none";
  } else {
    EL_["CLIK_MENY"].style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  EL_["CLIK_MENY"].style.display = "none";
}

EL_["FAQ"].onclick = function () {
  window.open("FAQ");
};

EL_["INTRO"].style.height = window.innerHeight + "px";
