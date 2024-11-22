<script setup>
import { ref } from 'vue'

const content = ref('')

async function handleFileChange(event) {
  const file = event.target.files[0]

  const text = await file.text()
  content.value = sentenceTokenizer(srtToTxt(text))
}

function sentenceTokenizer(text) {
  const sentences = text.split(/[\\.!\?]/).map((sentence) => sentence.trim())

  return sentences.map((sentence) => {
    if (sentence && !/[.!?]$/.test(sentence)) {
      return sentence + '.'
    }
    return sentence
  })
}

function srtToTxt(text) {
  /*
    Split content into subtitle blocks
    Process each block to extract only the text
    Remove the first two lines (number and timestamp)
    and join the remaining lines (subtitle text)
  */
  const blocks = text.trim().split('\n\n')

  const textLines = blocks.map((block) => {
    const lines = block.split('\n')
    return lines.slice(2).join(' ')
  })

  return textLines.join(' ').trim()
}
</script>

<template>
  <header>Header</header>

  <main>
    <div>
      <input type="file" @change="handleFileChange" accept=".srt" />

      <div v-if="content">
        <h3>Extracted Text:</h3>
        <p v-for="(sentence, index) in content" :key="index">{{ sentence }}</p>
      </div>
    </div>
  </main>

  <footer>Footer</footer>
</template>

<style scoped>
p {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
