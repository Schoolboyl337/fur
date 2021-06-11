<template>
<div class="min-w-screen min-h-screen  flex items-center p-5 lg:p-10 overflow-hidden relative  bg-main">
    <div class="w-full max-w-6xl  rounded-lg bg-green-300  bg-opacity-60  p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div class="relative">
                    <img :src='pic' v-for="pic in pic4a" v-bind:key="pic" class="w-full relative z-10" alt="#">
                    <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
                <div class="mb-10 main-text">
                    <h1 class="font-bold uppercase text-black text-2xl mb-5">Узнай все о <br>{{ username }} </h1>
                    <p class=" uppercase text-black text-base lg:text-xl">«Рик и Морти» — американский комедийный научно-фантастический анимационный сериал, созданный Джастином Ройландом и Дэном Хармоном и выпускаемый в рамках блока Adult Swim на телеканале Cartoon Network. <br>Поздравляю, вы <span class="font-bold sd">{{ Math.abs(gamesNow) }}</span> посетитель! </p>
                </div>
                <div>
                    <div class="inline-block align-bottom ml-10 mr-6 mb-3 lg:mb-0">
                        <button @click="More" class="bg-yellow-300 opacity-80 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i class="mdi mdi-cart -ml-2 mr-2"></i>Персонажи</button>
                    </div>
                    <div class="inline-block align-bottom ml-6 lg:ml-0">
                        <button @click="again" class="bg-yellow-300 opacity-80 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i class="mdi mdi-cart -ml-2 mr-2"></i> Давай Другого!</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { watch } from "@vue/runtime-core";

export default({
    data(){
        return{
        gamesNow: null,
        username: null,
        pic4a: [],
    }
    },
        async mounted(){
            
            let responseNum = await fetch('http://numbersapi.com/random/year?json');
            let jsonNum = await responseNum.json();
            this.gamesNow = (jsonNum['number']);
            
            let randomNum = Math.floor(Math.random()*(671))+1; 
            console.log(randomNum);   
            let responseName = await fetch('https://rickandmortyapi.com/api/character/'+ randomNum);
            let jsonName = await responseName.json();
            this.pic4a.push(jsonName['image'])
            this.username = (jsonName['name']);
            
        },   
        methods: {
            
            async again(){
              this.pic4a = []
            let randomNum = Math.floor(Math.random()*(671))+1; 
            let responseName = await fetch('https://rickandmortyapi.com/api/character/'+ randomNum);
            let jsonName = await responseName.json();
            this.pic4a.push(jsonName['image'])
            this.username = (jsonName['name']);
            },
            
        More: function() {
            this.$router.push('/games')
        }}
        
       
})
</script>
<style>
button:active, button:focus {
  outline: none !important;
}
button::-moz-focus-inner {
  border: 0 !important;
}
.bg-main{
    background: url('../../assets/main.jpg'), rgba(255, 255, 255, 0.1);
    background-blend-mode: color;
    background-position: 0 0;
	background-repeat: no-repeat;
	background-size: 100% 100%;
    
}
.main-text{
    text-shadow: 2px 2px white
}
.sd{
    text-shadow: 2px 2px white
}
@media (max-width:900px){
	.main-text{
	text-shadow: 1px 1px white;
}
}

</style>