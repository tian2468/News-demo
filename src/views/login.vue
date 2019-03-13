<template>
  <div>
    <h3 style="margin:30px 0;">{{title}}</h3>
    <form action class="login" v-if="isReg">
      <label for="user">
        <span>用户名：</span>
        <input type="text" name="user" v-model="user">
      </label>
      <label for="password">
        <span>密码：</span>
        <input type="password" name="password" v-model="password">
      </label>
      <p class="buttonBox">
        <button type="button" @click="reg()">登录</button>
        <button type="button" @click="res()">注册</button>
      </p>
    </form>
    <form action class="reset" v-else>
      <label for="user">
        <span>用户名：</span>
        <input type="text" name="user" v-model="user">
      </label>
      <label for="password">
        <span>密码：</span>
        <input type="password" name="password" v-model="password">
      </label>
      <label for="password">
        <span>再次输入密码：</span>
        <input type="password" name="password" v-model="repeatPassword">
      </label>
      <p class="buttonBox">
        <button type="button" @click="addUser()">确定</button>
        <button type="button" @click="cloose()">取消</button>
      </p>
    </form>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      isReg: true,
      user: "",
      password: "",
      repeatPassword: "",
      title: "欢迎登录"
    };
  },
  mounted() {
    console.log(this.title);
  },
  methods: {
    reg() {
      let user = localStorage.getItem("user");
      let password = localStorage.getItem("password");
      if (this.user != user || this.user == "") {
        // console.log(this.user + "----" + user);
        alert("该用户不存在！");
      } else if (this.password != password || this.password == "") {
        // console.log(this.password + "----" + password);
        alert("密码不正确！");
      } else {
        this.user = "";
        this.password = "";
        this.$router.push("/home/list");
      }
    },
    res() {
      this.isReg = false;
      console.log(this.isReg);
      this.title = "欢迎注册";
      this.user = "";
      this.password = "";
    },
    addUser() {
      if (this.password == "" && this.repeatPassword == "" && this.user == "") {
        alert("不能为空");
      } else if (this.password !== this.repeatPassword) {
        alert("两次密码输入不一致");
        this.password = "";
        this.repeatPassword = "";
      } else {
        localStorage.setItem("user", this.user);
        localStorage.setItem("password", this.password);
        this.isReg = true;
        this.user = "";
        this.password = "";
        this.repeatPassword = "";
      }
    },
    cloose() {
      this.isReg = true;
      this.title = "欢迎登录";
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  display: flex;
  flex-flow: column;
  width: 100%;
  margin: 0 auto;
  label {
    flex: 1;
    margin-bottom: 30px;
    display: flex;
    span {
      width: 100px;
      text-align: right;
      vertical-align: middle;
    }
    input {
      width: 200px;
      height: 25px;
      border: 1px solid #666;
      text-indent: 1em;
      border-radius: 5px;
      outline: none;
      vertical-align: middle;
    }
  }
  .buttonBox {
    width: 100%;
    height: 30px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-top: 30px;
    button {
      width: 100px;
      border: none;
      margin-left: 10px;
      outline: none;
      border-radius: 5px;
      background: none;
      &:first-of-type {
        border: 1px solid #42b983;
        background: #42b983;
        color: #fff;
      }
      &:last-of-type {
        border: 1px solid #42b983;
        background: #fff;
        color: #42b983;
      }
    }
  }
}
.reset {
  display: flex;
  flex-flow: column;
  width: 100%;
  margin: 0 auto;
  label {
    flex: 1;
    margin-bottom: 30px;
    display: flex;
    span {
      width: 129px;
      text-align: right;
      vertical-align: middle;
    }
    input {
      width: 200px;
      height: 25px;
      border: 1px solid #666;
      text-indent: 1em;
      border-radius: 5px;
      outline: none;
      vertical-align: middle;
    }
  }
  .buttonBox {
    width: 100%;
    height: 30px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-top: 30px;
    button {
      width: 100px;
      border: none;
      margin-left: 10px;
      outline: none;
      border-radius: 5px;
      background: none;
      &:first-of-type {
        border: 1px solid #42b983;
        background: #42b983;
        color: #fff;
      }
      &:last-of-type {
        border: 1px solid #f82b2b;
        background: #f82b2b;
        color: #fff;
      }
    }
  }
}
</style>

