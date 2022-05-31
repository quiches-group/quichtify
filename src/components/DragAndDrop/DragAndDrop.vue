<template>
  <div id="app">
    <div class="list">
      <transition-group name="flip-list" tag="div">
        <li
          @dragover="(e) => onDragOver(item, i, e)"
          @dragend="(e) => finishDrag(item, i, e)"
          @dragstart="(e) => startDrag(item, i, e)"
          v-for="(item, i) in items"
          class="item"
          :class="{over: (item === over.item && item !== dragFrom),
          [over.dir]: (item === over.item && item !== dragFrom) }"
          draggable="true"
          :key="item"
        >
          {{item.title}}</li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import './DragAndDrop.scss';

export default {
  name: 'DragAndDrop',
  components: {},
  eel: '#app',
  props: ['item'],
  data() {
    return {
      items: this.item,
      over: {},
      startLoc: 0,
      dragging: false,
      dragFrom: {},
    };
  },
  methods: {
    startDrag(item, i, e) {
      this.startLoc = e.clientY;
      this.dragging = true;
      this.dragFrom = item;
      console.log(this.dragFrom);
    },
    finishDrag(item, pos) {
      this.items.splice(pos, 1);
      this.items.splice(this.over.pos, 0, item);
      this.over = {};
    },

    onDragOver(item, pos, e) {
      const dir = (this.startLoc < e.clientY) ? 'down' : 'up';
      setTimeout(() => {
        this.over = { item, pos, dir };
      }, 50);
    },
  },
};
</script>

<style>

</style>
