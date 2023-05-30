<template>
	<nav>
    <router-link class="styless-a" to="/" style="cursor:pointer;">
      <img height="60" alt="Indigene logo" src="../assets/logo.png" style="margin-left:12px;">
    </router-link>
    <router-link class="styless-a" to="/" style="cursor:pointer;">
      <b>Cultural exchange marketplace</b>
    </router-link>
    <MenuButton @click="toggle" style="margin-right:12px;"></MenuButton>
  </nav>
</template>

<script>
import { ref } from 'vue';
import MenuButton from '@/components/MenuButton.vue';
export default {
  name: 'MyNav',
  components: {
    MenuButton,
  },
  props: {
    toggle: {type: Function,required: true},
  },
}
</script>

<style scoped>
nav {
  position: sticky;
  top:0;
  width: 100%;
  z-index: 47;
  background-color: rgb(28,28,28);
  height: 72px;
  box-shadow: 2px 2px 5px grey;
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
}
nav b {
  color: white;
  font-size: 28px;
  text-shadow: 2px 2px 7px black;
}
</style>