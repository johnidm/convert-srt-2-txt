<script setup>
import { ref } from 'vue'
import FileUpload from './components/FileUpload.vue'

const content = ref([])
</script>

<template>
    <section class="pico">
        <FileUpload v-model:content="content" />
        <SentenceList :content="content" />
    </section>
</template>

<style scoped></style>
