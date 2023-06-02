<template>
    <div>
        <table>
            <tr class="blue-row">
                <td>Dijkstra</td>
                <td>Floyd</td>
                <td>SPFA</td>
                <td>Bellman-Ford</td>
            </tr>
            <tr>
                <td>O((V + E)log V)</td>
                <td>O(V^3)</td>
                <td>O(E)~O(VE)</td>
                <td>O(VE)</td>
            </tr>
        </table>
        PS:In this table ,V for vertex and E for edge<br>
       
    </div>
</template>

<script>


export default {
    components:{
        
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