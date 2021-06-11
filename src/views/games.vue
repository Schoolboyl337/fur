<template>
    <Navbar />
    <Content />
    <Footer />
</template>

<script>

import Navbar from '../components/Navbar.vue'
import Footer from '@/components/footer.vue'
import Content from '@/components/pages/hero.vue'
export default {
  name: 'Games',
  components: {
    Navbar,
    Footer,
    Content
  }
}
</script>