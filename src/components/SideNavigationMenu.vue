<template>
  <div :style="{width:active?'360px':'0'}" class="sidenav unselectable">
    
    <div class="center" style="justify-content:flex-end;">
      <div @click="toggle" style="margin-right:12px;cursor:pointer;">
        <SvgClose size="69px" color="white"></SvgClose>
      </div>
    </div>
    
    <div class="center">
      <img height="120" alt="Indigene logo" src="../assets/logo.png">
    </div>
    <br>

    <router-link @click="toggle()" to="/">• Tourism</router-link>
    <div class="whiteLine"></div>
    <router-link @click="toggle()" to="/">• Souvenirs</router-link>
    <div class="whiteLine"></div>
    <router-link @click="toggle()" to="/">• Traditions</router-link>
    <div class="whiteLine"></div>
    <router-link @click="toggle()" to="/">• Rural agricultural</router-link>
    <div class="whiteLine"></div>
    <router-link @click="toggle()" to="/">• Indigenous businesses</router-link>
    <div class="whiteLine"></div>

    <br>

    <MyButton :router="true" route="/translator">Language translator</MyButton>

    <br/><br/>
  </div>
</template>

<script>
import SvgClose from '@/components/svg/SvgClose.vue';
import MyButton from '@/components/MyButton.vue';
export default {
  name: 'SideNavigationMenu',
  components: {
    SvgClose,
    MyButton,
  },
  props: {
  	active: {type: Boolean,required: true},
    toggle: {type: Function,required: true},
  },
}
</script>

<style scoped>
.sidenav {
  overflow:auto;
  overflow-x: hidden;
  height: 100%;
  width: 0px;
  z-index: 55;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgb(28,28,28);
  padding-top: 36px;
  transition: 0.23s;
  box-shadow: -5px -5px 9px rgb(255,255,255);
}
.sidenav a {
  cursor: pointer;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  padding: 8px 8px 8px 21px;
  text-decoration: none;
  font-size: 21px;
  color: white;
  text-align: left;
  display: block;
  transition: 0.3s;
}
.sidenav a:hover {
  font-size: 22px;
  color: white;
}
.whiteLine {
  width: 72%;
  height: 1px;
  background-color: white;
  margin-left: 21px;
  margin-bottom: 12px;
}
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 12px;}
  .sidenav a {font-size: 16px;}
}
</style>