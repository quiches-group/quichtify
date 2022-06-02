<template>
<!--  <div id="app">-->
<!--    <div class="list">-->
<!--      <transition-group name="flip-list" tag="div">-->
<!--        <li-->
<!--          @dragover="(e) => onDragOver(item, i, e)"-->
<!--          @dragend="(e) => finishDrag(item, i, e)"-->
<!--          @dragstart="(e) => startDrag(item, i, e)"-->
<!--          v-for="(item, i) in items"-->
<!--          class="item"-->
<!--          :class="{over: (item === over.item && item !== dragFrom),-->
<!--          [over.dir]: (item === over.item && item !== dragFrom) }"-->
<!--          draggable="true"-->
<!--          :key="item"-->
<!--          :style="{ backgroundColor: backgroundColor }"-->
<!--        >{{item.title}}-->
<!--        </li>-->
<!--      </transition-group>-->
<!--    </div>-->
<!--  </div>-->
  <div class="lists">
    <div class="list">
      <ul>
        <li
            class="list-item"
            draggable="true"
            v-for="(item, i) in items"
        >{{item.title}}</li>
      </ul>
    </div>

    <div class="list"></div>
    <div class="list"></div>
  </div>
</template>

<script>

import {list} from "postcss";

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
      // backgroundColor: this.color,
      // over: {},
      // startLoc: 0,
      // dragging: false,
      // dragFrom: {},
    };
  },
  mounted() {
        this.dragAndDrop();
  },
  methods: {
    dragAndDrop(){
      const listItems = document.querySelectorAll(".list-item");
      const lists = document.querySelectorAll(".list");

      let draggedItem = null;

      for (let i = 0; i < listItems.length; i++) {
        const item = listItems[i];

        item.addEventListener("dragstart", function () {
          draggedItem = item;
          setTimeout(() => {
            item.style.display = "none";
          }, 0);
        });

        item.addEventListener("dragend", function () {
          setTimeout(() => {
            draggedItem.style.display = "block";
            draggedItem = null;
          }, 0);
        });

        for (let j = 0; j < lists.length; j++) {
          const list = lists[j];

          list.addEventListener("dragover", function (e) {
            e.preventDefault();
          });

          list.addEventListener("dragenter", function (e) {
            e.preventDefault();
            this.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
          });

          list.addEventListener("dragleave", function (e) {
            e.preventDefault();
            this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
          });

          list.addEventListener("drop", function (e) {
            this.append(draggedItem);
            this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
          });
        }
      }
    },
    //NEW DRAG AND DROP
    // async dragStart(item){
    //   await item.addEventListener("dragstart", function () {
    //     this.draggedItem = item;
    //     setTimeout(() => {
    //       item.style.display = "none";
    //     }, 0);
    //   });
    // },
    // async dragEnd(item){
    //   await item.addEventListener("dragend", function () {
    //     setTimeout(() => {
    //       this.draggedItem.style.display = "block";
    //       // this.draggedItem = null;
    //     }, 0);
    //   });
    // },
    // async dragOver(list) {
    //   await list.addEventListener("dragover", function (e) {
    //     e.preventDefault();
    //   });
    // },
    // async dragEnter(list){
    //   await list.addEventListener("dragenter", function (e) {
    //     e.preventDefault();
    //     this.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
    //   });
    // },
    // async dragLeave(list){
    //   await list.addEventListener("dragleave", function (e) {
    //     e.preventDefault();
    //     this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    //   });
    // },
    // async drop(list, draggedItem){
    //   await list.addEventListener("drop", function (e) {
    //     this.append(draggedItem);
    //     this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    //   });
    // }
    //LAST DRAG AND DROP
    //   startDrag(item, i, e) {
    //     this.startLoc = e.clientY;
    //     this.dragging = true;
    //     this.dragFrom = item;
    //   },
    //   finishDrag(item, pos) {
    //     this.items.splice(pos, 1);
    //     this.items.splice(this.over.pos, 0, item);
    //     this.over = {};
    //   },
    //   onDragOver(item, pos, e) {
    //     const dir = (this.startLoc < e.clientY) ? 'down' : 'up';
    //     setTimeout(() => {
    //       this.over = { item, pos, dir };
    //     }, 50);
    //   },
    // },
  }
};
</script>

<style>
/*LAST DRAG AND DROP*/
/*.list > div {*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*}*/

/*.item {*/
/*  width: 180px;*/
/*  padding: 10px;*/
/*  margin: 10px auto 10px 10px;*/
/*  color: white;*/
/*  font-family: sans-serif;*/
/*  border-radius: 4px;*/
/*  display: inline-block;*/
/*  position: relative;*/
/*  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);*/
/*  cursor: grab;*/
/*}*/

/*.item:hover{*/
/*  opacity: 0.7;*/
/*}*/

/*.flip-list-move {*/
/*  transition: transform .2s;*/
/*}*/

/*.over {*/
/*  opacity: .6;*/
/*}*/
/*NEW DRAG AND DROP*/
body {
  font-family: sans-serif;
  background-color: #ffce00;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  width: 100vw;
  height: 100vw;
  flex-flow: column;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}

.lists {
  display: flex;
  flex: 1;
  width: 100%;
  /* overflow-x: scroll; */
}

.lists .list {
  display: flex;
  flex-flow: column;
  flex: 1;
  width: 100%;
  min-width: 250px;
  max-width: 350px;
  height: 100%;
  min-height: 150px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 0 15px;
  padding: 8px;
  transition: all 0.2s linear;
}

.lists .list .list-item {
  background-color: #f3f3f3;
  border-radius: 8px;
  padding: 15px 20px;
  text-align: center;
  margin: 4px 0;
}

</style>
