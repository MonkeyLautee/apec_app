<template>
  <footer>
    
    <div id="first-items">
      <div>
        <b>Social media</b>
        <div class="white-line"></div>
        <div id="contact">
          <div>
            <SvgFacebook color="rgb(12,12,12)" size="36"></SvgFacebook>
            <a class="styless-a">Facebook</a>
          </div>
          <div>
            <SvgInstagram color="rgb(12,12,12)" size="36"></SvgInstagram>
            <a class="styless-a">Instagram</a>
          </div>
          <div>
            <SvgYouTube color="rgb(12,12,12)" size="36"></SvgYouTube>
            <a class="styless-a">YouTube</a>
          </div>
        </div>
      </div>
      <div>
        <b>Subscription</b>
        <div class="white-line"></div>
        <div>
          <input id="subscribe-name" type="text" placeholder="Name">
          <br><br>
          <input id="subscribe-email" type="email" placeholder="Email">
          <div v-if="loading" class="center" style="margin:7px;"><Loading></Loading></div>
          <MyButton v-else :myFunc="subscribe">Subscribe</MyButton>
        </div>
      </div>
    </div>
    <p>Copyright © 2023 • Developed by <a href="https://yosyrick.tech/software/solicitud" target="_blank">Yosy&Rick Technologies S.A.C.</a></p>
    <br>
  </footer>
</template>

<script>
import {ref} from 'vue';
import db from '../modules/database';
import SvgFacebook from '@/components/svg/SvgFacebook.vue';
import SvgInstagram from '@/components/svg/SvgInstagram.vue';
import SvgYouTube from '@/components/svg/SvgYouTube.vue';
import MyButton from '@/components/MyButton.vue';
import Loading from '@/components/Loading.vue';
export default {
  name: 'MyFooter',
  components: {
    SvgFacebook,
    SvgInstagram,
    SvgYouTube,
    MyButton,
    Loading,
  },
  props: {
    height: {type: String,default: '150px',required: false},
  },
  setup(){
    const loading = ref(false);
    const subscribe=async()=>{
      const name = document.getElementById('subscribe-name').value;
      const email = document.getElementById('subscribe-email').value;
      if(name&&email){
        if(name.trim()==''){
          console.log('Invalid name');
          return;
        }
        if(email.trim()==''){
          console.log('Invalid email');
          return;
        }
        try {
          loading.value=true;
          await db.createDoc('Subscribers',{name,email,date:Date.now()});
          loading.value=false;
          alert('You have been subscribed, thank you');
          document.getElementById('subscribe-name').value='';
          document.getElementById('subscribe-email').value='';
        } catch(e) {
          alert('An error happened, try it later');
          loading.value=false;
          console.log(e);
        }
      }
    }
    return {
      loading,
      subscribe,
    }
  }
}
</script>

<style scoped>
footer {
  font-size: 18px;
  background-color: rgb(74,74,74);
  color: rgb(230, 230, 230);
  padding-top: 12px;
}
footer > div {
  margin-top: 12px;
  margin-bottom: 12px;
}
footer a {
  color: rgb(200, 200, 200);
}
footer p {
  margin: 0;
}
#first-items {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 7px;
}
#first-items > div {
  width: 45%;
}
#first-items > div:last-child a div {
  cursor: pointer;
  color: royalblue;
  font-weight: bold;
  background-color: rgb(40, 40, 40);
  border-radius: 16px;
  display: inline-block;
  padding: 7px 36px;
  margin: 12px;
}
.white-line {
  height: 1px;
  width: 72%;
  margin: auto;
  margin-bottom: 12px;
  margin-top: 3px;
  background-color: white;
}
#contact div {
  font-weight: bolder;
  margin-bottom: 7px;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
#contact a {
  cursor: pointer;
}
#contact div:hover {
  font-size: 19px;
}
input {
  background: none;
  border: 2px solid white;
  border-radius: 23px;
  color: white;
  font-size: 16px;
  padding: 12px;
  width: 69%;
  transition: all 0.2s ease-in-out;
}
input::placeholder {
  color: white;
  opacity: 0.5;
}
input:focus {
  outline: none;
  border-color: rgb(237, 35, 45);
}
@media screen and (max-width: 500px) {
	#first-items > div {
    width: 100%;
  }
}
</style>