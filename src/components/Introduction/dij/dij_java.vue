<template>
    <div>
        <pre v-highlightA>
            <code class="java">
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
class Edge {
    int destination;
    int weight;

    public Edge(int destination, int weight) {
        this.destination = destination;
        this.weight = weight;
    }
}

public class Dijkstra {
    static final int INF = Integer.MAX_VALUE;

    public static List<Integer> dijkstra(List<List<Edge>> graph, int source) {
        int numVertices = graph.size();
        int[] distances = new int[numVertices];
        Arrays.fill(distances, INF);
        distances[source] = 0;

        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        pq.offer(new int[]{0, source});

        while (!pq.isEmpty()) {
            int[] node = pq.poll();
            int dist = node[0];
            int u = node[1];

            if (dist > distances[u]) {
                continue;
            }

            for (Edge edge : graph.get(u)) {
                int v = edge.destination;
                int weight = edge.weight;

                if (distances[v] > distances[u] + weight) {
                    distances[v] = distances[u] + weight;
                    pq.offer(new int[]{distances[v], v});
                }
            }
        }

        List<Integer> result = new ArrayList<>();
        for (int i = 0; i < numVertices; i++) {
            result.add(distances[i]);
        }
        return result;
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