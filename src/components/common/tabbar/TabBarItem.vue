<template>
  <div
    class="tabbaritem"
    @click="changePath"
    :class="{ activeColor: isActive }"
  >
    <!-- 这里使用具名插槽 -->
    <slot name="tabbaritem_icon"></slot>
    <slot name="tabbaritem_text"></slot>
  </div>
</template>

<script>
export default {
  props: {
    /**
     * 这里是传递静态的prop，所以在接收的组件使用时不需要加前缀:
     * 传递动态prop，在接收的组件使用时要加:,即v-bind的语法糖
     *  */
    path: {
      type: String
    }
  },
  computed: {
    isActive() {
      /**
       * 调用$route.path方法
       * 查找当前路由中的路径是否有这个路径
       * 判断indexOf的返回值是否为-1
       *  */

      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    changePath() {
      /**
       * 在 Vue 实例内部，你可以通过 $router 访问路由实例。
       * 因此你可以调用 this.$router.push
       * 想要导航到不同的 URL，则使用 router.push 方法
       * 这里是通过穿进来的路径导航到对应的路径
       *
       * 声明式导航：<router-link to="...">
       * 编程式导航：<router.push>
       */
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.activeColor {
  color: rgb(255, 0, 34);
}
</style>
