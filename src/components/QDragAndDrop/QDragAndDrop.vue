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
          :style="{ backgroundColor: backgroundColor }"
        >{{item.title}}
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>

export default {
  name: 'QDragAndDrop',
  components: {},
  eel: '#app',
  props: {
    item: Array,
    color: String
  },
  data() {
    return {
      items: this.item,
      backgroundColor: this.color,
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
.list > div {
  display: flex;
  flex-direction: column;
}

.item {
  width: 180px;
  padding: 10px;
  margin: 10px auto 10px 10px;
  color: white;
  font-family: sans-serif;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  cursor: grab;
}

.item:hover{
  opacity: 0.7;
}

.flip-list-move {
  transition: transform .2s;
}

.over {
  opacity: .6;
}
</style>
