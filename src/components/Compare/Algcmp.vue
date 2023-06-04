<template>
  <div>
      <el-container>
          <el-container>
            <el-aside>
              <el-menu :default-openeds="['1']" router="">
                  
                  <el-submenu index="1">
                    <template slot="title"><i class="el-icon-s-grid"></i>Gragh</template>

                    <el-menu-item-group>
                      <template slot="title">Shortest Path</template>
                      <el-menu-item index="1-1" route="/algcmp/example">Example</el-menu-item>
                      <el-menu-item index="1-2" route="/algcmp/upload">Test</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
            </el-aside>
             <el-container>
                <el-main>
                   <router-view></router-view>
                </el-main>
             </el-container>
          </el-container>
        </el-container>          
  </div>
</template>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    
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
    
  };
</script>