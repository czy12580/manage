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
            <mu-card-header :title="name" sub-title="admin@qq.com">
              <mu-avatar slot="avatar">
                <img src="../assets/logo.png" width="50" height="50">
              </mu-avatar>
            </mu-card-header>
          </mu-card>
          <mu-list>
            <mu-list-item button @click="toUserList">
              <mu-list-item-title>用户列表</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button>
              <mu-list-item-title>用户管理</mu-list-item-title>
            </mu-list-item>
            <mu-list-item button @click="toAdminTool">
              <mu-list-item-title>管理员工具</mu-list-item-title>
            </mu-list-item>
            <mu-list-item @click="open = false" button>
              <mu-list-item-title>Close</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-drawer>
      </div>
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
            position: 'left'
          }
        },
        methods: {
          logout() {
            localStorage.removeItem('token');
            this.$router.push('/login');
          },
          toUserList() {
            this.$router.push('/userlist');
          },
          toAdminTool() {
            this.$router.push('/admintool')
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

</style>
