<template>
  <div>
    <svg ref="graph" width="200" height="200"></svg>
  </div>
</template>

<script>
import * as d3 from "d3";

export default {
  props: {
    nodes: {
      type: Array,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    }
  },
  mounted() {
    this.drawGraph();
  },
  methods: {
    drawGraph() {
      const svg = d3.select(this.$refs.graph);

      const simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) { return d.id; }))
        .force("charge", d3.forceManyBody().strength(-500))
        .force("center", d3.forceCenter(svg.attr("width") / 2, svg.attr("height") / 2));

      

      const link = svg.append("g")
        .selectAll("line")
        .data(this.links)
        .enter().append("line")
        .attr("class", "link")
        .attr("stroke", "#999")
        .style("stroke-width", "2px");

      const node = svg.append("g")
        .selectAll("circle")
        .data(this.nodes)
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", 15)
        .attr("fill", "lightblue")
        .call(
          d3
            .drag()
            .on("start", dragstart)
            .on("drag", dragged)
            .on("end", dragend)
        );

        // 添加文本标签
      const label = svg.append("g")
        .selectAll(null)
        .data(this.nodes)
        .enter()
        .append("text")
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("dy", "-0em")
        .text((d) => d.name);

      const weight_label = svg.append("g")
        .selectAll(null)
        .data(this.links)
        .enter()
        .append("text")
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("dy", "-0.5em")
        .text((d) => d.weight);
      
      function update() {
        node.attr("cx", d => d.x)
          .attr("cy", d => d.y);

        link.attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });
        label
          .attr('x', d => d.x)
          .attr('y', d => d.y);

        weight_label
          .attr('x',(d) => d.source.x*0.3+d.target.x*0.7)
          .attr('y',(d) => d.source.y*0.3+d.target.y*0.7);
      }

      simulation.nodes(this.nodes).on("tick", update);
      simulation.force("link").links(this.links);

      svg.append("defs").append("marker")
        .attr("id", "arrow")
        .attr("viewBox", "0 -5 10 10")
        .attr("refX", 20)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .attr("class", "arrow");

      link.attr("marker-end", "url(#arrow)");
      function dragstart(d) {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }
      function dragged(d) {
        d.x = d3.event.x;
        d.y = d3.event.y;
      }
      function dragend(d) {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      }
    }
  }
};
</script>
