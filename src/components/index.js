import QHelloWorld from './QHelloWorld/QHelloWorld.vue';
import QTabs from './QTabs/QTabs.vue';
import QTab from './QTabs/QTab.vue';
import QLoader from './QLoader/QLoader.vue';
import QDropdown from './QDropdown/QDropdown.vue';
// TODO: 2 - Import your main component here

export default {
  install: (app) => {
    app.component('QHelloWorld', QHelloWorld);
    app.component('QTabs', QTabs);
    app.component('QTab', QTab);
    app.component('QLoader', QLoader);
    app.component('QDropdown', QDropdown);
    // TODO: 3 - Declare your component here
  },
};

export { QHelloWorld, QTabs, QTab, QLoader, QDropdown };
