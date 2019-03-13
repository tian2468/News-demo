<template>
  <div>
    <h1 style="margin-top:30px;">个人中心</h1>
    <img src="../assets/logo.png" alt>
    <p>
      <button @click="add()">添加</button>
    </p>
  </div>
</template>
<script>
export default {
  name: "user",
  methods: {
    add() {
      this.$router.push("/add");
    }
  }
};
</script>

<style scoped lang="scss">
img {
  margin-top: 30px;
}
button {
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: none;
  background: rgba(65, 184, 131, 1);
  color: #fff;
  outline: none;
  margin-top: 30px;
}
</style>