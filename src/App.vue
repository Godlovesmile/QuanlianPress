<template>
  <div class="app">
    <!-- 导航 -->
    <Nav/>
    <router-view class="content"/>
    <Footer/>
  </div>
</template>

<script>
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';

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
.app {
}
.content {
  width: 1200px;
  margin: 66px auto;
}
</style>
