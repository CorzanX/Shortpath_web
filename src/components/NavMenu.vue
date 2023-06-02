<template>
  <div>
    <div class="nav">
    <div class="logo">
      <img src="../assets/CorzanX.svg" alt="logo">
    </div>
        
        <el-menu :default-openeds="['1']" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
            
            <el-menu-item index="1" route="/datastc">Data structure</el-menu-item>
            <el-menu-item index="2" route="/algintro">Algorithm introduction</el-menu-item>
            <el-menu-item index="3" route="/algcmp">Algorithm comparison</el-menu-item>
            <el-menu-item index="4" route="/material">Material</el-menu-item>
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
  .el-container{
    height: 800px; 
    border: 1px solid #eee
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    width: 25%;
    overflow: auto;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    overflow: auto;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }


  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
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
          else if(this.$route.path.startsWith("/material")){
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