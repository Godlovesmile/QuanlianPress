<template>
  <div id="app">
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
    'Nav': Nav
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 1200px;
  margin: 66px auto;
}
</style>
