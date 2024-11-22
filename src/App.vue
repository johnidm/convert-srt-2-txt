<script setup>
import { ref } from 'vue'

const content = ref('')

async function handleFileChange(event) {
  const file = event.target.files[0]

  const text = await file.text()
  content.value = toTxt(text)
}

function toTxt(text) {
  return text.toLowerCase()
}
</script>

<template>
  <header>Header</header>

  <main>
    <div>
      <input type="file" @change="handleFileChange" accept=".srt" />

      <div v-if="content">
        <h3>File Content:</h3>
        <pre>{{ content }}</pre>
      </div>
    </div>
  </main>

  <footer>Footer</footer>
</template>

<style scoped></style>
