<template>
    <div>
        <h3>Step1:</h3>
        Starting from point 0, update the distance of all points adjacent to 0. At this time, since there are 1 and 2 adjacent to 0, and the distance to these two points is less than the original ∞ distance, so update the distance between these two points and 0 as shown in the figure below.
        <table>
            <tr class="blue-row">
                <td>Vertex number</td>
                <td>Distance to source</td>
            </tr>
            <tr>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr class="red-border">
                <td>1</td>
                <td>5</td>
            </tr>
            <tr class="red-border">
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
                <td>∞</td>
            </tr>
            <tr>
                <td>4</td>
                <td>∞</td>
            </tr>
            <tr>
                <td>5</td>
                <td>∞</td>
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