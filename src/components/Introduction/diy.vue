<template>
  <div style="width: 100%;height: 100%">
    <iframe :src="src" frameborder='0' style="width: 100%;height: 100%"></iframe>
  </div>
</template>

<script>

export default {
  data() {
    return {
      src: ''
    };
  },
  mounted() {
    this.src = '/static/instructions.html';
  },
  
};
</script>
