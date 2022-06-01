import { describe, expect, it } from 'vitest';

import { mount } from '@vue/test-utils';
import QTable from '../QTable.vue';

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(QTable, { props: { msg: 'Hello Vitest' } });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
