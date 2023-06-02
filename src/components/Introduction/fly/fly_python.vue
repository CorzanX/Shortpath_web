<template>
    <div>
        <pre v-highlightA>
            <code class="python">
                {{code}}
            </code>
        </pre>
    </div>
</template>

<script>

export default {
    data(){
        return {
code:`
INF = float("inf")  
n = int(input())    
graph = [[0] * n for _ in range(n)]
for i in range(n):
    line = input().split()
    for j in range(n):
        graph[i][j] = int(line[j])
        if graph[i][j] == -1:   
            graph[i][j] = INF
for k in range(n):
    for i in range(n):
        for j in range(n):
            graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j])
for i in range(n):
    for j in range(n):
        if graph[i][j] == INF:  
            print("-1", end=" ")
        else:
            print(graph[i][j], end=" ")
    print()

            `
        }
    }
}
</script>

<style scoped>
pre {
  background-color: #f4f4f4;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: Consolas, Monaco, 'Andale Mono', monospace;
  font-size: 14px;
}

code {
  font-family: Consolas, Monaco, 'Andale Mono', monospace;
  font-size: 14px;
}

</style>