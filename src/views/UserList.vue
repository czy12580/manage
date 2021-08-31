<template>
  <div>
    <Index></Index>
    <div class="content">
      <mu-container>
        <mu-card style="width: 100%;padding: 70px;">
          <h3 class="title">用户列表</h3>
          <a class="add-btn" @click="addUser()"><img src="../assets/添加.png" width="40" height="40"></a>
          <mu-data-table :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="userList">
            <template slot-scope="scope">
              <td>{{ scope.row.userid }}</td>
              <td>{{ scope.row.password }}</td>
              <td>{{ scope.row.username }}</td>
              <td>{{ scope.row.email }}</td>
              <td>
                <mu-menu>
                  <mu-button color="secondary" small>操作</mu-button>
                  <mu-list slot="content">
                    <mu-list-item button @click="edit($event, scope.row)">
                      <mu-list-item-title>编辑</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                      <mu-list-item-title>修改修改修改</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button>
                      <mu-list-item-title>修改修改修改修改</mu-list-item-title>
                    </mu-list-item>
                  </mu-list>
                </mu-menu>
              </td>
            </template>
          </mu-data-table>
        </mu-card>
      </mu-container>
    </div>

    //添加表单
    <mu-dialog width="800" :open.sync="addForm" :esc-press-close="false" :overlay-close="false">
      <mu-appbar style="width: 100%;" color="primary" title="用户信息">
        <mu-button flat slot="right" @click="closeDialog">x</mu-button>
      </mu-appbar>
      <div class="form-content">
         <mu-text-field class="mu-input-field" v-model="newUser.username" label="用户名" label-float></mu-text-field>
         <mu-text-field class="mu-input-field ml30" v-model="newUser.password" label="密码" label-float></mu-text-field>
         <mu-text-field class="mu-input-field" label="邮箱" v-model="newUser.email" label-float></mu-text-field>
         <mu-text-field class="mu-input-field ml30" v-model="newUser.userid" label="手机号码" label-float></mu-text-field>
        <div>
          <mu-button color="primary" @click="submit">提交</mu-button>
        </div>
      </div>

    </mu-dialog>

    //编辑表单
    <mu-dialog width="800" :open.sync="openForm" :esc-press-close="false" :overlay-close="false">
      <mu-appbar style="width: 100%;" color="primary" title="用户信息">
        <mu-button flat slot="right" @click="closeDialog">x</mu-button>
      </mu-appbar>
      <div class="form-content">
         <mu-text-field class="mu-input-field" v-model="formList.username" label="用户名" label-float></mu-text-field>
         <mu-text-field class="mu-input-field ml30" v-model="formList.password" label="密码" label-float></mu-text-field>
         <mu-text-field class="mu-input-field" v-model="formList.email" label="邮箱" label-float></mu-text-field>
        <div>
          <mu-button color="primary" @click="submit">提交</mu-button>
        </div>
      </div>

    </mu-dialog>
  </div>
</template>

<script>
  import Index from '@/views/Index'
    export default {
        name: "UserList",
        components: {
          Index
        },
      data() {
          return {
            date: undefined,
            userList: [],
            isEdit: false,
            sort: {
              name: '',
              order: 'asc'
            },
            columns: [
              {title: 'ID', width: 200, name: 'ID'},
              {title: '密码', width: 200, name: 'password'},
              {title: '用户名', width: 100, name: 'username'},
              {title: '邮箱', width: 200, name: 'email'},
              {title: '操作',width: 200, name: 'action'}
            ],
            openForm: false,
            addForm: false,
            formList: [],
            newUser: {
              username: '',
              password: '',
              email: '',
              userid: ''
            }
          }
      },
      created() {
          var that = this;
          this.$axios.post('http://127.0.0.1/api/alluser.php')
            .then(function (response) {
              that.userList = response.data;
            });
          this.$axios.get('api/listUsers')
            .then(function (response) {
              console.log(response);
            })
      },
      methods: {
          handleSortChange(name, order) {
            this.userList = this.userList.sort((a, b) => order === 'asc' ? a[name] -b[name] : b[name] - a[name]);
          },
          edit($event, obj) {
            this.openForm = true;
            this.formList = obj;
            this.isEdit = true;
          },
          addUser() {
            this.addForm = true;
            this.isEdit = false;
          },
          closeDialog() {
            this.openForm = false;
            this.addForm = false;
            this.isEdit = false;
          },
          submit() {
            if (this.isEdit) {
              var data = this.formList;
              this.openForm = false;
              console.log(data);
            } else {
              var data = this.newUser;
              this.addForm = false;
              console.log(data);
            }
          }
      }
    }
</script>

<style scoped>
  .title {
    position: absolute;
    left: 50px;
    top: 10px;
  }
  .form-content {
    position: relative;
    padding: 50px;
  }
  .ml30 {
    margin-left: 30px;
  }
  .add-btn {
    position: absolute;
    top: 20px;
    right: 50px;
    cursor: pointer;
  }
</style>
