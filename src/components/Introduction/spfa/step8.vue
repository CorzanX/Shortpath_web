<template>
    <div>
        <h3>Step8</h3>
        The first element b points out of the queue, and relaxes the ending points of all edges with b as the starting point (only e here) in turn. At this time, the state of the path table is:         <table>
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
                <td>17</td>
                <td>8</td>
                <td>15</td>
                <td>13</td>
                <td>11</td>
                <td>14</td>
            </tr>
        </table>
        <br>
        In the shortest path table, the shortest path estimate of e does not change (relaxation is unsuccessful), and the queue is empty 
        <br>
        Finally, the shortest path from a to g is 14.
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