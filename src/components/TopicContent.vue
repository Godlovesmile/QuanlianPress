<template>
  <div class="content">
      我是测试内容
      {{this.$store.getters.topicID}}
  </div>
</template>

<script>
export default {
  props: ['topicID'],
  data () {
      return {
          typeID: this.topicID
      };
  },
  created () {
    //   console.log(this.typeID);
    console.log(2333);
  }
};
</script>

<style lang="scss" scoped>

</style>

