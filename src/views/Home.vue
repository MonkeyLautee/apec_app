<template>

  <div class="image-container">
    <img style="width:100%;" src="../assets/home1.jpg">
    <div class="centered">
      <b>Explore vibrant indigenous cultures through unforgettable journeys</b>
      <MyButton size="23px">Visit them</MyButton>
    </div>
  </div>

  <div class="image-container">
    <img style="width:100%;" src="../assets/home2.jpg">
    <div class="centered">
      <b>Embrace indigenous artistry with authentic cultural keepsakes</b>
      <MyButton size="23px">Buy souvenirs</MyButton>
    </div>
  </div>

  <div class="image-container">
    <img style="width:100%;" src="../assets/home3.jpg">
    <div class="centered">
      <b>Immerse in ancient rituals and preserve indigenous heritage</b>
      <MyButton size="23px">Indigenous traditions</MyButton>
    </div>
  </div>

  <div class="image-container">
    <img style="width:100%;" src="../assets/home4.jpg">
    <div class="centered">
      <b>Experience sustainable farming practices in indigenous communities</b>
      <MyButton size="23px">Buy rural agriculture</MyButton>
    </div>
  </div>

  <div class="image-container">
    <img style="width:100%;" src="../assets/home5.jpg">
    <div class="centered">
      <b>Empower indigenous entrepreneurship and cultural preservation</b>
      <MyButton size="23px">See indigenous businesses</MyButton>
    </div>
  </div>

</template>

<script>
import MyButton from '@/components/MyButton.vue';
export default {
  name: 'Home',
  components: {
    MyButton,
  },
}
</script>

<style scoped>
p {
  font-size: 19px;
}
h2 {
  color: rgb(237, 35, 45);
  font-size: 30px;
}
.image-container {
  height: 600px;
  width: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
  color: white;
}
.image-container img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center center;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.centered b {
  font-size: 47px;
  text-shadow: 2px 2px 7px black;
}
@media screen and (max-width: 500px) {
}
</style>