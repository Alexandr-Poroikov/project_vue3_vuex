<template>
    <input type="text" class="search" placeholder="поиск по Имени..."
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
    name: 'my-search',
    props:{
        modelValue:{
            type: String
        }
    }
}
</script>

<style scoped>
    .search{
    border: 1px solid black;
    padding: 5px;
    border-radius: 3px;
    }
</style>
