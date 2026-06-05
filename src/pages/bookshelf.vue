<template>
  <div class="bookshelf">

    <div v-for="book in books" :key="book.id">
      <Books :book="book"/>
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
  .bookshelf {
    padding: 24px;
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    .books {
    }
  }
</style>