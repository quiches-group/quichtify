import QHelloWorld from '@/components/QHelloWorld/QHelloWorld.vue';
// TODO: 2 - Import your main component here

export default {
  install: (app) => {
    app.component('QHelloWorld', QHelloWorld);
    // TODO: 3 - Declare your component here
  },
};
