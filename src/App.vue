<template>
  <div class="app">
    <!-- 导航 -->
    <Nav/>
    <router-view class="content"/>
  </div>
</template>

<script>
import Nav from '../src/components/Nav';

export default {
  name: 'App',
  components: {
    Nav
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
