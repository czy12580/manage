<template>
    <div>
      <Index></Index>
      <div>
        <div class="content">
          <mu-container>
            <mu-card style="width: 100%;padding: 30px 50px;min-width: 1000px;">
              <h3 class="title">管理员工具</h3>
              <div class="item-box">
                <a class="item" href="" v-for="item in itemList">{{item.name}}</a>
              </div>
            </mu-card>
          </mu-container>

        </div>
      </div>
    </div>
</template>

<script>
  import Index from '@/views/Index'
    export default {
        name: "AdminTool",
        components: {
          Index
        },
      data() {
          return {
            itemList: [
              {
                name: '账号存储工具',
                index: '/account'
              },
              {
                name: '账号存储工具',
                index: '/account'
              },
              {
                name: '账号存储工具',
                index: '/account'
              },
              {
                name: '账号存储工具',
                index: '/account'
              },
              {
                name: '账号存储工具',
                index: '/account'
              },
              {
                name: '账号存储工具',
                index: '/account'
              },
              {
                name: '账号存储工具',
                index: '/account'
              },
              {
                name: '账号存储工具',
                index: '/account'
              },
            ]
          }

      }
    }
</script>

<style scoped>
  .title {
    font-size: 26px;
  }
  .item-box {
    width: 100%;
    height: auto;
    border: 1px solid #a4a4a4;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .item {
    display: block;
    height: 180px;
    width: 180px;
    background-color: #2196f3;
    border-radius: 10px;
    margin: 20px;
    font-size: 20px;
    color: #FFF;
    text-align: center;
    line-height: 180px;
    font-weight: bold;
    box-shadow: 8px 8px 3px #6a6a6a;
    transition: transform 0.5s ease;
    -webkit-transition: -webkit-transform 0.5s ease;
  }
  .item:hover {
    /*animation: flow 0.7s;*/
    transform: translateY(-10px);
    transition: transform 0.5s ease;
    -webkit-transition: -webkit-transform 0.5s ease;
  }
  /*@keyframes flow {*/
    /*0% {transform: translateY(-5px)}*/
    /*50%{transform: translateY(-10px)}*/
    /*100% {transform: translateY(5px)}*/
  /*}*/
</style>
