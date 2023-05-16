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
    int destination;
    int weight;
};

typedef std::vector<std::vector<Edge>> Graph;

std::vector<int> Dijkstra(const Graph& graph, int source) {
    int numVertices = graph.size();
    std::vector<int> distances(numVertices, INF);
    distances[source] = 0;

    std::priority_queue<std::pair<int, int>, std::vector<std::pair<int, int>>, std::greater<std::pair<int, int>>> pq;
    pq.push(std::make_pair(0, source));

    while (!pq.empty()) {
        int u = pq.top().second;
        pq.pop();

        for (const Edge& edge : graph[u]) {
            int v = edge.destination;
            int weight = edge.weight;

            if (distances[v] > distances[u] + weight) {
                distances[v] = distances[u] + weight;
                pq.push(std::make_pair(distances[v], v));
            }
        }
    }

    return distances;
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