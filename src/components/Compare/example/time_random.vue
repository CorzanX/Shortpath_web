<template>
    <div>
        
        <div v-if="!isLoading">
            <undirected_graph :parentHeight="300" :parentWidth="700" :links="links" :nodes="nodes"/>
        </div>
        <p style="white-space: pre-line; white-space: pre-wrap;">{{str}}</p> 
        
    </div>
</template>

<script scoped>
import axios from 'axios';
import undirected_graph from '../../undirected_graph.vue'
export default {
    components:{
        undirected_graph
    },
    data() {
      return {
        nodes: [],
        links: [],
        str: '',
        isLoading: true,
      };
    },
    created(){
        this.fetchgraph();
        this.fetchstr();
    },
    methods: {
        fetchgraph(){
            axios.get('/cmp_random')
                .then(response => {
                    const graphData = response.data;
                    this.nodes = Object.values(graphData.nodes).map(node => ({ id: node.id, name: node.name }));
                    this.links = Object.values(graphData.links).map(link => ({ source: link.source, target: link.target, weight: link.weight }));
                    this.isLoading = false;
                })
                .catch(error => {
                    console.error(error);
                })
            
        },
        fetchstr(){
            axios.get('/cmp_random_times')
                .then(response => {
                    this.str = response.data;
                })
                .catch(error => {
                    console.error(error);
                })
        }
    }
}
</script>
