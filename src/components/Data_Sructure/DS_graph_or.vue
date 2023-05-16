<template>
    <div>
      <h1>Directed Graph</h1>
    <oriented_Graph :parentHeight="200" :parentWidth="200" :links="links" :nodes="nodes"/>
    <p>A directed graph, also known as a digraph, is a type of graph in which edges have a specific direction associated with them. Each edge in a directed graph has an arrow indicating the direction from one vertex (node) to another. This means that the relationship between vertices is asymmetrical, and there may be one-way paths between nodes. In a directed graph, the order of vertices in an edge matters.
    <p>An adjacency matrix is a common method used in graph theory to represent a graph. For a given graph, an adjacency matrix is a two-dimensional matrix where the rows and columns represent the vertices (or nodes) of the graph. The elements of the adjacency matrix indicate whether there exists an edge or the weight of the edge between two vertices in the graph.</p>
    <p>In the case of a directed graph, the adjacency matrix is not necessarily symmetric. The matrix element a[i][j] represents whether there is a directed edge from vertex i to vertex j. It can be represented as 1 if an edge exists or can use weight values to represent the edge's weight. If there is no edge, it can be represented as 0 or any other special value.</p>
    <p>For this example,the adjacency matrix is:</p>
    <p style="white-space: pre-line; white-space: pre-wrap; font-family: Courier New ;">{{martix}}</p>
         
    </div>
</template>


<script>
    import oriented_Graph from '../oriented.vue';
    export default {
      name : 'parent_oriented',
      components:{
        oriented_Graph
      },
        data() {
          return {
          martix: "    A    B    C    D    E    \nA   0    5    0    7    0    \nB   0    0    3    0    0    \nC   0    0    0    4    0    \nD   5    0    0    0    6    \nE   7    0    0    0    0    \n",
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
          { source: 0, target: 3 , weight: 7},
          { source: 3, target: 0 , weight: 5}
          
        ],

          }
        }
  }
</script>