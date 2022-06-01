import QHelloWorld from '@/components/QHelloWorld/QHelloWorld.vue';
import QLoader from '@/components/QLoader/QLoader.vue';
// TODO: 2 - Import your main component here

export default {
  install: (app) => {
    app.component('QHelloWorld', QHelloWorld);
    app.component('QLoader', QLoader);
    // TODO: 3 - Declare your component here
  },
};
