<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <span slot="tabbaritem_icon" class="iconfont icon61"></span>
      <span slot="tabbaritem_text">首页</span>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <span slot="tabbaritem_icon" class="iconfont iconicon_category"></span>
      <span slot="tabbaritem_text">分类</span>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <span slot="tabbaritem_icon" class="iconfont icongouwuche"></span>
      <span slot="tabbaritem_text">购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <span slot="tabbaritem_icon" class="iconfont iconwo"></span>
      <span slot="tabbaritem_text">我的</span>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
@import '~@/assets/icon/iconfont.css';
@import '~@/assets/css/tabbar/maintabbar.css';
</style>
