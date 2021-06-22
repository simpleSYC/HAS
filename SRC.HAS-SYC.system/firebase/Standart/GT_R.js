var ULOGA;
var GLISTA = {};
function KOJeOVOJ(a) {
  let g = undefined;
  let G_PATH = "REGROUP/" + a.uid;
  SYC_0000.child(G_PATH)
    .once("value")
    .then(function (snapshot) {
      g = snapshot.val();
      if (g != undefined) {
        Get_ROLE(a.uid, g);
      } else {
        ADDni_novUSER(a);
      }
    });
}

function Get_ROLE(a, b) {
  let User = {
    UID: a,
    Name: null,
    Group: null,
  };
  for (i in b) {
    User["Name"] = i;
    User["Group"] = b[i];
  }
  let R = "G-LISTA/" + User["Group"] + "/" + User["UID"] + "/" + User["Name"];
  SYC_0000.child(R)
    .once("value")
    .then(function (snapshot) {
      let ULOGA = snapshot.val();
      GLISTA["I"] = "GROUP/" + User["Group"] + "/UREDI/";
      GLISTA["i"] = ULOGA;
      if (ULOGA) {
        Polneje_Taj_AKK(User["Group"], ULOGA);
      } else {
        Akk_blok_status(User["Name"]);
      }
    });
}
function Polneje_Taj_AKK(a, b) {
  CHEK_e_vrf(a, b);
  let PATH = "GROUP/" + a + "/UREDI";
  SYC_0000.child(PATH)
    .once("value")
    .then(function (snapshot) {
      let MASINKITE = {};
      let A = snapshot.val();
      for (q = 1; q < A.length; q++) {
        MASINKITE[q] = A[q];
      }

      let R = { ADMIN: 2, EDITOR: 2, SPECTATOR: 2, ANALIZA: 3 };
      //2 =GUI ,3==CLI
      PolnejeDATA_UREDI(MASINKITE, R[b]);
      if (b == "SPECTATOR" || b == "ANALIZA") {
        Disablersko();
      }
      if (R[b] == 2) {
        UPD_Slider_TEXT();
      } else {
        GT_UPDJTS(MASINKITE);
      }
    });
}

function CHEK_e_vrf(g, u) {
  var user = firebase.auth().currentUser;
  if (user.emailVerified) {
    // ako e neverifikuvan prave cekirabje
    let PAT = "GROUP/" + g + "/" + u + "/email_veri";
    SYC_0000.child(PAT)
      .once("value")
      .then(function (snapshot) {
        if (!snapshot.val()) {
          SYC_0000.child(PAT).set(true);
        }
      });
  }
}

function Disablersko() {
  EL_DASH["UPDATE"].remove();
  let el = [
    EL_TBL["SLIDER_1"],
    EL_TBL["SLIDER_2"],
    EL_TBL["SLIDER_3"],
    EL_TBL["STATUS_SELECTOR"],
  ];
  for (i = 0; i < el[3].length; i++) {
    for (q = 0; q <= 3; q++) {
      el[q][i].disabled = true;
    }
  }
}
