<template>
    <div>

        <h1>Please upload the txt file in this format</h1>
        <h1>example</h1>
        <p>
          directed<br>
          vertex a<br>
          vertex b<br>
          vertex c<br>
          vertex d<br>
          edge a b 24<br>
          edge b d 2<br>
          edge c b 6<br>
          edge d c 11<br>
          </p>
        <el-upload
            class="upload-demo"
            action="http://120.26.196.251:8088/cmp"
            :on-success="handleSuccess"
            :before-upload="beforeUpload"
            >
            <el-button size="small" type="primary">upload</el-button>
            <div slot="tip" class="el-upload__tip">Only txt files can be uploaded and should not exceed 500kb</div>
        </el-upload>
        <div v-if="txtData">
          <div v-if="flag === 1">
            <undirected_graph :parentHeight="400" :parentWidth="400" :links="links" :nodes="nodes"/>
          </div>
          <div v-else>
            <directed_graph :links="links" :nodes="nodes"/>
          </div>
          <h1>Adjacency Matrix</h1>
          <p   style="white-space: pre-line; white-space: pre-wrap;font-family: Courier New ;">{{txtData}}</p>
          <div>
            <el-input v-model="input_start"  placeholder="Please enter a starting point"></el-input>
            <el-input v-model="input_end" placeholder="Please enter an end point"></el-input>
            <el-button type="primary" @click="handleSubmit">Submit</el-button>
          </div>
          <div v-if="stp">
            <p style="white-space: pre-line; white-space: pre-wrap;">The shortest path from {{input_start}} to {{input_end}} is {{stp}}</p>
          </div>
        </div>
    </div>
</template>


<script>
  import axios from 'axios';
  import undirected_graph from '../undirected_graph.vue';
  import directed_graph from '../oriented.vue'
  export default {
    components:{
        undirected_graph,directed_graph
      },
    data() {
      return {
        txtData: '',
        nodes: [],
        links: [],
        input_start: '',
        input_end: '',
        stp: '',
        flag: -1
      };
    },
    methods: {
      beforeUpload(file) {
        // 只接受txt文件
        const isTxt = file.type === 'text/plain';
        if (!isTxt) {
          this.$message.error('只能上传txt文件');
        }
        return isTxt;
      },
      handleSuccess(response,file) {
        const graphData = response;
        if (!graphData) {
          // 处理 graphData 不存在的情况，比如给 nodes 和 links 赋一个空数组
          this.nodes = [];
          this.links = [];
          return;
        }
        this.nodes = Object.values(graphData.nodes).map(node => ({ id: node.id, name: node.name }));
        this.links = Object.values(graphData.links).map(link => ({ source: link.source, target: link.target, weight: link.weight }));
        this.txtData = graphData.adjacencyMatrixString;
        this.flag = graphData.flag;
      },

      handleSubmit() {
        const formData = new FormData();
        formData.append('input_start', this.input_start);
        formData.append('input_end', this.input_end);

        this.$http.post('/getstp', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          // 处理响应
          this.stp = response.data;
          console.log(response);
        })
        .catch(error => {
          // 处理错误
          console.error(error);
        });
      }
      
    }
  }
</script>