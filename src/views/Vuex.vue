<template>
  <div>
    <Index></Index>
    <div>
      <div class="content">
        <mu-container>
          <mu-card style="width: 100%;padding: 30px 50px;min-width: 1000px;">
            <h3 class="title">Vuex使用</h3>

            <div><h2>总票数：{{nodeVoteCount + vueVoteCount}}</h2></div>

            <div style="margin-bottom: 50px;">
              <img src="../assets/人工智能3.jpg" alt="">
              <span>票数:{{nodeVoteCount}}</span>
              <button @click="increment('nodeVetoCount')">投票</button>
            </div>

            <div>
              <img src="../assets/轮播图3.jpg" alt="">
              <span>票数：{{vueVoteCount}}</span>
              <button @click="increment('vueVetoCount')">投票</button>
            </div>

          </mu-card>
        </mu-container>

      </div>
    </div>
  </div>
</template>
<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  import Index from '@/views/Index'
  export default {
    name: "Vuex",
    components: {
      Index
    },
    methods: {
      //异步
      // ...mapActions([
      //   'increment1', 'increment2'
      // ])

      //同步
      ...mapMutations([
        'INCREMENT1', 'INCREMENT2'
      ]),

      increment(index) {
        if (index === 'nodeVetoCount') {
          this.INCREMENT1();
        } else {
          this.INCREMENT2()
        }
      }
    },
    computed: {
      ...mapState(['nodeVoteCount', 'vueVoteCount'])
    }
  }
</script>

<style scoped>
  img {
    width: 100%;
    height: 100%;
  }

</style>
