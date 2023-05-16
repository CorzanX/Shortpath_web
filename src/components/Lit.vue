<template>
    <div>
        <el-container>
            <el-container>
              <el-container>
                <el-main >
                    <el-table :data="tableData">
                        <el-table-column prop="type" label="type" width="140">
                        </el-table-column>
                        <el-table-column prop="website" label="website" >
                        </el-table-column>
                    </el-table>
                </el-main>
              </el-container>
            </el-container>
          </el-container>          
    </div>
</template>

<style scoped>
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
      data() {
        const item = {
          type: 'problem',
          website: 'codeforce1111'
        };
        return {
          tableData: Array(20).fill(item)
        }
      }
    };
</script>