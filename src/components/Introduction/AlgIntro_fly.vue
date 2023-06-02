<template>
    <div>
        <h1>Floyd</h1>
        <p>Floyd algorithm, also known as interpolation method, is an algorithm that uses the idea of dynamic programming to find the shortest path between multiple source points in a given weighted graph, similar to Dijkstra algorithm. The algorithm is named after one of its founders, 1978 Turing Award winner and Stanford University computer science professor Robert Floyd.</p>
        <h2>The realization of Floyd algorithm</h2>
        The specific idea of the algorithm is:<br>
        1. The adjacency matrix (two-dimensional array)<span class="red-word">dist</span> stores the path. The value in the array begins to represent the initial direct path between the dots, and eventually is the minimum path between the dots. There are two points to be noted.<br>
        2. Add relaxation calculation from the first to the NTH point in turn, and test enumerate whether any path length has been changed (can I update the path) by adding each point. When adding (k enumeration) relaxed points sequentially, it is necessary to <span class="bold-word">traverse each pair of points in the graph (i,j double cycle) to determine whether the distance between each pair of points has a minimum distance change because of the added points</span>. If it changes (becomes smaller), then the distance between two points (i,j) changes.<br>
        3.Repeat until the final insertion is complete.
        <p style="color: blue">The state transition equation of step 2 is:</p>
        <pre><code>dp[i][j]=min(dp[i][j],dp[i][k]+dp[k][j])</code></pre>

        <h2>Example</h2>

        <h3>Step1</h3>
        Adding the first node <span class="red-word">A</span> for updating calculation, we can find that, due to the addition of A, the originally disconnected point pairs <span class="red-word">B,C</span> and <span class="red-word">B,D</span> become connected, and <span class="bold-word">the distance after adding A is the current minimum</span>. At the same time, you can find that adding <span class="red-word">A</span> also makes <span class="red-word">C-D</span> have one more connecting path (6+3). But the <span class="red-word">C-D</span> connection distance of 9 is much greater than the original <span class="red-word">(C,D)</span> connection path 2, so this one is not updated.<br>
        <img src="../../assets/fly_1.png" width="600" height="auto"><br>

        <h3>Step2</h3>
        Let's go ahead and add a second node <span class="red-word">B</span>, which does the same thing as <span class="red-word">A</span>. Update some points. Because there are a lot of points that are connected to B, there are a lot of new paths, and I'm just going to give you a list of them, just to illustrate, but I'm going to use 1 for the new path, and 0 for the original length.<br>
        <img src="../../assets/fly_2.png" width="600" height="auto"><br>
        <p>AF1=AB+BF=6+2=8 &lt; AF0(∞) <span class="red-word">update</span> </p>
        <p>AE1=AB+BE=2+4=6 &lt; AE0(∞)  <span class="red-word">update</span> </p>
        <p>CE1=CB+BE=5+5=9 &lt; CE0(∞) <span class="red-word">update</span> </p>
        <p>CF1=CB+BF=5+6=11 &lt; CF0(∞) <span class="red-word">update</span> </p>
        <p>EF1=EB+BF=4+6=10 &lt; EF0(∞) <span class="red-word">update</span> </p>
        <p>Of course, some new paths are larger than the existing paths and do not update, for example:</p>
        <p>AC1=AB+BC=2+5=7 &gt; AC0(3) <span class="red-word">don't update</span> </p>
        <p>AD1=AB+BD=2+8=10 &gt; AD0(6) <span class="red-word">don't update</span> </p>

        <h3>Step3</h3>
        After adding C, D, E and F in the sequence, the same operation is carried out. Finally, all adding is finished and there is no path to update. And actually at this point we have a lot more lines. These lines represent <span class="bold-word"> current shortest path</span>. This also fits in with our requirement that ultimately we want the shortest path for all nodes. <span class="bold-word"> Each node should end up with 5 edges pointing to different nodes!</span> The corresponding boundary value of the matrix is the shortest path between the dots.<br>
        <img src="../../assets/fly_3.png" width="600" height="auto"><br>

        <h2>Note</h2>
        1.It is necessary to ensure that there is no negative weight cycle in the graph, otherwise the Floyd algorithm will not be able to correctly solve the shortest path. If there is a negative weight cycle in the graph, it can be judged by checking if d[i][i] &lt; 0.<br>
        <br>2.The Floyd algorithm is suitable for dense graphs, where the number of edges is close to the square of the number of nodes. If the number of edges in the graph is small, other algorithms such as Dijkstra algorithm can be considered.<br>
        <br>3.In the implementation process, it is necessary to pay attention to the range of the array index. Since the list in Python can be dynamically extended, a large two-dimensional list can be initialized first, but the range of the array index should be noted during use to avoid out-of-range errors.<br>
        <br>4.The space complexity of the Floyd algorithm is relatively high, which is O(n^2). Therefore, when the number of nodes is large, there may be a problem of insufficient memory. At this time, an adjacency list can be used to optimize the space complexity.<br>

        <h2>Core Code</h2>
        <h3>cpp</h3>
        <fly_cpp/>
        <h3>java</h3>
        <fly_java/>
        <h3>python</h3>
        <fly_python/>
    </div>
</template>

<script>
    import fly_cpp from './fly/fly_cpp.vue'
    import fly_java from './fly/fly_java.vue'
    import fly_python from './fly/fly_python.vue'
    export default {
        components:{
            fly_cpp,
            fly_java,
            fly_python
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