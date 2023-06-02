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
    int source, destination, weight;

    public Edge(int source, int destination, int weight) {
        this.source = source;
        this.destination = destination;
        this.weight = weight;
    }
}

public class BellmanFord {
    public static void bellmanFord(Edge[] edges, int numVertices, int source) {
        int[] distance = new int[numVertices];
        Arrays.fill(distance, Integer.MAX_VALUE);
        distance[source] = 0;

        for (int i = 1; i <= numVertices - 1; ++i) {
            for (Edge edge : edges) {
                int u = edge.source;
                int v = edge.destination;
                int weight = edge.weight;

                if (distance[u] != Integer.MAX_VALUE && distance[u] + weight < distance[v]) {
                    distance[v] = distance[u] + weight;
                }
            }
        }

        // Detect negative weight loops
        for (Edge edge : edges) {
            int u = edge.source;
            int v = edge.destination;
            int weight = edge.weight;

            if (distance[u] != Integer.MAX_VALUE && distance[u] + weight < distance[v]) {
                System.out.println("There are negative weight loops in the graph!");
                return;
            }
        }

        // output shortest path
        System.out.println("Vertice\tshortest path");
        for (int i = 0; i < numVertices; ++i) {
            System.out.println(i + "\t" + distance[i]);
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