import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { registerGlobalComponents } from "./utils/import";
import "./assets/styles/style.bundle.css";
// import "./assets/js/scripts.bundle";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

// Import FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

const app = createApp(App);

registerGlobalComponents(app);

app.use(router);
app.use(bootstrap);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
