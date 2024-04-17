<template>
  <div class="wrapper-card">
    <div class="title">{{ title }}</div>
    <div class="description">
      {{ description }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    }
  }
}
</script>

<style scoped>
.wrapper-card {
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0 10px;
}

.title {
  color: #000;
  font-weight: 700;
}
.description {
  color: #000;
  font-weight: 400;
}
</style>
