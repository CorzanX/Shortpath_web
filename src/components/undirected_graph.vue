<template>
  <div>
    <svg ref="svg" :width="parentWidth" :height="parentHeight"></svg>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
    name: 'undirected_graph',
  props: {
    nodes: {
      type: Array,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
    parentWidth: Number,
    parentHeight: Number,
  },
  mounted() {
    this.initGraph();
  },
  methods: {
    initGraph() {
      // 创建力导向布局算法
      this.simulation = d3.forceSimulation(this.nodes)
        .force("link", d3.forceLink(this.links).id((d) => d.id))
        .force("charge", d3.forceManyBody().strength(-500))
        .force("center", d3.forceCenter(this.parentWidth / 2, this.parentHeight / 2));

      // 创建SVG元素
      const svg = d3.select(this.$refs.svg);

      // 创建边
      this.link = svg
        .selectAll("line")
        .data(this.links)
        .enter()
        .append("line")
        .attr("stroke", "#999")
        
      
      // 创建节点
      this.node = svg
        .selectAll("circle")
        .data(this.nodes)
        .enter()
        .append("circle")
        .attr("r", 20)
        .attr("fill", "lightblue")
        .call(
          d3
            .drag()
            .on("start", this.dragstart)
            .on("drag", this.dragged)
            .on("end", this.dragend)
        );

        // 添加文本标签
      this.label = svg
        .selectAll(null)
        .data(this.nodes)
        .enter()
        .append("text")
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("dy", "-0em")
        .text((d) => d.name);
      
      this.weight_label  = svg
        .selectAll(null)
        .data(this.links)
        .enter()
        .append("text")
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("dy", "-0em")
        .text((d) => d.weight);

      // 将节点和边绑定到力导向布局
      this.simulation.nodes(this.nodes).on("tick", this.ticked);
      this.simulation.force("link").links(this.links);
    },
    ticked() {
      this.link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);
      this.node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
      this.label
        .attr('x', d => d.x)
        .attr('y', d => d.y);
      this.weight_label
        .attr('x',(d) => (d.source.x+d.target.x)/2.0)
        .attr('y',(d) => (d.source.y+d.target.y)/2.0)
    } ,
    dragstart(d) {
      if (!d3.event.active) this.simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    },
    dragged(d) {
      d.x = d3.event.x;
      d.y = d3.event.y;
    },
    dragend(d) {
      if (!d3.event.active) this.simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }
}
</script>