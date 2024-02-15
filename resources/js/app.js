import './bootstrap';
import {createApp} from "vue/dist/vue.esm-bundler.js";

// import Test from '../js/scr/components/Test.vue';
// import Test from '@/components/Test.vue';
import Test from '@/components/Test.vue';
if (document.getElementById("app") !== null) {
    createApp(Test).mount("#app")
}