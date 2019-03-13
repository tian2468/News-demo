<template>
  <div>
    <ul class="footer">
      <li>
        <router-link :to="{name:'list'}">新闻列表</router-link>
      </li>
      <li>
        <router-link :to="{name:'user'}">个人中心</router-link>
      </li>
    </ul>
    <router-view/>
  </div>
</template>
<script>
export default {};
</script>

<style scoped lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.footer li {
  flex: 1;
  font-size: 16px;
  text-align: center;
  border-top: 1px solid #13ccec;
  background: #fff;
  a {
    color: #666;
    display: block;
    &.active {
      background: #42b983;
      color: #fff;
    }
  }
}
</style>