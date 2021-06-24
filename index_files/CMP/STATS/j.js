Vue.component("stats", {
  template: `<div class="w3-container w3-row w3-center w3-dark-grey w3-padding-64">
  <h3 class="w3-center">Statsistika</h3>
  <p class="w3-center w3-large">Our product is:</p>

  <div class="w3-quarter">
    <span class="w3-xxlarge">14+</span>
    <br />Partners
  </div>
  <div class="w3-quarter">
    <span class="w3-xxlarge">55+</span>
    <br />Projects Done
  </div>
  <div class="w3-quarter">
    <span class="w3-xxlarge">89+</span>
    <br />Happy Clients
  </div>
  <div class="w3-quarter">
    <span class="w3-xxlarge">150+</span>
    <br />Meetings
  </div>
</div>
`,
});

var store = new Vuex.Store({
  state: {
    view: "stats",
  },
});

var signqqee = new Vue({
  el: "#STATS",
  store: store,
});
