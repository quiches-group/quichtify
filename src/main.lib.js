import components from '@/components';
import '@/index.css';

export default {
  install(app, option) {
    app.use(components);
  },
};
