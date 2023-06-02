<template>
    <div>
        <h1>Dijkstra</h1>
        <p>Dijkstra's algorithm is a graph traversal algorithm that is used to find the shortest path between a starting node and all other nodes in a weighted graph.  It was developed by Dutch computer scientist Edsger W. Dijkstra in 1956.</p>
        <p>Dijkstra algorithm is used to find the shortest path from one vertex to all other vertices in the graph. It is suitable for both unweighted graphs and directed weighted graphs.</p>
        <p>Note that when using Dijkstra algorithm to find the shortest path, the weights of all edges in the graph must be guaranteed to be non-negative, otherwise the search process is easy to make mistakes.</p>
        <h2>The realization of Dijkstra algorithm</h2>
        <img src="../../assets/dij.gif" width="600" height="auto"><br>
        First of all, we can set up two sets, A and B.
        <p style="color: red">A is used to store the points where the shortest path has been calculated, and B is used to store the points where the shortest path has not been calculated.</p>
        So let's do this at any point on the graph, and let's say we choose source at 0. So the distance from all the initial points to 0 we're going to assume is ∞, which means unreachable. The distance from source point 0 to itself is 0, and the initialization is as follows: Then set A is: {0}, set B is: {1,2,3,4,5,6}
        
        <table>
            <tr class="blue-row">
                <td>Vertex number</td>
                <td>Distance to source</td>
            </tr>
            <tr class="green-row">
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td>1</td>
                <td>∞</td>
            </tr>
            <tr>
                <td>2</td>
                <td>∞</td>
            </tr>
            <tr>
                <td>3</td>
                <td>∞</td>
            </tr>
            <tr>
                <td>4</td>
                <td>∞</td>
            </tr>
            <tr>
                <td>5</td>
                <td>∞</td>
            </tr>
            <tr>
                <td>6</td>
                <td>∞</td>
            </tr>
        </table>

        <step1/>
        <step2/>
        <step3/>
        <step4/>
        <step5/>
        <step6/>
        <step7/>
        <step8/>
        <step9/>
        <step10/>
        <step11/>
        <step12/>
        <br><br>
        <h2>NOTE</h2>
        <h3>1. Graphs with negative weighted edges cannot be processed (the optimal solution may not be obtained, so it is considered that negative weighted graphs cannot be processed), but only non-negative weighted graphs can be processed.</h3>
        <p>Why? In this graph for example, according to Dijkstra's idea, first the 0 point is added to the set, then the 1 point is added to the set, then the 3 point is added to the set, and then the 2 is added to the set, then the 0-&gt; 2 has been updated to 99-300, but it is no longer available. 3 (the original value was 2).</p>
        <img src="../../assets/dij_note.png" width="60%">
        <h3>2. Only the single-source shortest path problem can be solved</h3>
        <br><br>
        <h2>Core Code</h2>
        <h3>cpp</h3>
        <dij_cpp/>
        <h3>java</h3>
        <dij_java/>
        <h3>python</h3>
        <dij_python/>
    </div>
</template>

<script>
    import step1 from './dij/step1.vue'
    import step2 from './dij/step2.vue'
    import step3 from './dij/step3.vue'
    import step4 from './dij/step4.vue'
    import step5 from './dij/step5.vue'
    import step6 from './dij/step6.vue'
    import step7 from './dij/step7.vue'
    import step8 from './dij/step8.vue'
    import step9 from './dij/step9.vue'
    import step10 from './dij/step10.vue'
    import step11 from './dij/step11.vue'
    import step12 from './dij/step12.vue'
    import dij_cpp from './dij/dij_cpp.vue'
    import dij_java from './dij/dij_java.vue'
    import dij_python from './dij/dij_python.vue'
    export default {
        components:{
            step1,
            step2,
            step3,
            step4,
            step5,
            step6,
            step7,
            step8,
            step9,
            step10,
            step11,
            step12,
            dij_cpp,
            dij_java,
            dij_python
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
    table {
        border-collapse: collapse; 
        width: 50%;
    }
    th, td {
        border: 1px solid black;
        padding: 8px; 
        text-align: center;
    }
    .blue-row {
        background-color: lightblue; /* 设置蓝色背景 */
    }
    .green-row {
        background-color: lightgreen; /* 设置蓝色背景 */
    }
    .red-border td {
        border: 3px solid red ;
    }
</style>