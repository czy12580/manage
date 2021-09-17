<template>
  <div class="login-wrap">
    <div class="login-box">
      <div class="top-img"><img src="@/assets/logo.png"></div>
      <form>
        <div class="item">
          <mu-container>
            <mu-text-field class="mu-input-field" v-model="name" label="用户名" label-float color="#FFF"></mu-text-field>
            <br/>
          </mu-container>
        </div>
        <div class="item">
          <mu-container>
            <mu-text-field v-model="password" label="密码" label-float color="#FFF"
                           :action-icon="visibility ? '隐藏' : '显示'" :action-click="() => (visibility = !visibility)"
                           :type="visibility ? 'text' : 'password'"></mu-text-field>
            <br/>
          </mu-container>
        </div>
        <mu-button @click="login" color="success">登录</mu-button>
      </form>
    </div>
  </div>


</template>

<script>
  export default {
    position: 'top',
    name: "Login",
    data() {
      return {
        name: '',
        password: '',
        visibility: false,
        log: false,
        adminList: []
      }
    },
    methods: {
      login: async function () {
        var that = this;
        this.$axios.get('api/admin')
          .then(function (response) {
            console.log(response.data);
            that.adminList = response.data;
            that.adminList.forEach(function (v) {
              if (that.name == v.name && that.password == v.password) {
                that.log = true;
              }
            });
            if (that.log) {
              localStorage.setItem('token', that.name);
              that.$router.push('/');
              that.$message({
                message: '登录成功',
                type: 'success',
                duration: 2000
              });
            } else {
              that.$message({
                message: '登录失败',
                type: 'error',
                duration: 2000
              });
            }
          });
      }
    }
  }
</script>

<style scoped>
  .login-box {
    width: 400px;
    margin: 200px auto;
    background-color: #41b883;
    position: relative;
    padding: 50px 0;
    border-radius: 10px;
  }

  .top-img {
    width: 100px;
    height: 100px;
    position: absolute;
    top: -50px;
    left: 50%;
    margin-left: -50px;
  }

  img {
    width: 100%;
    height: 100%;
  }

  .item {
    height: 40px;
    margin-bottom: 20px;
  }

  input {
    height: 30px;
    background-color: transparent;
    outline: none;
    border: none;
    border-bottom: 2px solid #FFF;
    color: #FFF;
    font-size: 18px;
  }

  button {
    margin-top: 30px;
    height: 35px;
    width: 60px;
    border-radius: 5px;
    background-color: #FFF;
    color: #41b883;
    outline: none;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #41b883;
    color: #FFF;
  }
</style>
