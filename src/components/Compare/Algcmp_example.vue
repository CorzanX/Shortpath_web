<template>
    <div>
        <h1>Comparison of Shortest Path Algorithm</h1>

        <h2>Scope of Application</h2>
        <br>
        ·Dijkstra's algorithm and SPFA algorithm are suitable for the single-source shortest path problem, that is, to calculate the shortest path from one vertex to other vertices in the graph.<br>
        ·The Floyd-Warshall algorithm is suitable for the multi-source shortest path problem, that is, to calculate the shortest path between any two vertices in the graph.<br>
        ·The Bellman-Ford algorithm is suitable for the shortest path problem with negative weight edges, that is, to deal with graphs containing negative weight edges.<br>
        <br>
        <h2>Time Complexity</h2>
        <time_cpx/>
        <br>
        <h2>Analysis</h2>
        (1) Find the shortest path with a single source and no negative weight. The timeliness is good, and the time complexity is O(V*V+E). If the source is reachable, O(V*lgV+E*lgV)=>O(E*lgV). In the case of a sparse graph, E=V*V/lgV at this time, so the time complexity of the algorithm can be O(V^2).
        <br><br>
        (2) Unlike the Dijkstra algorithm, in the Bellman-Ford algorithm, the weight of an edge can be negative. Imagine that we can find a cycle from the graph (that is, starting from v, returning to v after passing through several points) and the sum of the weights of all edges in this cycle is negative. Then through this loop, the shortest path between any two points in the loop can be infinitely small. If this negative loop is not dealt with, the program will run forever. The Bellman-Ford algorithm has the ability to distinguish such negative loops.
        <br><br>
        (3) The SPFA algorithm is Bellman-Ford's queue optimization, which has relatively good timeliness and a time complexity of O(kE). (k&lt;&lt;V).
        <br><br>
        <h2>Verification of efficiency</h2>
        To illustrate the efficiency of each algorithm in different cases, we present multiple graphs.<br>
        And the running time of the corresponding algorithm function is given.<br>
        <h3>Graph of cities</h3>
        <random/>
        <h3>A dense graph</h3> 
        <dense/>
        <h3>A sparse graph</h3>
        <sparse/>
        <h3>A graph with negative numbers</h3>
        <negative/>
        <h3>Conclusion</h3>
        So,we can find that in dense graph and sparse graph, the performance of these four shortest path algorithms may be somewhat different.<br>
        <br>For Dense Graph, it means that the number of vertices (V) and edges (E) are relatively large, and the number of edges is close to the square of V. On dense graphs, Floyd-Warshall may perform well because its time complexity is O(V^3), independent of the number of edges, and is suitable for dealing with the shortest path between any two vertices. In contrast, the time complexity of Dijkstra and Bellman-Ford algorithms is related to the number of edges, so they may behave slowly on dense graphs.<br>
        <br>For Sparse Graph, the number of vertices (V) and edges (E) is relatively small, and the number of edges is far less than the square of V. On sparse graphs, Dijkstra algorithm and Bellman-Ford algorithm may perform better. Dijkstra algorithm uses priority queue to select vertices, which is suitable for single source shortest path problem. However, the time complexity of Bellman-Ford algorithm is related to the number of edges, but for sparse graphs with small number of edges, it can still efficiently calculate the shortest path.<br>
        <br>Specially,The performance of SPFA algorithm may vary between dense and sparse graphs, because its worst-case time complexity is O(VE). SPFA may be faster than Dijkstra in some specific sparse graph cases, but worst-case performance needs to be taken care of.<br>
        <br>It should be noted that the SPFA algorithm is usually faster than the average case of Dijkstra algorithm when dealing with sparse graphs (relatively few edges), because it uses the queue for vertex selection and can avoid unnecessary relaxation operations. However, in the worst case, the SPFA algorithm has a high time complexity and may not be as good as Dijkstra's algorithm or other algorithms that are better suited to dealing with negative edge weights, such as Bellman-Ford.<br>
        <br>Therefore, when selecting the shortest path algorithm, the characteristics of the graph (dense or sparse), the problem requirements and the time complexity of the algorithm should be considered to find the most appropriate algorithm.
    </div>
</template>

<script>
import time_cpx from './example/time_cpx.vue'
import dense from './example/time_dense.vue'
import random from './example/time_random.vue'
import sparse from './example/time_sparse.vue'
import negative from './example/time_negative.vue'
export default {
    components:{
        time_cpx,dense,random,sparse,negative
    },
    
}
</script>


<style scoped>
    h1{
        font-size: 30px;
    }
    h2{
        font-size: 20px;
    }
    h3{
        font-size: 17px;
    }
    .component {
      display: none;
    }
    
</style>