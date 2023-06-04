<template>
  <div>
      <el-container>
          <el-container>
            <el-aside >
              <el-menu :default-openeds="['1']" router>
                  <el-submenu index="1">
                    <template slot="title"><i class="el-icon-s-grid"></i>Gragh</template>
                    <el-menu-item-group>
                      <template slot="title">Shortest Path</template>
                      <el-menu-item index="1-1" route="/algintro/dij" @click="handleMenuItemClick">Dijkstra</el-menu-item>
                      <el-menu-item index="1-2" route="/algintro/fly" @click="handleMenuItemClick">Floyd</el-menu-item>
                      <el-menu-item index="1-3" route="/algintro/SPFA" @click="handleMenuItemClick">SPFA</el-menu-item>
                      <el-menu-item index="1-4" route="/algintro/bf" @click="handleMenuItemClick">Bellman-Ford</el-menu-item>
                      <el-menu-item index="1-4" route="/algintro/diy" @click="handleMenuItemClick">By yourself</el-menu-item>
                    </el-menu-item-group>
                  </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
              <el-main>
                
                <div v-if="showDiv">
                  <undirected_graph :parentHeight="200" :parentWidth="200" :links="links" :nodes="nodes"/>
                  <h1>How do we find the shortest path between two points? </h1>
                </div>
                <router-view></router-view>
              </el-main>
            </el-container>
          </el-container>
        </el-container>          
  </div>
</template>


<script>
  import * as d3 from 'd3';
  import undirected_graph from '../undirected_graph.vue';
  export default {
    components:{
        undirected_graph,
      },
    data() {
    return {
      showDiv: true,
      nodes: [
          { id: 0, name: 'A' },
          { id: 1, name: 'B' },
          { id: 2, name: 'C' },
          { id: 3, name: 'D' },
          { id: 4, name: 'E' }
          ],
      links: [
          { source: 0, target: 1 , weight: 5},
          { source: 1, target: 2 , weight: 3},
          { source: 2, target: 3 , weight: 4},
          { source: 3, target: 4 , weight: 6},
          { source: 4, target: 0 , weight: 7},
          { source: 0, target: 3 , weight: 7}
        ],
      simulation: null,
      link: null,
      node: null,
      label: null,
    };
  },
  mounted() {

  },
  methods: {
    handleMenuItemClick() {
      this.showDiv = false;
    },
    
    clearMainContent() {
      this.$refs.elMain.innerHTML = '';
    },
    
    }
  }
  

</script>