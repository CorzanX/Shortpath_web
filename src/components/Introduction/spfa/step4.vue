<template>
    <div>
        <h3>Step4</h3>
        The first element d of the queue exits the queue, and relaxation operations are performed on the end points of all edges starting from d (only g here) in turn. At this time, the state of the path table is: 
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
                <td>24</td>
                <td>8</td>
                <td>15</td>
                <td>15</td>
                <td>11</td>
                <td style="color: red">19</td>
            </tr>
        </table>
        <br>
        In the shortest path table, the shortest path estimate of g does not become smaller (relaxation fails), no new node joins the queue, and the elements in the queue are f and g.
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