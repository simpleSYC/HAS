Vue.component("demo", {
  template: `<div class="w3-container w3-light-grey" style="padding: 128px 16px">
  <div class="w3-row-padding">
    <div class="w3-col m6">
      <h3>We know design.DEMO</h3>
      <p>
        you can login as demo fa-user login: test@gmail.com pass: test123
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod<br />tempor incididunt ut labore et dolore.
      </p>
      <p>
        <a href="#work" class="w3-button w3-black"
          ><i class="fa fa-th">&nbsp;</i> View Our Works</a
        >
      </p>
    </div>
    <div class="w3-col m6">
      <img
        class="w3-image w3-round-large"
        src="index_files/MEDIA/phone_buildings.jpg"
        alt="Buildings"
        width="700"
        height="394"
      />
    </div>
  </div>
</div>`,
});

var store = new Vuex.Store({
  state: {
    view: "demo",
  },
});

var signqqee = new Vue({
  el: "#DEMO",
  store: store,
});
