Vue.component("price", {
  template: `<div
    class="w3-container w3-center w3-dark-grey"
    style="padding: 128px 16px"
    id="pricing">
    <h3>PRICING</h3>
    <p class="w3-large">You can buy any of thise Licences: </p>
    <p class="w3-large">Licence can be upscale/downscale or cancel at any time without any contracts or terms of service agriment*</p>
    <div class="w3-row-padding" style="margin-top: 64px">
      <div class="w3-col l3 m6 w3-margin-bottom">
        <ul class="w3-ul w3-white w3-hover-shadow">
          <li class="w3-purple w3-xlarge w3-padding-32">Lite</li>
          <li class="w3-padding-16"><b>10</b> Maschines</li>
          <li class="w3-padding-16"><b>Standatd </b>Login page</li>
          <li class="w3-padding-16"><b>Standatd </b>Login Domain</li>
          <li class="w3-padding-16"><b>Forum </b>Support</li>
          <li class="w3-padding-16">
            <h2 class="w3-wide">199 &euro;</h2>
            <span class="w3-opacity">per year</span>
          </li>
          <li class="w3-light-grey w3-padding-24">
            <button class="w3-button w3-black w3-padding-large">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
      <div class="w3-col l3 m6 w3-margin-bottom">
        <ul class="w3-ul w3-white w3-hover-shadow">
          <li class="w3-deep-purple w3-xlarge w3-padding-32">Lite +</li>
          <li class="w3-padding-16"><b>10</b> Maschines</li>
          <li class="w3-padding-16"><b>Costum </b>Login page</li>
          <li class="w3-padding-16"><b>Costum </b>Login Domain</li>
          <li class="w3-padding-16"><b>Forum & Chat </b>Support</li>
          <li class="w3-padding-16"><b>Landig page </b>Web</li>
          <li class="w3-padding-16"><b>5 bussnise </b>Email</li>
          <li class="w3-padding-16">
            <h2 class="w3-wide">265 &euro;</h2>
            <span class="w3-opacity">per year</span>
          </li>
          <li class="w3-light-grey w3-padding-24">
            <button class="w3-button w3-black w3-padding-large">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
      <div class="w3-col l3 m6 w3-margin-bottom">
        <ul class="w3-ul w3-white w3-hover-shadow">
          <li class="w3-orange w3-xlarge w3-padding-32">Extrim</li>
          <li class="w3-padding-16"><b>30</b> Maschines</li>
          <li class="w3-padding-16"><b>Standatd </b>Login page</li>
          <li class="w3-padding-16"><b>Standatd </b>Login Domain</li>
          <li class="w3-padding-16"><b>Forum </b>Support</li>
          <li class="w3-padding-16">
            <h2 class="w3-wide">365 &euro;</h2>
            <span class="w3-opacity">per year</span>
          </li>
          <li class="w3-light-grey w3-padding-24">
            <button class="w3-button w3-black w3-padding-large">
              Sign Up
            </button>
          </li>
        </ul>
      </div>
      <div class="w3-col l3 m6 w3-margin-bottom">
      <ul class="w3-ul w3-white w3-hover-shadow">
        <li class="w3-deep-orange w3-xlarge w3-padding-32">Extrim +</li>
        <li class="w3-padding-16"><b>30</b> Maschines</li>
        <li class="w3-padding-16"><b>Costum </b>Login page</li>
        <li class="w3-padding-16"><b>Costum </b>Login Domain</li>
        <li class="w3-padding-16"><b>Forum & Chat </b>Support</li>
        <li class="w3-padding-16"><b>Landig page </b>Web</li>
        <li class="w3-padding-16"><b>10 bussnise </b>Email</li>
        <li class="w3-padding-16">
          <h2 class="w3-wide">505 &euro;</h2>
          <span class="w3-opacity">per year</span>
        </li>
        <li class="w3-light-grey w3-padding-24">
          <button class="w3-button w3-black w3-padding-large">
            Sign Up
          </button>
        </li>
      </ul>
    </div>

    
    <p class="w3-large">kaj adminpage da se stave kuponce u LICENCA
    
    i Referals with this licenca</p>

    
    <p class="w3-large">Referal bonus</p>
    
    <p class="w3-large">if you recomened any potentional client, you get -20% off, and the
    new guy -10% off of licence for 1 year. See <a id="faq">full FAQ page</a> about referals</p>


    </div>
  </div>`,
});

var store = new Vuex.Store({
  state: {
    view: "price",
  },
});

var signqqee = new Vue({
  el: "#PRICE",
  store: store,
});
