<template>
  <div id="blogIndex">
    <Header />
    <BlogList />
    <!-- 返回顶部 -->
    <el-backtop>
      <i class="tyh tyh-huojian" />
    </el-backtop>
  </div>
</template>

<script>
import BlogList from './components/BlogList' // 博客列表组件
import Header from './components/Header' // 博客列表组件
export default {
  name: 'blogIndex',
  components: {
    BlogList,
    Header
  }
}
</script>

<style lang="less" scoped>
#blogIndex {
  padding: 15px 0 50px;
}
</style>
