<template>
    <div>
        <h3>Step9:</h3>
        We're going to start at the point we just picked, 4, and we're going to update all of its adjacencies, 4 has 6 adjacencies, so the distance from 6 to 0 is infinity, so we're going to add 4 and the distance from 6 to 0 is going to be 14, which is less than infinity, so we're going to update the distance from 6 to 0, so we're going to update it to 11        
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
            <tr class="green-row">
                <td>3</td>
                <td>6</td>
            </tr>
            <tr class="green-row">
                <td>4</td>
                <td>7</td>
            </tr>
            <tr >
                <td>5</td>
                <td>8</td>
            </tr>
            <tr class="red-border">
                <td>6</td>
                <td>14</td>
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