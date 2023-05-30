<template>
  <svg :style="{width:size,height:size,fill:color}" viewBox="0 0 24 24">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
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