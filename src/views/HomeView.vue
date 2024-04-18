<template>
  <div>
    <button style="margin-top: 20px" class="btn-logout" @click="openModal">Create Task</button>

    <ModalComponent :isOpen="isModalOpened" @modal-close="closeModal" name="first-modal">
      <template #header>Create task</template>
      <template #content>
        <input
          class="input"
          style="width: 100%"
          v-model="titleTask"
          aria-label="Email"
          required
          placeholder="Write Title Task "
        />
        <input
          class="input"
          style="width: 100%"
          v-model="descriptionTask"
          aria-label="Email"
          required
          placeholder="Write Description Task "
        />
      </template>
      <template #footer>
        <div>
          <button class="btn-logout" @click="submitHandler">Submit</button>
        </div>
      </template>
    </ModalComponent>

    <div class="wrapper-tasks">
      <TaskBlock title="To-Do" style="margin-right: 15px">
        <draggable class="list-group" :list="tasksTodo" group="task" @change="changeStatus">
          <template #item="{ element }">
            <TaskCard
              :id="element.id"
              :title="element.title"
              :status="element.status"
              :description="element.description"
              :handleDelete="handleDelete"
            />
          </template>
        </draggable>
      </TaskBlock>

      <TaskBlock title="Done">
        <draggable class="list-group" :list="tasksDone" group="task" @change="changeStatus">
          <template #item="{ element }">
            <TaskCard
              :id="element.id"
              :title="element.title"
              :status="element.status"
              :description="element.description"
              :handleDelete="handleDelete"
            />
          </template>
        </draggable>
      </TaskBlock>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineComponent } from 'vue'
import draggable from 'vuedraggable'

import ApiService from '@/services'
import { TaskBlock, TaskCard, ModalComponent } from '@/components'

const getTasks = async () => {
  isLoading.value = true
  try {
    const { status, data } = await ApiService.getAllTodo()

    if (status !== 200) {
      throw new Error('Failed to fetch data')
    }

    tasksTodo.value = data.filter((task: any) => task.status === 'todo')
    tasksDone.value = data.filter((task: any) => task.status === 'done')
  } catch (err: any) {
    error.value = err?.message || 'An error occurred'
  } finally {
    isLoading.value = false
  }
}

const titleTask = ref('')
const descriptionTask = ref('')

const isLoading = ref(false)
const error = ref(null)
const tasksTodo = ref([]) as any
const tasksDone = ref([]) as any

const isModalOpened = ref(false)

const openModal = () => {
  isModalOpened.value = true
}
const closeModal = () => {
  isModalOpened.value = false
}

const submitHandler = async () => {
  await ApiService.postTask({ title: titleTask.value, description: descriptionTask.value })
  await getTasks()

  titleTask.value = ''
  descriptionTask.value = ''
  closeModal()
}

onMounted(async () => {
  isLoading.value = true
  await getTasks()
})

const changeStatus = async (evt: any) => {
  if (evt.added?.element) {
    const { id, status } = evt.added?.element ?? {}
    await ApiService.updateStatus({ id, status: status === 'todo' ? 'done' : 'todo' })
    await getTasks()
  }
}

const handleDelete = async (taskId: string) => {
  await ApiService.deleteTask(taskId)
  await getTasks()
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
.wrapper-tasks {
  padding-top: 35px;
  display: flex;
}

.list-group {
  min-height: 200px;
  min-width: 300px;
}
</style>
