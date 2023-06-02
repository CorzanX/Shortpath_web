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
from collections import deque
INF = 0x3f3f3f3f
graph = [[] for _ in range(10001)]  
dist = [INF] * 10001    
inQueue = [False] * 10001    
q = deque()   
def SPFA(start, end):
dist[start] = 0    
inQueue[start] = True  
    q.append(start)  
    while q:
        cur = q.popleft()    
        inQueue[cur] = False   
        for edge in graph[cur]:   
            to, weight = edge
            if dist[cur] + weight < dist[to]: 
                dist[to] = dist[cur] + weight  
                if not inQueue[to]:  
                    q.append(to)  
                    inQueue[to] = True   
    if dist[end] == INF:  
        return -1
    else:
        return dist[end]   
n, m = map(int, input().split())
for i in range(m):
    from_, to, weight = map(int, input().split())
    graph[from_].append((to, weight))   
start, end = map(int, input().split())
print(SPFA(start, end))  
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
