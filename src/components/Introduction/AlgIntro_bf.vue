<template>
    <div>
        <h1>Bellman-Ford</h1>
        <p>The American applied mathematician Richard Bellman (Richard. Behrman, the author of dynamic programming, published the algorithm in 1958. Lester Ford also published this algorithm in 1956. So this algorithm is called Bellman-Ford. In fact, EdwardF. Moore published the same algorithm in 1957, so this algorithm is also called Bellman-Ford-Moore algorithm.</p>
        <h2>The realization of Bellman-Ford</h2>
        Like Dijkstra's algorithm, Bellman–Ford proceeds by relaxation, in which approximations to the correct distance are replaced by better ones until they eventually reach the solution. In both algorithms, the approximate distance to each vertex is always an overestimate of the true distance, and is replaced by the minimum of its old value and the length of a newly found path. However, Dijkstra's algorithm uses a priority queue to greedily select the closest vertex that has not yet been processed, and performs this relaxation process on all of its outgoing edges; by contrast, the Bellman–Ford algorithm simply relaxes all the edges, and does this |V|-1 times, where |V| is the number of vertices in the graph. In each of these repetitions, the number of vertices with correctly calculated distances grows, from which it follows that eventually all vertices will have their correct distances. This method allows the Bellman–Ford algorithm to be applied to a wider class of inputs than Dijkstra. The intermediate answers depend on the order of edges relaxed, but the final answer remains the same.
        <br>
        There is a exmaple<br>
        <img src="../../assets/bm_example.gif" width="60%"><br>
        In this example graph, assuming that A is the source and edges are processed in the worst order, from right to left, it requires the full |V|−1 or 4 iterations for the distance estimates to converge. Conversely, if the edges are processed in the best order, from left to right, the algorithm converges in a single iteration.<br>
        <img src="../../assets/bm.png" width="60%"><br>
        

        <h2>Core Code</h2>
        <h3>cpp</h3>
        <bf_cpp/>
        <h3>java</h3>
        <bf_java/>
        <h3>python</h3>
        <bf_py/>
    </div>
</template>


<script>
import bf_cpp from './bf/bf_cpp.vue' 
import bf_java from './bf/bf_java.vue' 
import bf_py from './bf/bf_py.vue' 
export default {
    components:{
        bf_cpp,
        bf_java,
        bf_py
    }
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
    
    
</style>