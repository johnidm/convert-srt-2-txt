<script setup>
defineProps({
  sentence: {
    type: String,
    required: true
  }
})

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
}

const translateTo = () => {
  alert("This feature isn't available.")
}
</script>

<template>
  <div class="sentence-container">
    <p>{{ sentence }}</p>
    <nav>
      <ul>
        <li>
          <a href="#" @click="copyToClipboard(sentence)">Copy</a>
        </li>
        <li>
          <a href="#" @click="translateTo(sentence)">Translate</a>
        </li>
      </ul>
    </nav>
    <hr />
  </div>
</template>

<style scoped>
.sentence-container {
  margin-bottom: 1rem;
}

p {
  padding-top: 0.5rem;
}
</style>
