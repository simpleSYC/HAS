Vue.component("contact", {
  template: `<div
    class="w3-container w3-light-grey"
    style="padding: 128px 16px"
    id="contact">
    <h3 class="w3-center">CONTACT</h3>
    <p class="w3-center w3-large">You can contact our ofice at:</p>
    <div style="margin-top: 48px">
      <p>
        <i class="fa fa-map-marker fa-fw w3-xxlarge w3-margin-right"></i>
        Chicago, US
      </p>
      <p>
        <i class="fa fa-phone fa-fw w3-xxlarge w3-margin-right"></i> Phone:
        +00 151515
      </p>
      <p>
        <i class="fa fa-envelope fa-fw w3-xxlarge w3-margin-right"> </i>
        Email: mail@mail.com
      </p>
      <p class="w3-center w3-large">Or people by role:</p>
      <div class="w3-row-padding">
      <div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-card">
          <img src="index_files/MEDIA/team2.jpg" style="width: 100%" />
          <div class="w3-container">
            <h3>John Doe</h3>
            <p class="w3-opacity">CEO &amp; Founder</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button class="w3-button w3-light-grey w3-block">
                <i class="fa fa-envelope"></i> Contact
              </button>
            </p>
          </div>
        </div>
      </div>
      <div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-card">
          <img src="index_files/MEDIA/team1.jpg" style="width: 100%" />
          <div class="w3-container">
            <h3>Anja Doe</h3>
            <p class="w3-opacity">Art Director</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button class="w3-button w3-light-grey w3-block">
                <i class="fa fa-envelope"></i> Contact
              </button>
            </p>
          </div>
        </div>
      </div>
      <div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-card">
          <img src="index_files/MEDIA/team3.jpg" style="width: 100%" />
          <div class="w3-container">
            <h3>Mike Ross</h3>
            <p class="w3-opacity">Web Designer</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button class="w3-button w3-light-grey w3-block">
                <i class="fa fa-envelope"></i> Contact
              </button>
            </p>
          </div>
        </div>
      </div>
      <div class="w3-col l3 m6 w3-margin-bottom">
        <div class="w3-card">
          <img src="index_files/MEDIA/team4.jpg" style="width: 100%" />
          <div class="w3-container">
            <h3>Dan Star</h3>
            <p class="w3-opacity">Designer</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button class="w3-button w3-light-grey w3-block">
                <i class="fa fa-envelope"></i> Contact
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  </div>`,
});

var store = new Vuex.Store({
  state: {
    view: "contact",
  },
});

var signqqee = new Vue({
  el: "#CONTACT",
  store: store,
});
