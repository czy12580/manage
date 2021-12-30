<template>
    <div>
      <Index></Index>
      <div>
        <div class="content">
        <mu-container>
          <mu-card>
              <div class="carousel">
                <transition name="slow" mode="out-in">
                  <img v-for="item, index in imgList" :key="index" :src="imgList[currentIndex]" v-if="currentIndex === index ">
                </transition>



                <div class="pre-btn" @click="change(preIndex)">
                  <img src="../assets/previous.png" alt="">
                </div>

                <div class="next-btn" @click="change(nextIndex)">
                  <img src="../assets/next.png" alt="">
                </div>

                <div class="point">
                  <li v-for="item,index in imgList" :key="index" :class="{active: currentIndex == index}"
                      @click="change(index)">{{index+1}}
                  </li>
                </div>
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
        name: "Assembly",
      components: {
          Index
      },
      data() {
          return {
            imgList: [
              require('@/assets/人工智能3.jpg'),
              require('@/assets/轮播图3.jpg'),
              require('@/assets/轮播图2.jpg')
            ],
            currentIndex: 0
          }
      },
      methods: {
          change(index) {
            this.currentIndex = index;
            let img = document.getElementsByTagName("img");
          }
      },
      computed: {
          preIndex() {
            if (this.currentIndex == 0) {
              return this.imgList.length-1;
            } return this.currentIndex-1
          },
        nextIndex() {
            if (this.currentIndex == this.imgList.length-1) {
              return 0;
            } return this.currentIndex+1;
        }
      }
    }
</script>

<style scoped>
  .carousel {
    width: 100%;
    height: auto;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
  }
  .carousel img {
    width: 100%;
    height: 100%;
    display: block;
  }
  .pre-btn {
    position: absolute;
    top: 50%;
    left: 5%;
    cursor: pointer;
    width: 50px;
    height: 50px;
    margin-top: -25px;
  }
  .next-btn {
    position: absolute;
    top: 50%;
    right: 5%;
    cursor: pointer;
    width: 50px;
    height: 50px;
    margin-top: -25px;
  }
  .point {
    position: absolute;
    color: #FFF;
    bottom: 10%;
    left: 47%;
  }
  .point li {
    cursor: pointer;
    list-style: none;
    display: inline-block;
    margin: 5px;
  }
  .active {
    color: orangered;
  }
  @keyframes show {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    /*50% {*/
      /*opacity: 0.5;*/
      /*transform: translateX(50%);*/
    /*}*/
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes hide {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    /*50% {*/
      /*opacity: 0.5;*/
      /*transform: translateX(-50%);*/
    /*}*/
    100% {
      opacity: 0;
      transform: translateX(-100%);
    }

  }
  .slow-enter-active {
    animation: show 0.8s;
  }
  .slow-leave-active {
    animation: hide 0.8s;
  }
  .slow-enter, .slow-leave-to {
    opacity: 0;
  }

</style>
