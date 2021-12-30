<template>
    <div>
        <mu-appbar style="width: 100%;min-width: 1260px;position: fixed;top: 0;left: 0;" color="primary" title="后台">
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
      <div class="main">
        <div class="content">
          <!--<mu-container>-->
            <!--<mu-card style="width: 100%;padding: 30px 50px;min-width: 1000px;">-->
              <!--<h3 class="title">欢迎来到管理系统</h3>-->
              <!--<mu-chip class="demo-chip" color="info" v-for="item, index in chips" :key="index" @delete="remove(index)" delete>{{item}}</mu-chip>-->
            <!--</mu-card>-->
          <!--</mu-container>-->
        </div>
      </div>
    </div>
</template>

<script>
  const initChips = ['primary', 'secondary', 'success', 'warning', 'info', 'error'];
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
                title: "Vuex",
                index: '/vuex'
              },
              {
                title: "管理员工具",
                index: '/admintool'
              },
              {
                title: "组件",
                index: '/assembly'
              }
            ],
            chips: [...initChips]
          }
        },
        methods: {
          logout() {
            localStorage.removeItem('token');
            this.$router.push('/login');
          },
          toPage(index) {
            this.$router.push(index);
          },
          remove(index) {
            this.chips.splice(index, 1);
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
  .demo-chip {
    margin: 10px;
  }
</style>
