<template>
  <v-row>
    <v-content>
      <v-container fluid class="wrapper">
        <v-row>
          <v-col>
            <drop-list
              :items="items"
              class="list"
              @insert="onInsert($event, 'items')"
              @reorder="$event.apply(items)"
              mode="cut"
            >
              <template v-slot:item="{item}">
                <drag
                  class="item"
                  :class="{ 'selected' : selected.indexOf(item) > -1 }"
                  @click="toggleSelected(items, item)"
                  @cut="remove(items, item)"
                  :data="selection(item)"
                  :key="item.name"
                >{{item.name}}</drag>
              </template>
              <template v-slot:feedback="{data}">
                <template v-if="selected.length > 0">
                  <div v-for="f in data" class="item feedback" :key="f.name">{{f.name}}</div>
                </template>
                <template v-else>
                  <div class="item feedback" :key="data.name">{{data.name}}</div>
                </template>
              </template>
            </drop-list>
          </v-col>
          <v-col>
            <drop-list
              :items="items2"
              class="list"
              @insert="onInsert($event, 'items2')"
              @reorder="$event.apply(items2)"
              mode="cut"
            >
              <template v-slot:item="{item}">
                <drag
                  class="item"
                  :class="{ 'selected' : selected.indexOf(item) > -1 }"
                  @cut="remove(items2, item)"
                  @click="toggleSelected(items2, item)"
                  :data="selection(item)"
                  :key="item.name"
                >{{item.name}}</drag>
              </template>
              <template v-slot:feedback="{data}">
                <template v-if="selected.length > 0">
                  <div v-for="f in data" class="item feedback" :key="f.name">{{f.name}}</div>
                </template>
                <template v-else>
                  <div class="item feedback" :key="data.name">{{data.name}}</div>
                </template>
              </template>
            </drop-list>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-row>
</template>

<script>
import { Drag, DropList } from 'vue-easy-dnd';

export default {
  name: 'DragAndDrop',
  components: {
    Drag,
    DropList,
  },
  data() {
    return {
      items: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
        },
        {
          name: 'More ice cream sandwich',
          calories: 237,
          fat: 9.0,
        },
      ],
      items2: [],
      selected: [],
      selectedList: 0,
    };
  },
  methods: {
    selection(item) {
      return this.selected.length > 0 ? this.selected : item;
    },
    onInsert(event, listName = 'items') {
      if (event.data.length > 0) {
        event.data.forEach((e, idx) => {
          this[listName].splice(event.index + idx, 0, e);
        });
      } else {
        this[listName].splice(event.index, 0, event.data);
      }

      this.selected = [];
    },
    remove(array, value) {
      if (this.selected.length > 0) {
        this.selected.forEach((e) => {
          const index = array.indexOf(e);
          array.splice(index, 1);
        });
      } else {
        const index = array.indexOf(value);
        array.splice(index, 1);
      }
    },
    toggleSelected(listName, item) {
      if (listName !== this.selectedList) {
        this.selected = [];
        this.selectedList = listName;
      }

      const index = this.selected.indexOf(item);
      if (index > -1) {
        this.selected.splice(index, 1);
      } else {
        this.selected.push(item);
      }
    },
  },
};

</script>

<style scoped>

</style>
