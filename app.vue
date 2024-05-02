<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<style scoped>
.roboto {
  font-family: Roboto, sans-serif;
}
</style>
<script setup>
useHead({
    title: "My page",
    meta: [
    { name: 'My 2024 spring', content: 'Web Development fin project' }
	  ]
})
</script>