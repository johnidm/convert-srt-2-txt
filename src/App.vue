<script setup>
import { ref } from 'vue'

const content = ref('')

async function handleFileChange(event) {
  const file = event.target.files[0]

  const text = await file.text()
  content.value = sentenceTokenizer(srtToTxt(text))
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
}

function translateTo() {
  alert("This feature isn't available.")
}

function sentenceTokenizer(text) {
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

function srtToTxt(text) {
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
    </div>
  </section>
</template>

<style scoped>
p {
  padding-top: 0.5rem;
}
</style>
