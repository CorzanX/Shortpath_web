<template>
    <div>
        <h3>Step8:</h3>
        We choose A point from set B that is the least distance from 0, so we choose 4, because 4 is the closest to 0, which is 7, so set A becomes: {0,1,2,3,4}, and set B becomes: {5,6}        
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