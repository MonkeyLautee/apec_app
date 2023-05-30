<template>
  <SideNavigationMenu :active="menuActive" :toggle="toggleMenu"></SideNavigationMenu>
  <div id="page">
    <div @click="toggleMenu" :style="{
      opacity:menuActive?'0.36':'1.0',
      display:menuActive?'block':'none'
    }"></div>
    <MyNav :toggle="toggleMenu"></MyNav>
    <router-view/>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import {ref} from 'vue';
import SideNavigationMenu from '@/components/SideNavigationMenu.vue';
import MyFooter from '@/components/MyFooter.vue';
import MyNav from '@/components/MyNav.vue';
export default {
  components: {
    SideNavigationMenu,
    MyFooter,
    MyNav,
  },
  setup(){
    const menuActive = ref(false);
    const toggleMenu = ()=>menuActive.value=!menuActive.value;
    return {
      menuActive,
      toggleMenu,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
}
.unselectable {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.styless-a:link, .styless-a:visited {
  text-decoration: inherit;
  color: inherit;
  cursor: auto;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
/*For this website*/
h1, h2, h3 {
  color: rgb(237,35,45);
}
/*Scoped style*/
#page > div:nth-child(1) {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 48;
}
</style>