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
import QNavbar from './QNavbar/QNavbar.vue';
import QNavbarContent from './QNavbar/QNavbarContent.vue';
import QMenu from './QMenu/QMenu.vue';
import QMenuItem from './QMenu/QMenuItem.vue';
import QFormatNumber from './QFormatNumber/QFormatNumber.vue';
import QButton from './QButton/QButton.vue';
// TODO: 2 - Import your main component here

const components = [
  QHelloWorld,
  QLoader,
  QTabs,
  QTab,
  QInput,
  QCard,
  QCardTitle,
  QCardContent,
  QDropdown,
  QRow,
  QCol,
  QSeparator,
  QModal,
  QModalContent,
  QCarousel,
  QCarouselItem,
  QNavbar,
  QNavbarContent,
  QMenu,
  QMenuItem,
  QFormatNumber,
  QButton
]

export default {
  install (Vue) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
};
