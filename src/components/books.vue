<template>
  <v-dialog max-width="600">
    <template v-slot:activator="{ props: activatorProps }">
      <div class="book" v-bind="activatorProps">
        <img :src="path" :alt="book?.title"/>
      </div>  
    </template>

    <template v-slot:default="{ isActive }">
      <v-card :title="book?.title">
        <v-card-text>
          <p class="auth"><strong>{{book?.auth}}</strong></p>
          {{ book?.coments }}
          <p class="auth-coments">Comentário feito por: {{book?.authComents}}</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            @click="isActive.value = false"
          ><v-icon icon="mdi-close-box" size="34">
            
          </v-icon></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script lang="ts">
import type { BookViewModel } from '../model/interface/book-view.model.ts'
import type { PropType } from 'vue';

export default {
  props: {
    book: {
      type: Object as PropType<BookViewModel>,
      required: true
    }
  },
  data() {
    return {
      path: `cover/${this.book?.id}`,
      titleModal: `${this.book?.title} - ${this.book?.auth}`

    }
  },
  mounted() {
    console.log(this.book.id)
  },
}
</script>

<style lang="scss">
  .book {
    width: 10vw;
    height: 32vh;
    box-shadow: 17px 32px 51px -28px rgba(0,0,0,0.38);
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .auth { margin-bottom: 12px; }
  .auth-coments {
    margin-top: 8px;
  }
</style>