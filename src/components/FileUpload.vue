<script setup>
const content = defineModel('content')

const handleFileUpload = async (event) => {
    const file = event.target.files[0]
    const text = await file.text()

    const sentences = sentenceTokenizer(srtToTxt(text))
    content.value = sentences
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
    <input type="file" @change="handleFileUpload" accept=".srt" />
</template>

<style scoped>
input[type='file'] {
    border: 2px dashed #ccc;
    border-radius: 8px;
    cursor: pointer;
}

input[type='file']:hover {
    border-color: #666;
    background-color: #f5f5f5;
}
</style>
