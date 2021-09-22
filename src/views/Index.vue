<template>
    <div>
        <mu-appbar style="width: 100%;min-width: 1260px;" color="primary" title="后台">
          <mu-button flat slot="left" @click="open = !open">MENU</mu-button>
          <mu-button flat slot="right" v-if="isLogin">{{name}}</mu-button>
          <mu-button flat slot="right" v-if="isLogin" @click="logout">退出</mu-button>
        </mu-appbar>
      <div>
        <mu-drawer :open.sync="open" :docked="false" :left="position === 'left'">
          <mu-card style="width: 100%;background-color: #2196f3;">
            <mu-card-header :title="name" sub-title="超级管理员">
              <mu-avatar slot="avatar">
                <img src="../assets/logo.png" width="50" height="50">
              </mu-avatar>
            </mu-card-header>
          </mu-card>
          <mu-list>
            <mu-list-item button v-for="item, index in menuList" :key="index" @click="toPage(item.index)">
              <mu-list-item-title>{{ item.title }}</mu-list-item-title>
            </mu-list-item>
            <!--<mu-list-item @click="open = false" button>-->
              <!--<mu-list-item-title>关闭</mu-list-item-title>-->
            <!--</mu-list-item>-->
          </mu-list>
        </mu-drawer>
      </div>
      <div class="main"></div>
    </div>
</template>

<script>
    export default {
        name: "Index",
        data() {
          return {
            isLogin: false,
            name: '',
            open: false,
            position: 'left',
            menuList: [
              {
                title: "用户列表",
                index: '/userlist'
              },
              {
                title: "用户管理",
                index: '/'
              },
              {
                title: "管理员工具",
                index: '/admintool'
              },
            ]
          }
        },
        methods: {
          logout() {
            localStorage.removeItem('token');
            this.$router.push('/login');
          },
          toPage(index) {
            this.$router.push(index);
          }
        },
        mounted() {
          var token = localStorage.getItem('token');
          if (token) {
            this.isLogin = true;
            this.name = token;
          }
        }
    }
</script>

<style scoped>
  .main {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(../assets/login-bg.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center 0;
    z-index:-10;
  }
</style>
