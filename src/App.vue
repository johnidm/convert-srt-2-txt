<script setup>
import { ref } from 'vue'

const content = ref('')

const handleFileChange = async (event) => {
  const file = event.target.files[0]
  const text = await file.text()
  content.value = sentenceTokenizer(srtToTxt(text))
}

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
}

const translateTo = () => {
  alert("This feature isn't available.")
}

const sentenceTokenizer = (text) => {
  /**
   * Checks if the sentence ends with a period, exclamation mark, or question mark.
   * If a sentence does not end with one of these punctuation marks, a period is appended.
   */
  const sentences = text.split(/[\\.!?]/).map((sentence) => sentence.trim())

  return sentences.map((sentence) => {
    if (sentence && !/[.!?]$/.test(sentence)) {
      return sentence + '.'
    }
    return sentence
  })
}

const srtToTxt = (text) => {
  /**
   * Split content into subtitle blocks
   * Process each block to extract only the text
   * Remove the first two lines (number and timestamp) and join the remaining lines (subtitle text)
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
  <section class="pico">
    <input type="file" @change="handleFileChange" accept=".srt" />
    <div v-if="content">
      <h3>Converted Text</h3>

      <div v-for="(sentence, index) in content" :key="index">
        <p>{{ sentence }}</p>
        <div class="actions">
          <a class="actions-item" href="#" @click="copyToClipboard(sentence)">Copy</a>
          <a class="actions-item" href="#" @click="translateTo(sentence)">Translate</a>
        </div>

        <hr />
      </div>
    </div>
  </section>
</template>

<style scoped>
input[type="file"] {
  border: 2px dashed #ccc;
  border-radius: 8px;
  cursor: pointer;
}

input[type="file"]:hover {
  border-color: #666;
  background-color: #f5f5f5;
}

h3 {
  margin: 2rem 0 1rem;
  color: #2c3e50;
}

p {
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 6px;
  line-height: 1.6;
}

div.actions {
  display: flex;
  gap: 1rem;
  padding: 0;
  margin: 0;
  list-style: none;
}

div.actions a.actions-item {
  display: inline-block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #2c3e50;
  background-color: #e9ecef;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

div a:hover {
  background-color: #2c3e50;
  color: white;
}

hr {
  margin: 1.5rem 0;
  border: none;
  border-top: 1px solid #dee2e6;
}
</style>
