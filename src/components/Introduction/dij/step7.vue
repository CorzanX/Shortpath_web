<template>
    <div>
        <h3>Step7:</h3>
        So we're going to start at this 3 point that we just picked, we're going to update all of the adjacencies of 3, 3 has 4 and 5, so the distance from 4 to 0 was 11, so 3, when we add this in, the distance from 4 to 0 is 7, which is less than 11, so we're going to update it, and the distance from 5 to 0 was 10, so when we add this in, the distance from 5 to 0 is 8, so we're going to update it        
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
            <tr class="red-border">
                <td>4</td>
                <td>7</td>
            </tr>
            <tr class="red-border">
                <td>5</td>
                <td>8</td>
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