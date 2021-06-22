EnterComandPress();
function EnterComandPress() {
  let O = [
    document.getElementsByTagName("input")[1],
    document.getElementsByTagName("input")[2],
    document.getElementsByTagName("input")[3],
    document.getElementsByTagName("input")[4],
    document.getElementsByTagName("input")[5],
    document.getElementsByTagName("input")[6],
    document.getElementsByTagName("input")[7],
  ];
  for (i in O) {
    O[i].addEventListener("keyup", function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementsByTagName("button")[0].click();
      }
    });
  }
}

function PreSet() {
  let O = [
    document.getElementsByTagName("input")[1],
    document.getElementsByTagName("input")[2],
    document.getElementsByTagName("input")[3],
    document.getElementsByTagName("input")[4],
    document.getElementsByTagName("input")[5],
    document.getElementsByTagName("input")[6],
    document.getElementsByTagName("input")[7],
  ];
  for (i in O) {
    O[i].value = "";
  }
}

function Email_Transformer(A) {
  let R = "";
  for (i in A) {
    if (A[i] == ".") {
      R = R + ",";
    } else {
      R = R + A[i];
    }
  }
  return R;
}

function W8_4ERORS(a) {
  let P = {
    GROUPA: document.getElementById("GROUP_SingUp").value,
    COD: document.getElementById("COD_SingUp").value,
    USRNAME: document.getElementById("username_SingUp").value,
    EMAIL: document.getElementById("email_SingUp").value,
    PASSWORD: document.getElementById("password_SingUp").value,
    T_email: Email_Transformer(document.getElementById("email_SingUp").value),
    ERROR_CODE: 0,
    SNG_BTN: a,
  };
  P["SNG_BTN"].innerHTML = "Cheking data....";
  // tuka da se odvive nekoje brc precek

  if (!IsOK_name(P["GROUPA"]) || !IsOK_name(P["COD"])) {
    P["ERROR_CODE"] = 1;
  } else if (!IsOK_name(P["USRNAME"])) {
    P["ERROR_CODE"] = 2;
  }

  if (!P["ERROR_CODE"]) {
    CEKIRANJE_G_C(P);
  } else {
    Frli_EROR_ALERT(P["ERROR_CODE"]);
  }
}
function CEKIRANJE_G_C(p) {
  /// da se stave dali e cist taj  parametar !!!
  SYC_0000.child("COD/" + p["GROUPA"] + "/" + p["COD"])
    .once("value")
    .then(function (snapshot) {
      let B_data = snapshot.val();
      if (B_data != undefined) {
        ULOGA = B_data; // go ima taj GROUP i COD i taj e taa ULOGA !!
        if (
          IsOK_name(Skip_na_Tockite(p["EMAIL"])) &&
          p["EMAIL"].includes("@") &&
          p["EMAIL"].includes(".")
        ) {
          CEKIRANJE_EMAIL_TRANSFORMIRANIOTO(p);
        } else {
          p["ERROR_CODE"] = 3;
          Frli_EROR_ALERT(p);
        }
      } else {
        // vrakja eror i se prekinuva sporoto
        // da se stave takvo za vrakjane na kopceto u normalna situacija
        p["ERROR_CODE"] = 1;
        Frli_EROR_ALERT(p);
      }
    });
}

function CEKIRANJE_EMAIL_TRANSFORMIRANIOTO(p) {
  SYC_0000.child("REG@EMAIL/" + p["T_email"])
    .once("value")
    .then(function (snapshot) {
      if (p["PASSWORD"].length < 8) {
        p["ERROR_CODE"] = 5;
      }

      let B_data = snapshot.val();
      if (B_data != undefined) {
        //  console.log(B_data);
        p["ERROR_CODE"] = 7;
        // go ima taj email i vrakja
      }
      Frli_EROR_ALERT(p);
    });
}
/// da nebidat prazni value
/// proverka na brzite erori
// potoa proverka na sporite erori

