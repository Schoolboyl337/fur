<template>
<div class="antialiased bg-gray-400">
  <header class="lg:px-16 px-6 bg-gray-100 flex flex-wrap items-center lg:py-0 py-2">
    <div class="flex-1 flex justify-between items-center">
      
      <a href="https://rickandmortyapi.com" alt="dota2.com" target="_blank"> <img src="../assets/logo.png" viewBox="0 0 256 256" alt="#" ></a>
    
  </div>

   <label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-200" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></label>
  <input class="hidden" type="checkbox" id="menu-toggle" />

  <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
    <nav>
      <ul class="lg:flex items-center justify-between text-base text-gray-100 pt-4 lg:pt-0">
        <li><h1 class="text-2xl font-medium  lg: px-0">Dota 2 Pro-tracker</h1></li>
        <li><a class="lg:p-4 py-3 px-0 block text-green-600 hover:text-opacity-75" href="#" @click="Home">Главная</a></li>
        <li><a class="lg:p-4 py-3 px-0 block text-green-600 hover:text-opacity-50" href="#" @click="Games">Матчи</a></li>
        <li><a class="lg:p-4 py-3 px-0 block text-green-600 hover:text-opacity-50 lg:mb-0 mb-2" href="#" @click="Callback">Обратная связь</a></li>
      </ul>
    </nav>
    

  </div>

  </header>
</div>
</template>

<script>

export default {
    methods:{
        Home: function() {
            this.$router.push('/')
        },
        Callback:function() {
            this.$router.push('/callback')
        },
        Games:function() {
            this.$router.push('/games')
        },
    }
}
</script>

<style>
  #menu-toggle:checked + #menu {
        display: block;
  }    

img{
    width: 100px;
    height: 100px;
      }
li{
  font-family: 'Roboto', sans-serif;
}
h1{
  margin-bottom:6px;
}


      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
</style>
      
