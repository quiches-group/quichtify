<template>
  <div class="lists">
    <div
        class="columns"
        v-for="(column) in columns"
    >
      <ul>
        <li
            class="list-item"
            draggable="true"
            v-for="(item) in column.items"
        >{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QDragAndDrop',
  components: {},
  eel: '#app',
  props: {
    column: Array,
    color: String
  },
  data() {
    return {
      columns: this.column,
    };
  },
  mounted() {
        this.dragAndDrop();
  },
  methods: {
    dragAndDrop(){
      const listItems = document.getElementsByClassName("list-item");
      const columns = document.getElementsByClassName("columns");

      let draggedItem = null;
      for (let item of listItems) {
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

        for (let column of columns) {
          column.addEventListener("dragover", function (e) {
            e.preventDefault();
          });

          column.addEventListener("dragenter", function (e) {
            e.preventDefault();
            this.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
          });

          column.addEventListener("dragleave", function (e) {
            e.preventDefault();
            this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
          });

          column.addEventListener("drop", function (e) {
            this.append(draggedItem);
            this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
          });
        }
      }
    },
  }
};
</script>

<style>
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

.lists .columns {
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

.lists .columns .list-item {
  background-color: #f3f3f3;
  border-radius: 8px;
  padding: 15px 20px;
  text-align: center;
  margin: 4px 0;
}

</style>
