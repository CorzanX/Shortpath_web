<template>
    <div>
        <h1>SPFA</h1>
        spfa algorithm is the shortest path fastest algorithm. In general, it is a more efficient algorithm to solve the shortest circuit. The essence of an spfa is BFS, which traverses all the edges of a graph.
        
        <h2>The realization of SPFA</h2>
        We use array d to record the shortest path estimate of each node and adjacency list to store graph G. The method we take is the dynamic approximation method: A fifO queue is set up to store the nodes to be optimized. During optimization, the first node u is taken out each time, and the current estimate of the shortest path of point u is used to relax the node v that leaves point u. If the estimated value of the shortest path of point v is adjusted and point v is not in the current queue, point v will be put into the end of the queue. In this way, nodes are constantly removed from the queue for relaxation until the queue is empty.<br>
        <img src="../../assets/SPFA.png" width="600" height="auto"><br>

        <step1/>
        <step2/>
        <step3/>
        <step4/>
        <step5/>
        <step6/>
        <step7/>
        <step8/>

        <h2>NOTE</h2>
        1.The SPFA Algorithm, whose full name is Shortest Path Faster Algorithm, was the name of a paper published in 1994 by Duan Fanding of Southwest Jiaotong University. However, Duan Fandin's proof was wrong, and queue optimization content was available shortly after Bellman-Ford algorithm was proposed (1957), so SPFA algorithm was not recognized as Duan Fandin in the international community.<br>
        2.In order to avoid the worst case, the more efficient Dijkstra algorithm should be used on the positive weight graph.<br>

        <h2>Core Code</h2>
        <h3>cpp</h3>
        <spfa_cpp/>
        <h3>java</h3>
        <spfa_java/>
        <h3>python</h3>
        <spfa_python/>
    </div>
</template>

<script>
    import step1 from './spfa/step1.vue'
    import step2 from './spfa/step2.vue'
    import step3 from './spfa/step3.vue'
    import step4 from './spfa/step4.vue'
    import step5 from './spfa/step5.vue'
    import step6 from './spfa/step6.vue'
    import step7 from './spfa/step7.vue'
    import step8 from './spfa/step8.vue'
    import spfa_cpp from './spfa/spfa_cpp.vue'
    import spfa_java from './spfa/spfa_java.vue'
    import spfa_python from './spfa/spfa_python.vue'
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
            spfa_cpp,
            spfa_java,
            spfa_python
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
    .red-word {
        color: red;
    }
    .bold-word {
        font-weight: bold;
    }
</style>