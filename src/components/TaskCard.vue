<template>
  <div class="wrapper-card">
    <div class="heder">
      <div :class="{ 'done-style': status === 'done' }" class="title">{{ title }}</div>
      <button class="remove-btn" @click="handle">x</button>
    </div>
    <div :class="{ 'done-style': status === 'done' }" class="description">
      {{ description }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    id: {
      type: String
    },
    title: {
      type: String
    },
    status: {
      type: String
    },
    description: {
      type: String
    },
    handleDelete: {
      type: Function,
      required: true
    }
  },
  methods: {
    handle() {
      this.handleDelete(this.id)
    }
  }
}
</script>

<style scoped>
.heder {
  display: flex;
  justify-content: space-between;
}
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

.done-style {
  text-decoration: line-through;
}

.description {
  color: #000;
  font-weight: 400;
}
</style>
