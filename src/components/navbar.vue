<template>
  <div class="nav-bar">
    <div class="nav-bar__logo" @click="goToHome">
      <img src="../assets/img/logo.png" alt="Bora Ler">
    </div>

    <div class="nav-bar__navigation">
      <router-link to="/bookshelf"><v-icon icon="mdi-book-open-variant-outline" size="44"/>Estante</router-link>
      <router-link to="/about"><v-icon class="icon-about" icon="mdi-sticker-emoji" size="34"/>Sobre</router-link>
    </div>

    <v-menu location="bottom">
      <template v-slot:activator="{ props }">
        <div class="menu-humburguer" v-bind="props">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </div>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in itensMenuResponsive" :key="index" :value="index">
          <v-list-item-title class="menu-itens">
            <router-link :to="item.path"><v-icon :icon="item.icon" size="44"/>{{ item.title }}</router-link>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script lang="ts">
  import { useRouter } from 'vue-router'

  export default {
    data () {
      return {
        router: useRouter(),
        itensMenuResponsive: [
          {title: 'Estante', icon: 'mdi-book-open-variant-outline', path: '/bookshelf'},
          {title: 'Sobre', icon: 'mdi-sticker-emoji', path: '/about'},
        ]
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

    .menu-humburguer {
      color: #1e6091;

    }
  }

  div.v-list-item-title {
    a {
      text-decoration: none;
      color: #1e6091;
    }
  }

  @media (min-width: 413px) {
    .menu-humburguer {
      display: none;
    }
  }
  

  @media (max-width: 412px) {
    .nav-bar__navigation {
      display: none;
    }

    .nav-bar {
      height: 100px;
      justify-content: space-between;

      &__logo {
        height: 100px;
      }
    }
  }

</style>