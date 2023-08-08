import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoReact,CoLaravel,CoJava,CoJavascript,CoPython,CoLinkedin } from "oh-vue-icons/icons/co";
import { BiPlus } from "oh-vue-icons/icons/bi";
import {MdEmailRound} from "oh-vue-icons/icons/md";

addIcons(CoReact,CoLaravel,BiPlus,CoJava,CoJavascript,CoPython,CoLinkedin,MdEmailRound);


const app = createApp(App).use(router);
app.component("v-icon", OhVueIcon);
app.mount("#app");