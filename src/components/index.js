import QHelloWorld from './QHelloWorld/QHelloWorld.vue';
import QTabs from './QTabs/QTabs.vue';
import QTab from './QTabs/QTab.vue';
import QCard from './QCard/QCard.vue';
import QCardTitle from './QCard/QCardTitle.vue';
import QCardContent from './QCard/QCardContent.vue';
import QLoader from './QLoader/QLoader.vue';
// TODO: 2 - Import your main component here

export default {
  install: (app) => {
    app.component('QHelloWorld', QHelloWorld);
    app.component('QTabs', QTabs);
    app.component('QTab', QTab);
    app.component('QCard', QCard);
    app.component('QCardTitle', QCardTitle);
    app.component('QCardContent', QCardContent);
    app.component('QLoader', QLoader);
    // TODO: 3 - Declare your component here
  },
};

export { QHelloWorld, QTabs, QTab, QCard, QCardTitle, QCardContent, QLoader };
