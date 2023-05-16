<template>
  <div>
    <div class="nav">
    <div class="logo">
      <img src="../assets/CorzanX.svg" alt="logo">
    </div>
        
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
            
            <el-menu-item index="1" route="/datastc">Data structure</el-menu-item>
            <el-menu-item index="2" route="/algintro">Algorithm introduction</el-menu-item>
            <el-menu-item index="3" route="/algcmp">Algorithm comparison</el-menu-item>
            <el-menu-item index="4" route="/literature">literature</el-menu-item>
        </el-menu>
    </div>
    <div>
    <router-view></router-view>
    </div>
  </div>
</template>

<style>
  .nav {
    display: flex;
    
    
  }
  .logo {
    margin-right: 10px;
  }
</style>


<script>
    export default {
      
      data() {
        return {
          activeIndex: '1'
        };
      },
      created() {
        this.updateActiveIndex();
      },
      watch: {
        $route: function() {
          this.updateActiveIndex();
        }
      },
      methods: {
        updateActiveIndex() {
          if(this.$route.path.startsWith("/datastc")){
            this.activeIndex = '1';
          }
          else if(this.$route.path.startsWith("/algintro")){
            this.activeIndex = '2';
          }
          else if(this.$route.path.startsWith("/algcmp")){
            this.activeIndex = '3';
          }
          else if(this.$route.path.startsWith("/literature")){
            this.activeIndex = '4';
          }
          else{
            this.activeIndex = '1';
          }
          
        },
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
  </script>