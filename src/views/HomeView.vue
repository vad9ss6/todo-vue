<template>
  <div class="wrapper">
    <TaskBlock title="To-Do" style="margin-right: 15px">
      <draggable class="list-group" :list="tasksTodo" group="task" @change="log">
        <template #item="{ element }">
          <TaskCard :title="element.title" :description="element.description" />
        </template>
      </draggable>
    </TaskBlock>

    <TaskBlock title="Done">
      <draggable class="list-group" :list="tasksDone" group="task" @change="log">
        <template #item="{ element }">
          <TaskCard :title="element.title" :description="element.description" />
        </template>
      </draggable>
    </TaskBlock>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
import draggable from 'vuedraggable'

import ApiService from '@/services'
import { TaskBlock, TaskCard } from '@/components'

const isLoading = ref(false)
const error = ref(null)
const tasksTodo = ref([]) as any
const tasksDone = ref([{ title: 'job', description: 'blabla', id: '2' }]) as any

onMounted(async () => {
  isLoading.value = true
  try {
    const { status, data } = await ApiService.getAllTodo()

    if (status !== 200) {
      throw new Error('Failed to fetch data')
    }

    tasksTodo.value = data
  } catch (err: any) {
    error.value = err?.message || 'An error occurred'
  } finally {
    isLoading.value = false
  }
})

const log = (evt: any) => {
  console.log(evt)
}

defineComponent({
  components: {
    draggable,
    TaskBlock,
    TaskCard
  }
})
</script>

<style>
.wrapper {
  padding-top: 35px;
  display: flex;
}

.list-group {
  min-height: 200px;
  min-width: 300px;
}
</style>
