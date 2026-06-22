<template>
  <div class="bookshelf">
    
    <div class="container">
      <div v-for="book in books" :key="book.id">
        <Books :book="book"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BookService from '@/services/bookservice/service.ts'
export default {
  data() {
    return {
      books: [] as any[]
    }
  },
  mounted() {
    this.getAllBooks()
  },
  methods: {
    getAllBooks() {
      this.books = BookService.getAll()
    }
  }
}
</script>

<style lang="scss">
  @media (min-width: 447px) {
    .bookshelf {
      height: 100%;
      padding: 24px;
      background-image: url('../assets/img/fundo.png');
      background-repeat: repeat;
      .container {
        display: flex;
        gap: 53px;
        flex-wrap: wrap;
        margin-left: 70px;
      }
    }
  }

  @media (max-width: 446px) {
    .bookshelf {
      height: 100%;
      padding: 24px;
      background-image: url('../assets/img/fundo.png');
      background-repeat: repeat;
      .container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        row-gap: 19px;
        align-items: center;
      }
    }
  }
</style>