// prvo sporoto pa brzoto

// a da dava rezlutati prvo od brzoto pa od sporoto !!!

function Frli_EROR_ALERT(p) {
  let TxT = {
    0: "acc is sucsesfol cr8",
    1: "this GROUP & COD combination is unavable",
    2: "unsuported charakter in Username",
    3: "unsuported email type -----",
    4: "this email is alredy used ",
    5: "pasword must be over 8 charakters long",
    6: " ",
    7: "this email is alredy used",
    8: "username must be minimum 3 charakters long",
    9: "Unsuported email type",
  };
  if (!p["ERROR_CODE"]) {
    SingUP();
  }
  window.alert(TxT[p["ERROR_CODE"]]);

  document.getElementById("SIGNAP_BTN").innerHTML = "Sing Up";
}

function Skip_na_Tockite(a) {
  let A = "";
  for (i in a) {
    if (a[i] != ".") {
      A = A + a[i];
    }
  }
  return A;
}

function IsOK_name(a) {
  if (
    a.length < 1 ||
    a.includes("%") ||
    a.includes("/") ||
    a.includes("#") ||
    a.includes(".") ||
    a.includes(",") ||
    a.includes("`") ||
    a.includes("|") ||
    a.includes("'") ||
    a.includes('"') ||
    a.includes(" ") ||
    a.includes("[") ||
    a.includes("]") ||
    a.includes("USER")
  ) {
    return false;
  }
  return true;
}

function SUP(a) {
  PreSet();
  if (a) {
    document.getElementById("LOG_TOGEL").style.display = "none";
    document.getElementById("Sup").style.display = "block";
    document.getElementById("Lin").style.display = "none";
  } else {
    document.getElementById("LOG_TOGEL").style.display = "inline-block";
    document.getElementById("Sup").style.display = "none";
    document.getElementById("Lin").style.display = "block";
  }
}

function ADDni_novUSER(USER) {
  let G_C_R_username = {
    G: document.getElementById("GROUP_SingUp").value,
    C: document.getElementById("COD_SingUp").value,
    R: ULOGA,
    username: document.getElementById("username_SingUp").value,
  };
  ULOGA = null;
  PRVA_POTPUNKA(USER.uid, USER.email, G_C_R_username, USER);
}
function PRVA_POTPUNKA(U_UID, U_EMAIL, PARAMETARS, U_) {
  let PRAZNUV = "COD/" + PARAMETARS["G"] + "/" + PARAMETARS["C"];
  SYC_0000.child(PRAZNUV).set(null);

  let g = '{"' + PARAMETARS["username"] + '": "' + PARAMETARS["G"] + '"}';
  let G = JSON.parse(g);
  SYC_0000.child("REGROUP/" + U_UID).set(G);
  let O = JSON.parse(
    '{"' + PARAMETARS["username"] + '": "' + PARAMETARS["R"] + '"}'
  );
  SYC_0000.child("G-LISTA/" + PARAMETARS["G"] + "/" + U_UID).set(O);

  let E_T = "REG@EMAIL/" + Email_Transformer(U_EMAIL);
  SYC_0000.child(E_T).set(true);

  let NEW_USER = {
    user: PARAMETARS["username"],
    email: U_EMAIL,
    email_veri: false,
    ULOGA: PARAMETARS["R"],
    STATUS: true,
  };
  SYC_0000.child("GROUP/" + PARAMETARS["G"] + "/ROLE/" + PARAMETARS["R"]).set(
    NEW_USER
  );
  KOJeOVOJ(U_);
}

/// ova e staveno u creat akkk pod defalt
//  SND_e_vrf();
function SND_e_vrf() {
  var user = firebase.auth().currentUser;
  user
    .sendEmailVerification()
    .then(function () {
      // Email sent.
    })
    .catch(function (error) {
      // An error happened.
    });
}
