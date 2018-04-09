<template>
  <div class="app">
    <!-- 导航 -->
    <Nav />
    <router-view class="content" />
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Nav,
    Footer
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  margin: 66px auto;
}
</style>
