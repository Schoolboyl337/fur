
<template>
   <div class="min-w-screen min-h-screen  flex items-center p-5 lg:p-10 overflow-hidden relative  bg-main">
<div class="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">

  <div  v-for="(pic,index) in pic4a" v-bind:key="pic" class="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
    <img class="w-full" :src="pic" alt="#" />
    <div @click="deleteCard(index)" class="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded cursor-pointer">X</div>
    <div class="badge absolute top-7 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">{{ status[index] }}</div>
    <div class="info-box text-xs flex p-1 font-semibold text-gray-500 bg-gray-300">
      <p class="mr-1 p-1 px-2 font-bold">{{species[index]}}</p>
      <p class="mr-1 p-1 px-2 font-bold border-l border-gray-400">{{gender[index]}}</p>
      <p class="mr-1 p-1 px-2 font-bold border-l border-gray-400">Episodes: {{episode[index].length}}</p>
      
    </div>
    <div class="desc p-4 text-gray-800">
      <a href="#"  class="title font-bold block ">{{ cardsName[index] }}</a>
      <a  href="#" class="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold ">From {{origin[index].name}}</a>
      <p class="description text-sm block py-2 border-gray-400 mb-2">Last known location: {{lastseen[index].name}}</p>
    </div>
  </div> 
</div>
<div class=" absolute bottom-2 lg:relative">
            <input @keydown.enter="lol" v-model="qq" type="text" class="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"  placeholder="1 to 671" />
            <svg class="w-4 h-4 absolute left-2.5 top-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
        </div>
  <button @click="deleteAll"
                        class="absolute bottom-1 right-0 lg:relative bg-red-500 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit" style="transition: all 0.15s ease 0s;">Очистить
                      </button>
 <!-- <Filter @keydown.enter="lol" /> -->
</div> 

</template>

<script>
import Filter from '../filter.vue';
export default {
  components:{
          Filter
     },
     data(){
        return{
        qq: null,
        pic4a : [], 
        cardsName: [],
        status: [],
        gender:[],
        species:[],
        episode:[],
        origin: [],
        lastseen:[]
        
    }
    },
        async mounted(){  
            let randomNum = Math.floor(Math.random()*(671))+1; 
            let responseName = await fetch('https://rickandmortyapi.com/api/character/'+ randomNum);
            let jsonName = await responseName.json();
            this.pic4a.push(jsonName['image']);
            this.status.push(jsonName['status']);
            this.cardsName.push(jsonName['name']);
            this.gender.push(jsonName['gender']);
            this.species.push(jsonName['species']);
            this.episode.push(jsonName['episode']);
            this.origin.push(jsonName['origin']);
            this.lastseen.push(jsonName['location'])
        },         
      
    methods: {
               async lol() {
                   if (this.qq > 0 && this.qq <= 671){
                     
                   const f = await fetch(`https://rickandmortyapi.com/api/character/${this.qq}`);
                   const data = await f.json();
                   this.status.push(data['status'])
                   this.pic4a.push(data['image']);
                   this.cardsName.push(data['name']);
                   this.gender.push(data['gender'])
                   this.species.push(data['species'])
                   this.episode.push(data['episode'])
                   this.origin.push(data['origin'])
                   this.lastseen.push(data['location'])
                   console.log(data);  
               }
               this.qq = ""
            },
                deleteCard : function(index){
                   this.pic4a.splice(index,1)
                   this.status.splice(index,1) 
                   this.cardsName.splice(index,1)
                   this.gender.splice(index,1)
                   this.species.splice(index,1)
                   this.episode.splice(index,1)
                   this.origin.splice(index,1)
                   this.lastseen.splice(index,1)
                },
                deleteAll : function(){
                    this.pic4a = []
                    this.cardsName = []
                    this.status = []
                    this.gender =[]
                    this.species =[]
                    this.episode =[]
                    this.origin = []
                    this.lastseen = []
                }
                
               
},
        
        
          
       
}
</script>

<style>
  
</style>