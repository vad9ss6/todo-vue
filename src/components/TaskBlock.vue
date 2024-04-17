<template>
  <div class="wrapper">
    <div class="title">{{ title }}</div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: #d5ccff;
  width: 350px;
  padding: 10px;
}

.title {
  color: #000;
  font-weight: 700;
}
</style>
