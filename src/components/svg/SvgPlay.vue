<template>
  <svg :style="{width:size,height:size,fill:color}" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
  </svg>
</template>

<script>
export default {
  props: {
    size: {type: String,default: '36px',required: false},
    color: {type: String,default: 'white',required: false},
  }
}
</script>