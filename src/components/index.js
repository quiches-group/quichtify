import QHelloWorld from './QHelloWorld/QHelloWorld.vue';
import QTabs from './QTabs/QTabs.vue';
import QLoader from './QLoader/QLoader.vue';
import QTab from './QTabs/QTab.vue';
import QInput from './QInput/QInput.vue';
// TODO: 2 - Import your main component here

export default {
  install: (app) => {
    app.component('QHelloWorld', QHelloWorld);
    app.component('QTabs', QTabs);
    app.component('QTab', QTab);
    app.component('QLoader', QLoader);
    app.component('QInput', QInput);
    // TODO: 3 - Declare your component here
  },
};

export { QHelloWorld, QTabs, QTab, QLoader };
