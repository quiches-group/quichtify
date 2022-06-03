<template>
  <div class="flex w-full min-w-250 max-w-350 h-full p-8 rounded lists">
    <div
        v-for="(column, c) in columns"
        :key="c"
        class="columns flex w-full min-w-250 max-w-350 h-full min-h-150 p-8 rounded"
    >
      <p class="p-4 m-0 box-border">{{column.title}}</p>
      <ul>
        <li
            v-for="(item, i) in column.items"
            :key="i"
            class="list-item my-2 bg-white px-4 py-5 text-center"
            draggable="true"
            :style="{ backgroundColor: color }"
        >{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columnsOfItems: {
      type: Array,
      required: true,
      default: () => ([
        { id: 1, title: 'TODO', items: [
            {id: 1, title: 'Titre 1'},
            {id: 2, title: 'Titre 2'},
          ]
        },
        { id: 2, title: 'IN PROGRESS', items: [
            {id: 3, title: 'Titre 3'},
          ]
        },
        { id: 3, title: 'DONE', items: [
            {id: 4, title: 'Titre 4'},
          ]
        },
      ]),
    },
    color: {
      type: String,
      required: false,
      default: '#fff'
    }
  },
  data() {
    return {
      columns: this.columnsOfItems,
    };
  },
  mounted() {
    this.dragAndDrop();
  },
  methods: {
    dragAndDrop () {
      const listItems = document.getElementsByClassName("list-item");
      const columns = document.getElementsByClassName("columns");

      let draggedItem = null;
      for (const item of listItems) {
        item.addEventListener("dragstart", () => {
          draggedItem = item;
          setTimeout(() => {
            item.style.display = "none";
          }, 0);
        });

        item.addEventListener("dragend", () => {
          setTimeout(() => {
            draggedItem.style.display = "block";
            draggedItem = null;
          }, 0);
        });

        for (const column of columns) {
          column.addEventListener("dragover", (e) => {
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

          column.addEventListener("drop", function () {
            this.append(draggedItem);
            this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
          });
        }
      }
    },
  }
};
</script>

<style scoped>

.lists .columns {
  flex-flow: column;
  background-color: rgba(0, 0, 0, 0.1);
  transition: all 0.2s linear;
  margin: 10px 15px;
}
</style>
