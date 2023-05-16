<template>
    <div>
        <h3>Step3:</h3>
        Going to take this 2 that I just added, and I'm going to update all the points that are adjacent to 2, because the points that are adjacent to 2 have 3 and 5, and the distance between these two points and 0 is less than the distance infinity between them and 0
        <table>
            <tr class="blue-row">
                <td>Vertex number</td>
                <td>Distance to source</td>
            </tr>
            <tr class="green-row">
                <td>0</td>
                <td>0</td>
            </tr>
            <tr >
                <td>1</td>
                <td>5</td>
            </tr>
            <tr class="green-row">
                <td>2</td>
                <td>2</td>
            </tr>
            <tr class="red-border"> 
                <td>3</td>
                <td>8</td>
            </tr>
            <tr>
                <td>4</td>
                <td>∞</td>
            </tr>
            <tr class="red-border">
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