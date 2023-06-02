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
def bellman_ford(edges, num_vertices, source):
    distance = [float('inf')] * num_vertices
    distance[source] = 0

    for _ in range(num_vertices - 1):
        for edge in edges:
            u, v, weight = edge

            if distance[u] != float('inf') and distance[u] + weight < distance[v]:
                distance[v] = distance[u] + weight

    # Detect negative weight loops
    for edge in edges:
        u, v, weight = edge

        if distance[u] != float('inf') and distance[u] + weight < distance[v]:
            print("There are negative weight loops in the graph!")
            return

    # output shortest path
    print("Vertice\tshortest path")
    for i in range(num_vertices):
        print(i, "\t", distance[i])
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