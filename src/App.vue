<template>
<router-view></router-view>
</template>
<script >
import Navbar from './components/Navbar.vue'
export default({
  name: 'Home',
  components: {
    Navbar
  }
  
})
</script>