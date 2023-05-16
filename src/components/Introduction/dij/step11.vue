<template>
    <div>
        <h3>Step11:</h3>
        So if we start at this point that we just picked, which is the point 5, we update all of its neighbors, so the neighbor of 5 is 6, so the distance from 0 to 6 was 14, and when we add in the point 5, the distance from 0 to 6 becomes 11, so we need to update the distance from 0 to 6
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
            <tr class="green-row">
                <td>5</td>
                <td>8</td>
            </tr>
            <tr class="red-border">
                <td>6</td>
                <td>11</td>
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