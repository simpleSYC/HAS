Vue.component("galery", {
  template: `<div class="w3-container" style="padding: 128px 16px" id="work">
  <h3 class="w3-center">GALERIA</h3>
  <p class="w3-center w3-large">
    Some of our heppy clients shering photos of satisfaction
  </p>

  <div class="w3-row-padding" style="margin-top: 64px">
    <div class="w3-col l3 m6">
      <img
         src="index_files/MEDIA/tech_mic.jpg"
        style="width: 100%"
        class="w3-hover-opacity"
        alt="A microphone"
      />
    </div>
    <div class="w3-col l3 m6">
      <img
         src="index_files/MEDIA/tech_phone.jpg"
        style="width: 100%"
        class="w3-hover-opacity"
        alt="A phone"
      />
    </div>
    <div class="w3-col l3 m6">
      <img
         src="index_files/MEDIA/tech_drone.jpg"
        style="width: 100%"
        class="w3-hover-opacity"
        alt="A drone"
      />
    </div>
    <div class="w3-col l3 m6">
      <img
         src="index_files/MEDIA/tech_sound.jpg"
        style="width: 100%"
        class="w3-hover-opacity"
        alt="Soundbox"
      />
    </div>
  </div>

  <div class="w3-row-padding w3-section">
    <div class="w3-col l3 m6">
      <img
         src="index_files/MEDIA/tech_tablet.jpg"
        style="width: 100%"
        class="w3-hover-opacity"
        alt="A tablet"
      />
    </div>
    <div class="w3-col l3 m6">
      <img
         src="index_files/MEDIA/tech_camera.jpg"
        style="width: 100%"
        class="w3-hover-opacity"
        alt="A camera"
      />
    </div>
    <div class="w3-col l3 m6">
      <img
         src="index_files/MEDIA/tech_typewriter.jpg"
        style="width: 100%"
        class="w3-hover-opacity"
        alt="A typewriter"
      />
    </div>
    <div class="w3-col l3 m6">
      <img
         src="index_files/MEDIA/tech_tableturner.jpg"
        style="width: 100%"
        class="w3-hover-opacity"
        alt="A tableturner"
      />
    </div>
  </div>
</div>`,
});

var store = new Vuex.Store({
  state: {
    view: "galery",
  },
});

var signqqee = new Vue({
  el: "#GALERY",
  store: store,
});
