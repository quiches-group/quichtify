<template>
  <div class="lists">
    <div
        class="columns"
        v-for="(column) in columns"
    >
      <p class="column_title">{{column.title}}</p>
      <ul>
        <li
            class="list-item"
            draggable="true"
            v-for="(item) in column.items"
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
      default: [
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
      ],
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
.column_title{
  padding: 1em;
}

.lists {
  display: flex;
  flex: 1;
  width: 100%;
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
  border-radius: 4px;
}

.lists .columns .list-item {
  background-color: #fff;
  border-radius: 4px;
  padding: 15px 20px;
  text-align: center;
  margin: 4px 0;
}
</style>
