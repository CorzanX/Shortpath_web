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
def dijkstra(graph: List[List[Tuple[int, int]]], source: int) -> List[int]:
    num_vertices = len(graph)
    distances = [INF] * num_vertices
    distances[source] = 0

    pq = [(0, source)]

    while pq:
        dist, u = heapq.heappop(pq)

        if dist > distances[u]:
            continue

        for v, weight in graph[u]:
            if distances[v] > distances[u] + weight:
                distances[v] = distances[u] + weight
                heapq.heappush(pq, (distances[v], v))

    return distances

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