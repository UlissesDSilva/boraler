<template>
  <div class="nav-bar">
    <div class="nav-bar__logo" @click="goToHome">
      <img src="../assets/img/logo.png" alt="Bora Ler">
    </div>

    <div class="nav-bar__navigation">
      <router-link to="/bookshelf"><v-icon icon="mdi-book-open-variant-outline" size="44"/>Estante</router-link>
      <router-link to="/about"><v-icon class="icon-about" icon="mdi-sticker-emoji" size="34"/>Sobre</router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import { useRouter } from 'vue-router'
  export default {
    data () {
      return {
        router: useRouter()
      }
    },
    methods: {
      goToHome() {
        this.router.push('/')
      }
    }
  }
</script>

<style lang="scss">
  .nav-bar {
    height: 150px;
    display: flex;
    align-items: center;
    color: #fff;
    padding: 12px 24px;
    background: #fff;

    &__logo {
      cursor: pointer;
      height: 140px;

      img {
        height: 100%;
      }
    }

    &__navigation {
      a {
        text-decoration: none;
        font-size: 20px;
        font-weight: 600;
        color: #1e6091;
        margin-right: 12px;
      }

      i {
        color: #1e6091;
      }
    }
  }
</style>