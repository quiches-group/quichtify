<template>
  <v-row>
    <!-- Task -->
      <v-row>
        <h2 class="orange_personalize--text font-weight-thin">Tâches</h2>
      </v-row>
      <v-row>
        <!-- To do task -->
        <v-col class="col-md-5 ml-8">
          <h3 class="title_task font-weight-thin">A faire</h3>
          <div class="content_list">
            <drop-list
              :items="toDo"
              class="list"
              @insert="onInsert($event, 'toDo')"
              @reorder="$event.apply(toDo)"
              mode="cut"
            >
              <template v-slot:item="{item}">
                <drag
                  class="item pt-5"
                  @cut="remove(toDo, item)"
                  :data="selection(item)"
                  :key="item.content"
                >
                  <div class="content_note_text">
                    <p>{{ item.content }}</p>
                    <div class="btn_action_note_text">
                      <v-btn
                        class="btn_set"
                        x-small
                        fab
                        color="transparent"
                        elevation="0"
                        @click="setFieldToUpdate(item.id, item.content, item.is_done)"
                        @click.stop="dialog_update = true"
                      >
                        <v-icon
                          color="black" dense>
                          mdi-pencil
                        </v-icon>
                      </v-btn>
                      <v-btn
                        class="btn_delete"
                        x-small
                        fab
                        color="transparent"
                        elevation="0"
                        @click="remove_task(item.id, item.is_done)">
                        <v-icon
                          color="black" dense>
                          mdi-delete-outline
                        </v-icon>
                      </v-btn>
                    </div>
                  </div>
                </drag>
              </template>
              <template v-slot:feedback="{data}">
                <template v-if="selected.length > 0">
                  <div
                    v-for="f in data"
                    class="item feedback" :key="f.content">{{ f.content }}
                  </div>
                </template>
                <template v-else>
                  <div class="item feedback" :key="data.content">{{ data.content }}</div>
                </template>
              </template>
            </drop-list>

            <!-- Add Task -->
            <v-hover v-slot="{ hover }">
              <v-card
                max-width="185"
                max-height="200"
                class="mx-auto add_task"
                :elevation="hover ? 6 : 2"
                :class="{ 'on-hover': hover }"
                @click.stop="dialog_task = true"
              >
                <v-card-text class="pa-0">
                  <v-list class="add_task_text_content">
                    <v-list-item>
                      <v-img
                        width="14px"
                        src='@/assets/icons/plus.png'>
                      </v-img>
                      <v-list-item-title class="white--text ml-2 text_add_task">
                        Ajouter une tâche
                      </v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-hover>
          </div>
        </v-col>

      <!-- Done task -->
      <v-col class="col-md-5 ml-8">
        <h3 class="title_task font-weight-thin">Finis</h3>
        <div class="content_list">
          <drop-list
            :items="done"
            class="list"
            @insert="onInsert($event, 'done')"
            @reorder="$event.apply(done)"
            mode="cut"
          >
            <template v-slot:item="{item}">
              <drag
                class="item pt-5"
                @cut="remove(done, item)"
                :data="selection(item)"
                :key="item.content"
              >
                <div class="content_note_text">
                  <p>{{ item.content }}</p>
                  <div class="btn_action_note_text">
                    <v-btn
                      class="btn_set"
                      x-small
                      fab
                      color="transparent"
                      elevation="0"
                      @click="setFieldToUpdate(item.id, item.content, item.is_done)"
                      @click.stop="dialog_update = true"
                    >
                      <v-icon
                        color="black" dense>
                        mdi-pencil
                      </v-icon>
                    </v-btn>
                    <v-btn
                      class="btn_delete"
                      x-small
                      fab
                      color="transparent"
                      elevation="0"
                      @click="remove_task(item.id, item.is_done)">
                      <v-icon
                        color="black" dense>
                        mdi-delete-outline
                      </v-icon>
                    </v-btn>
                  </div>
                </div>
              </drag>
            </template>
            <template v-slot:feedback="{data}">
              <template v-if="selected.length > 0">
                <div
                  v-for="f in data"
                  class="item feedback" :key="f.content">
                  {{ f.content }}
                </div>
              </template>
              <template v-else>
                <div class="item feedback" :key="data.content">{{ data.content }}</div>
              </template>
            </template>
          </drop-list>
        </div>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
import { Drag, DropList } from 'vue-easy-dnd';

export default {
  name: 'DragAndDrop',
  components: {
    Drag,
    DropList,
  }
};

</script>

<style scoped>

</style>
