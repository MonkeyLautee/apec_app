<template>
  <div class="unselectable" :style="{fontSize:size}">
    <a v-if="anchor" :target="target" :href="href" class="styless-a my-button" :style="{color,background}"><slot></slot></a>
    <router-link v-else-if="router" :to="route" class="styless-a my-button" :style="{color,background}"><slot></slot></router-link>
    <div v-else @click="myFunc" class="my-button" :style="{color,background}"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    size:{type:String,default:'21px',required:false},
    color:{type:String,default:'white',required:false},
    background:{type:String,default:'rgb(69,69,69)',required:false},

    myFunc:{type:Function,default:()=>{},required:false},

    router:{type:Boolean,default:false,required:false},
    route:{type:String,default:'/',required:false},

    anchor:{type:Boolean,default:false,required:false},
    href:{type:String,default:'#',required:false},
    target:{type:String,default:'_self',required:false},
  }
}
</script>

<style scoped>
.my-button {
  cursor: pointer !important;
  font-weight: bold;
  border-radius: 23px;
  display: block;
  width: max-content;
  white-space: nowrap;
  padding: 7px 36px;
  margin: 12px auto;
  box-shadow:  3px 3px 9px #101010;
}
.my-button:active {
  box-shadow: inset 5px 5px 8px 1px rgba(0, 0, 0, 0.2),
    inset -5px -5px 8px 0px rgba(77, 71, 100, 0.3),
    inset -1px -2px 2px 0px rgba(77, 71, 100, 0.4);
}
.my-button a {
	cursor: pointer !important;
}
@media screen and (max-width: 500px) {
	.my-button {
    cursor: default;
  }
}
</style>