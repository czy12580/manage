<template>
  <div>
    <Index></Index>
    <div class="content">
      <mu-container>
        <mu-card style="width: 100%;padding: 70px;min-width: 1000px;">
          <h3 class="title">用户列表</h3>
          <a class="add-btn" @click="addUser()"><img src="../assets/添加.png" width="40" height="40"></a>
          <mu-data-table :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="userList">
            <template slot-scope="scope">
              <td>{{ scope.row.id }}</td>
              <td>{{ scope.row.phone }}</td>
              <td>{{ scope.row.password }}</td>
              <td>{{ scope.row.name }}</td>
              <td>{{ scope.row.email }}</td>
              <td>
                <mu-menu>
                  <mu-button color="secondary" small>操作</mu-button>
                  <mu-list slot="content">
                    <mu-list-item button @click="edit($event, scope.row)">
                      <mu-list-item-title>编辑</mu-list-item-title>
                    </mu-list-item>
                    <mu-list-item button @click="del($event, scope.row)">
                      <mu-list-item-title>删除</mu-list-item-title>
                    </mu-list-item>
                  </mu-list>
                </mu-menu>
              </td>
            </template>
          </mu-data-table>
        </mu-card>
      </mu-container>
    </div>

    <!--添加表单-->
    <mu-dialog width="800" :open.sync="addForm" :esc-press-close="false" :overlay-close="false">
      <mu-appbar style="width: 100%;" color="primary" title="用户信息">
        <mu-button flat slot="right" @click="closeDialog">x</mu-button>
      </mu-appbar>
      <div class="form-content">
        <mu-container>
          <mu-form ref="form" :model="newUser" class="mu-demo-form">
            <mu-form-item label="用户名" prop="name" :rules="usernameRules">
              <mu-text-field v-model="newUser.name" prop="name"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="密码" prop="password" :rules="passwordRules">
              <mu-text-field type="password" v-model="newUser.password" prop="password"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="手机号" prop="phone" :rules="phoneRules">
              <mu-text-field v-model="newUser.phone" prop="phone"></mu-text-field>
            </mu-form-item>
            <mu-form-item label="邮箱" prop="email" :rules="emailRules">
              <mu-text-field v-model="newUser.email" prop="email"></mu-text-field>
            </mu-form-item>
            <mu-form-item>
              <mu-button color="primary" @click="submit">提交</mu-button>
            </mu-form-item>
          </mu-form>
        </mu-container>
         <!--<mu-text-field class="mu-input-field" v-model="newUser.name" label="用户名" label-float></mu-text-field>-->
         <!--<mu-text-field class="mu-input-field ml30" v-model="newUser.password" label="密码" label-float></mu-text-field>-->
         <!--<mu-text-field class="mu-input-field" label="邮箱" v-model="newUser.email" label-float></mu-text-field>-->
         <!--<mu-text-field class="mu-input-field ml30" v-model="newUser.phone" label="手机号码" label-float></mu-text-field>-->
        <!--<div>-->
          <!--<mu-button color="primary" @click="submit">提交</mu-button>-->
        <!--</div>-->
      </div>

    </mu-dialog>

    <!--编辑表单-->
    <mu-dialog width="800" :open.sync="openForm" :esc-press-close="false" :overlay-close="false">
      <mu-appbar style="width: 100%;" color="primary" title="用户信息">
        <mu-button flat slot="right" @click="closeDialog">x</mu-button>
      </mu-appbar>
      <div class="form-content">
        <mu-text-field class="mu-input-field" v-model="formList.name" label="用户名" label-float></mu-text-field>
        <mu-text-field class="mu-input-field ml30" v-model="formList.password" label="密码" label-float></mu-text-field>
        <mu-text-field class="mu-input-field" v-model="formList.phone" label="手机号" label-float></mu-text-field>
        <mu-text-field class="mu-input-field ml30" v-model="formList.email" label="邮箱" label-float></mu-text-field>
        <div>
          <mu-button color="primary" @click="update">提交</mu-button>
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
              {title: 'ID', width: 100, name: 'ID'},
              {title: '手机号码', width: 180, name: 'phone'},
              {title: '密码', width: 180, name: 'password'},
              {title: '用户名', width: 150, name: 'name'},
              {title: '邮箱', width: 210, name: 'email'},
              {title: '操作',width: 140, name: 'action'}
            ],
            openForm: false,
            addForm: false,
            formList: [],
            newUser: {
              name: '',
              password: '',
              phone: '',
              email: ''
            },
            usernameRules: [
              {validate: (val) => !!val, message: '必须填写用户名'},
              {validate: (val) => val.length >= 3, message: '用户名长度大于3'}
            ],
            passwordRules: [
              {validate: (val) => !!val, message: '必须填写密码'},
              {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
            ],
            phoneRules: [
              {validate: (val) => !!val, message: '必须填写手机号'},
            ],
            emailRules: [
              {validate: (val) => !!val, message: '必须填写邮箱'}
            ]
          }
      },
      created() {
          var that = this;
          this.$axios.get('api/user')
            .then(function (response) {
              that.userList = response.data;
            });
          this.$axios.get('api/admin')
            .then(function (response) {
              console.log(response);
            })
      },
      methods: {
        lnitializationData() {//初始化页面数据
          this.$axios.get('api/adduser', {},
            {emulateJSON: true}
          ).then((response) => {
            this.msg.pagTotal = response.data.data.totalElements;
            this.systManage = response.data.data.content;
          })
        },
        handleSortChange(name, order) {
          this.userList = this.userList.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
        },
        edit($event, obj) {
          this.openForm = true;
          this.formList = obj;
          this.isEdit = true;
        },
        del($event, obj) {
          let that = this;
          this.$axios.post('api/deleteUser', obj.id)
            .then(function (response) {
              that.$router.go(0);
              that.$message({
                message: '删除成功',
                type: 'success',
                duration: 2000
              });
            })
        },
        addUser() {
          this.addForm = true;
          this.isEdit = false;
        },
        closeDialog() {
          this.openForm = false;
          this.addForm = false;
          this.isEdit = false;
          this.newUser = {
            name: '',
            password: '',
            phone: '',
            email: ''
          }
        },
        submit() {
          let that = this;
          this.$refs.form.validate().then((result) => {
            var data = that.newUser;
            this.addForm = false;
            console.log(data);
            this.$axios.post('api/adduser', data)
              .then(function (response) {
                that.$message({
                  message: '添加成功',
                  type: 'success',
                  duration: 2000
                });
                that.$router.go(0);
              })
              .catch(function (error) {
                console.log(error);
              })
          });
        },
        update() {
          var that = this;
          var data = this.formList;
          this.openForm = false;
          console.log(data);
          this.$axios.post('api/updateUser', data)
            .then(function (response) {
              that.$message({
                message: '修改成功',
                type: 'success',
                duration: 2000
              });
            })
            .catch(function (error) {
              console.log(error);
            })
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
