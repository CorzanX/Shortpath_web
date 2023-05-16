<template>
    <div>
      <h1>undirected Graph</h1>
    <undirected_graph :parentHeight="200" :parentWidth="200" :links="links" :nodes="nodes"/>
    <p>An undirected graph is a type of graph in which edges have no specific direction associated with them. The edges in an undirected graph are bidirectional and do not have any arrows indicating a particular direction. This means that the relationship between vertices is symmetrical, and there are two-way paths between nodes. In an undirected graph, the order of vertices in an edge does not matter.</p> 
    <p>An adjacency matrix is a common method used in graph theory to represent a graph. For a given graph, an adjacency matrix is a two-dimensional matrix where the rows and columns represent the vertices (or nodes) of the graph. The elements of the adjacency matrix indicate whether there exists an edge or the weight of the edge between two vertices in the graph.</p>
    <p>In the case of an undirected graph, the adjacency matrix is a symmetric matrix. Non-zero elements indicate the presence of an edge between two vertices, while zero elements indicate the absence of an edge. If the graph is weighted, the non-zero elements typically represent the weight of the edge.</p>
    <p>For this example,the adjacency matrix is:</p>
    <p style="white-space: pre-line; white-space: pre-wrap; font-family: Courier New ;">{{martix}}</p>
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
    import undirected_graph from '../undirected_graph.vue';
    export default {
      name : 'parent_undirected',
      components:{
        undirected_graph,
      },
        data() {
          return {
            martix : "    A    B    C    D    E    \nA   0    5    0    7    7    \nB   5    0    3    0    0    \nC   0    3    0    4    0    \nD   7    0    4    0    6    \nE   7    0    0    6    0    \n",
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

          }
        }
  }
</script>