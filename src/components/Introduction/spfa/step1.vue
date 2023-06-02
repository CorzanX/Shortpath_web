<template>
    <div>
        <h3>Step1</h3>
        First, source point a joins the queue. When the queue is not empty, the first element of the queue (a) exits the queue, and relaxation operations are carried out on the end points of all edges starting from point a successively (there are three points b,c and d here). At this time, the state of the path table is:
        <table>
            <tr class="blue-row">
                <td></td>
                <td>a</td>
                <td>b</td>
                <td>c</td>
                <td>d</td>
                <td>e</td>
                <td>f</td>
                <td>g</td>
            </tr>
            <tr class="lightblue-row">
                <td>d[i]</td>
                <td>0</td>
                <td style="color: red">24</td>
                <td style="color: red">8</td>
                <td style="color: red">15</td>
                <td>∞</td>
                <td>∞</td>
                <td>∞</td>
            </tr>
        </table>
        <br>
        In relaxation, the shortest path estimation of the three points becomes smaller, and none of these points appear in the queue, so these points need to be queued, and at this point, three new nodes b,c, and d are queued.
        <br>
    </div>
</template>

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
        background-color: blue; /* 设置蓝色背景 */
    }
    .lightblue-row {
        background-color: lightblue; /* 设置蓝色背景 */
    }
    .blue-row td {
        color: white;
        font-weight: bold;
    }
</style>