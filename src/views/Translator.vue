<template>
  <br>
  <h1>Translate from spanish or english to any of the most common indigenous language</h1>
  <br>
  <b>From:</b>
  <br><br>
  <div class="languages">
  	<div @click="()=>selectLanguage1(0)" :class="{active:language1=='English'}">English</div>
  	<div @click="()=>selectLanguage1(1)" :class="{active:language1=='Spanish'}">Spanish</div>
  </div>
  <br><br>
  <b>To:</b>
  <br><br>
  <div class="languages">
  	<div @click="()=>selectLanguage2(0)" :class="{active:language2=='Quechua'}">Quechua</div>
		<div @click="()=>selectLanguage2(1)" :class="{active:language2=='Aymara'}">Aymara</div>
		<div @click="()=>selectLanguage2(2)" :class="{active:language2=='Nahuatl'}">Nahuatl</div>
  </div>
  <br>
  <MyButton v-if="!loading" :myFunc="translate">Translate now</MyButton>
  <div v-else class="center"><Loading></Loading></div>
  <br>
  <p id="answer"></p>
  <br>
  <br>
</template>

<script>
import {ref} from 'vue';
import db from '@/modules/database.js';
import {sayHello} from '@/modules/cloud_functions.js';
import MyButton from '@/components/MyButton.vue';
import Loading from '@/components/Loading.vue';
export default {
  name: 'Translator',
  components: {
    MyButton,
    Loading,
  },
  setup(){
  	const loading = ref(false);
  	const language1 = ref('English');
  	const language2 = ref('Quechua');
  	const text = ref('');
  	const selectLanguage1 = (index)=>{
  		language1.value = index==0?'English':'Spanish';
  	}
  	const selectLanguage2 = (index)=>{
  		switch (index) {
  			case 0:
  				language2.value = 'Quechua';
  				break;
  			case 1:
  				language2.value = 'Aymara';
  				break;
  			case 2:
  				language2.value = 'Nahuatl';
  				break;
  		}
  	}
  	const translate = async()=>{
			try {
				loading.value = true;
				const urlDoc = await db.getDoc('Data','url');
				const url = urlDoc.text;
			  const response = await fetch(`${url}?language1=${language1}&language2=${language2}&text=${text}`);
			  const data = await response.json();
			  document.getElementById('answer').innerHTML = data.text;
			} catch (error) {
				alert('An error happened, try later');
			  console.error(error);
			} finally {
				loading.value = false;
			}
  	}
  	return {
  		language1,
  		language2,
  		selectLanguage1,
  		selectLanguage2,
  		text,
  		translate,
  		loading
  	}
  }
}
</script>

<style scoped>
h1, p {
	width: 90%;
	margin: auto;
}
.languages {
	display: flex;
	justify-content: space-evenly;
	flex-wrap: wrap;
}
.languages div {
	padding: 12px;
	padding-left: 30px;
	padding-right: 30px;
	border-radius: 23px;
	background-color: white;
	color: black;
	cursor: pointer;
}
.active {
	background-color: black !important;
	color: white !important;
}
</style>