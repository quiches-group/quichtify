import QHelloWorld from './QHelloWorld/QHelloWorld.vue';
import QLoader from './QLoader/QLoader.vue';
import QTab from './QTabs/QTab.vue';
import QTabs from './QTabs/QTabs.vue';
import QInput from './QInput/QInput.vue';
import QCard from './QCard/QCard.vue';
import QCardTitle from './QCard/QCardTitle.vue';
import QCardContent from './QCard/QCardContent.vue';
import QDropdown from './QDropdown/QDropdown.vue';
import QRow from './QGrid/QRow.vue';
import QCol from './QGrid/QCol.vue';
import QSeparator from './QSeparator/QSeparator.vue';
import QModal from './QModal/QModal.vue';
import QModalContent from './QModal/QModalContent.vue';
import QCarousel from './QCarousel/QCarousel.vue';
import QCarouselItem from './QCarousel/QCarouselItem.vue';
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
    app.component('QInput', QInput);
    app.component('QDropdown', QDropdown);
    app.component('QRow', QRow);
    app.component('QCol', QCol);
    app.component('QSeparator', QSeparator);
    app.component('QModal', QModal);
    app.component('QModalContent', QModalContent);
    app.component('QCarousel', QCarousel);
    app.component('QCarouselItem', QCarouselItem);
    // TODO: 3 - Declare your component here
  },
};

export { QHelloWorld, QTabs, QTab, QCard, QCardTitle, QCardContent, QLoader, QDropdown, QRow, QCol, QSeparator, QModal, QModalContent, QCarousel, QCarouselItem };
