function RESETparaMETARS(){FTO_url=false; NOVO_FOTO_iME=null;UPD_Pic.value=null;URED_N=null;}
		 
var URED_N=null;
/////////////////   UPLUDIRA PRFILSKA FOTO MODEL \\\\\\\\\/

var FTO_url=false; var NOVO_FOTO_iME=null;

var uploadPROCENT=0;
var UPD_Pic=document.getElementById("fileButonP_FOTO");
UPD_Pic.addEventListener("change", function(e){
	
	var file = e.target.files[0];
	//////////////  !!!!!!!!!!!!!!!!!!!!!!! dali da se stavi userska papka ?? pred uid
       var storageRef=firebase.storage().ref().child("UREDI/FOTO/"+URED_N+"/"+file.name);
	   

var task=storageRef.put(file);  /// ova funkcionira kako sto treba

task.on('state_changed',

function progress(snapshot){
var percentage=(snapshot.bytesTransferred / snapshot.totalBytes)*100;
uploadPROCENT.value=percentage;},


function error(err){},

function complete (){
//FOTO	link


reader = new FileReader();
reader.onload = function (){ 
FTO_VIEW.src =reader.result;
FTO_VIEW.style.display="block";

MSN_NO_FTO.style.display="none";

}
reader.readAsDataURL(file);

                                  ///  SYC_0000.child("A/"+URED_N+"/FTO/F_IME").set(file.name);

NOVO_FOTO_iME=file.name;



storageRef.getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/stars.jpg'

  // This can be downloaded directly:
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
    var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();
  FTO_url=url;

}).catch(function(error) {
  // Handle any errors
});



}

);
	}); 

//\\\\\\\\\\ END PROFIL FOTKA MODELS FOTO MODEL ////////

 
function RESET_I_paraMETARS(){FTO_INTRO_url=false; NOVO_INTRO_FOTO_iME=null;UPD_Pic.value=null;}
		 

/////////////////   UPLUDIRA PRFILSKA FOTO MODEL \\\\\\\\\/

var FTO_INTRO_url=false; var NOVO_INTRO_FOTO_iME=null;

var uploadPROCENT=0;
var UPD_INTRO_Pic=document.getElementById("fileButon_INTRO_FOTO");
UPD_INTRO_Pic.addEventListener("change", function(e){
	
	var file = e.target.files[0];
	//////////////  !!!!!!!!!!!!!!!!!!!!!!! dali da se stavi userska papka ?? pred uid
       var storageRef=firebase.storage().ref().child("INTRO/FOTO/"+file.name);
	   

var task=storageRef.put(file);  /// ova funkcionira kako sto treba

task.on('state_changed',

function progress(snapshot){
var percentage=(snapshot.bytesTransferred / snapshot.totalBytes)*100;
uploadPROCENT.value=percentage;},


function error(err){},

function complete (){
//FOTO	link


reader = new FileReader();
reader.onload = function (){ ////////////////////////////!!!!!!!!!!!!!!!!!
MDL["log"]["LOGIN_FOTO"].src =reader.result;}
reader.readAsDataURL(file);

                                  ///  SYC_0000.child("A/"+URED_N+"/FTO/F_IME").set(file.name);

NOVO_INTRO_FOTO_iME=file.name;


storageRef.getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/stars.jpg'

  // This can be downloaded directly:
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
    var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();
  FTO_INTRO_url=url;

}).catch(function(error) {
  // Handle any errors
});



}

);
	}); 

//\\\\\\\\\\ END PROFIL FOTKA MODELS FOTO MODEL ////////