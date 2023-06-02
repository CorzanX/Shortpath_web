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
const int INF = 0x3f3f3f3f; 
int main() {
    int n;
    cin >> n;
    int graph[n][n];
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            cin >> graph[i][j];
            if(graph[i][j] == -1) { 
                graph[i][j] = INF;
            }
        }
}
    for(int k = 0; k < n; k++) {
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) {
                graph[i][j] = min(graph[i][j], graph[i][k] + graph[k][j]);
            }
        }
    }
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            if(graph[i][j] == INF) {   
                cout << -1 << " ";
            } else {
                cout << graph[i][j] << " ";
            }
        }
        cout << endl;
    }
    return 0;
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