<template>
    <div>
        <pre v-highlightA>
            <code class="cpp">
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
struct Edge {
    int source, destination, weight;
};

void bellmanFord(std::vector<Edge>& edges, int numVertices, int source) {
    std::vector<int> distance(numVertices, std::numeric_limits<int>::max());
    distance[source] = 0;

    for (int i = 1; i <= numVertices - 1; ++i) {
        for (const auto& edge : edges) {
            int u = edge.source;
            int v = edge.destination;
            int weight = edge.weight;

            if (distance[u] != std::numeric_limits<int>::max() && distance[u] + weight < distance[v]) {
                distance[v] = distance[u] + weight;
            }
        }
    }

    // Detect negative weight loops
    for (const auto& edge : edges) {
        int u = edge.source;
        int v = edge.destination;
        int weight = edge.weight;

        if (distance[u] != std::numeric_limits<int>::max() && distance[u] + weight < distance[v]) {
            std::cout << "There are negative weight loops in the graph!" << std::endl;
            return;
        }
    }

    // output shortest path
    std::cout << "Vertice\tshortest path" << std::endl;
    for (int i = 0; i < numVertices; ++i) {
        std::cout << i << "\t" << distance[i] << std::endl;
    }
}
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