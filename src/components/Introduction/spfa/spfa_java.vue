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

class SPFA {
    static class Edge {
        int source;
        int destination;
        int weight;

        public Edge(int source, int destination, int weight) {
            this.source = source;
            this.destination = destination;
            this.weight = weight;
        }
    }

    private int numVertices;
    private List<List<Edge>> adjacencyList;

    public SPFA(int numVertices) {
        this.numVertices = numVertices;
        adjacencyList = new ArrayList<>(numVertices);
        for (int i = 0; i < numVertices; i++) {
            adjacencyList.add(new ArrayList<>());
        }
    }

    public void addEdge(int source, int destination, int weight) {
        Edge edge = new Edge(source, destination, weight);
        adjacencyList.get(source).add(edge);
    }

    public int[] shortestPath(int source) {
        int[] distance = new int[numVertices];
        Arrays.fill(distance, Integer.MAX_VALUE);
        distance[source] = 0;

        Queue<Integer> queue = new LinkedList<>();
        queue.add(source);

        while (!queue.isEmpty()) {
            int currentVertex = queue.poll();
            List<Edge> edges = adjacencyList.get(currentVertex);

            for (Edge edge : edges) {
                int destination = edge.destination;
                int newDistance = distance[currentVertex] + edge.weight;

                if (newDistance < distance[destination]) {
                    distance[destination] = newDistance;
                    queue.add(destination);
                }
            }
        }

        return distance;
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
