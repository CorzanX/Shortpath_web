<template>
    <div>
        <h3>Step5:</h3>
        Going to take the point 1 that I just added, and I'm going to update all the adjacencies of 1, and it's going to have 3 and 4, because the distance from 0 to 3 is 6, which is less than the distance from 0 to 3, which is 8, so the distance from 6 is going to be 6(5+1), and the distance from 0 to 4 is going to be 11
        <table>
            <tr class="blue-row">
                <td>Vertex number</td>
                <td>Distance to source</td>
            </tr>
            <tr class="green-row">
                <td>0</td>
                <td>0</td>
            </tr>
            <tr class="green-row">
                <td>1</td>
                <td>5</td>
            </tr>
            <tr class="green-row">
                <td>2</td>
                <td>2</td>
            </tr>
            <tr class="red-border">
                <td>3</td>
                <td>6</td>
            </tr>
            <tr class="red-border">
                <td>4</td>
                <td>11</td>
            </tr>
            <tr >
                <td>5</td>
                <td>10</td>
            </tr>
            <tr>
                <td>6</td>
                <td>∞</td>
            </tr>
        </table>
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
        background-color: lightblue; /* 设置蓝色背景 */
    }
    .green-row {
        background-color: lightgreen; /* 设置蓝色背景 */
    }
    .red-border td {
        border: 3px solid red ;
    }
</style>