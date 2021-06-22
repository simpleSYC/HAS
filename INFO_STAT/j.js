function Alert_Splash(TXT) {
  let I = document.getElementById("INFO_STAT");
  let T = {
    UPDEJT:
      '<div id="alert-success"><strong>Success!</strong> ' +
      "Update was successful done.</div>",
    INFO:
      '<div id="alert-info"><strong>Info!</strong> ' +
      "This alert box could indicate a neutral informative change or action.</div>",
    WARRNING:
      '<div id="alert-warning"><strong>Warning!</strong> ' +
      "This alert box could indicate a warning that might need attention.</div>",
    DANGARE:
      '<div id="alert-danger"><strong>Danger!</strong> ' +
      "This alert box could indicate a dangerous or potentially negative action.</div>",
  };

  I.innerHTML = T[TXT];
  setTimeout(function () {
    I.children[0].remove();
  }, 2500);
}
