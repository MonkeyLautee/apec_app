<template>
  <button id="menu-button">
    <div></div>
    <div></div>
    <div></div>
  </button>
</template>

<script>
export default {
  name: 'MenuButton',
}
</script>

<style scoped>
#menu-button {
  width: 3.6rem;
  height: 3rem;
  border: 0;
  background: transparent;
  gap: 0.65rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}
#menu-button > div {
  background: white;
  height: 4px;
  width: 100%;
  border-radius: 5px;
  transition: all 0.5s;
  transform-origin: left;
}
</style>