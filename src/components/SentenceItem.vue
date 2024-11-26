<script setup>
defineProps({
    sentence: {
        type: String,
        required: true,
    },
})

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
}

const translateTo = () => {
    alert("This feature isn't available.")
}
</script>

<template>
    <div class="sentence-item">
        <p class="sentence-title">{{ sentence }}</p>
        <div class="actions">
            <a href="#" @click="copyToClipboard(sentence)">Copy</a>
            <a href="#" @click="translateTo(sentence)">Translate</a>
        </div>
    </div>
</template>

<style scoped>
.sentence-item {
    margin-bottom: 1rem;
}

.sentence-title {
    padding: 1rem;
    background-color: #f8f9fa;
    border-radius: 6px;
    line-height: 1.6;
    margin-bottom: 0.5rem;
}

.actions {
    display: flex;
    gap: 1rem;
    padding: 0;
    margin: 0.5rem 0;
    justify-content: flex-end;
}
</style>
