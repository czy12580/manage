<template>
    <div>
      <Index></Index>
      <div>
        <div class="content">
          <mu-container>
            <mu-card>
              <h3>管理员工具</h3>
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
        }
    }
</script>

<style scoped>

</style>
