<template>
    <Navbar />
    <Main />
    <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/footer.vue'
import Main from '@/components/pages/main.vue'
export default {
  name: 'Home',
  components: {
    Navbar,
    Footer,
    Main
  }
}
</script>
