<script setup>
    useHead({
        title: "Home",
        meta: [
        { name: 'homepage', content: 'the default page' }
        ]
    })
</script>
<template>
    <section class="bg-white dark:bg-gray-900 border-2 border-white">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 ">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">One of the memorable semesters</h2>
            <p class="mb-4">Spring Semester Record from January to May 2024</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="w-full rounded-lg" src="/public/homeimage2.png" alt="home image 1">
            <img class="mt-4 w-full lg:mt-10 rounded-lg" src="/public/homeimage1.png" alt="home image 2">
        </div>
    </div>
</section>
</template>