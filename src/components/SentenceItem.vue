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
        <p>{{ sentence }}</p>
        <div class="actions">
            <a class="actions-item" href="#" @click="copyToClipboard(sentence)">Copy</a>
            <a class="actions-item" href="#" @click="translateTo(sentence)">Translate</a>
        </div>
        <hr />
    </div>
</template>

<style scoped>
.sentence-item {
    margin-bottom: 1rem;
}

hr {
    margin: 1.5rem 0;
    border: none;
    border-top: 1px solid #dee2e6;
}

p {
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
    list-style: none;
}

.actions-item {
    display: inline-block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #2c3e50;
    background-color: #e9ecef;
    border-radius: 4px;
    font-size: 0.9rem;
    transition: all 0.2s ease;
}

.actions-item:hover {
    background-color: #2c3e50;
    color: white;
}
</style>
