<template>
  <div>
    <el-container>
      <el-container>
        <el-container>
          <el-main>
            <el-table :data="currentPageData">
              <!-- 表格列定义 -->
              <el-table-column label="title">
                <template slot-scope="scope">
                  <el-link :href="scope.row.url" target="_blank" type="primary">{{ scope.row.title }}</el-link>
                </template>
              </el-table-column>
              <el-table-column prop="difficulty" label="difficulty" width="180">
                <template slot-scope="scope">
                  <span :style="getDifficultyStyle(scope.row.difficulty)">{{ scope.row.difficulty }}</span>
                </template>
              </el-table-column>
              <el-table-column prop="source" label="source" width="180">
              </el-table-column>
            </el-table>
            <el-pagination
              @current-change="handlePageChange"
              :current-page="currentPage"
              :page-size="pageSize"
              :total="tableData.length">
             </el-pagination>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axios from 'axios';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import { i18n } from '../../main.js'
locale.use(lang);

export default {
  
  created() {
    axios.get("/exercise").then((response) => {
      this.tableData = response.data;
    });
    this.$i18n.locale = 'en';
  },
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 10,
    };
  },
  computed: {
    currentPageData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.tableData.slice(startIndex, endIndex);
    }
  },
  methods: {
    handlePageChange(currentPage) {
      this.currentPage = currentPage;
    },
    getDifficultyStyle(difficulty) {
      switch (difficulty) {
        case 'Easy':
          return 'color: green';
        case 'Medium':
          return 'color: #FFD700';
        case 'Hard':
          return 'color: red';
        default:
          return '';
      }
    }
  },
  i18n,
};
</script>




