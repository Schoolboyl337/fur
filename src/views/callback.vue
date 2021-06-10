<template>
    <Navbar />
    <Callback />
    <Footer />
</template>

<script>

import Callback from '@/components/pages/callback.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/footer.vue'
export default {
  name: 'Back',
  components: {
    Callback,
    Navbar,
    Footer
  }
}
</script>
