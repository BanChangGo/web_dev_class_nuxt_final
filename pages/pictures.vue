<script setup>
    useHead({
        title: "Pictures",
        meta: [
        { name: 'pictures page', content: 'pictrues of NU and nearby.' }
        ]
    })
</script>
<template>
    <section class="bg-white dark:bg-gray-900 border-2 border-white">
    <div class="gap-4 items-center py-3 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 ">
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Pictures</h2>
            <p class="mb-4">Photos of NU and the city where NU is located.</p>
        </div>
        
    </div>
    <div class="flex md:flex-row flex-col gap-10 mb-8 px-6 mx-auto">
        <div><img class="w-full rounded-xl " src="/public/picture1.png.jpg " alt="picture 1"></div>
        <div><img class="mt-4 w-full lg:mt-10 rounded-xl " src="/public/picture2.png.jpg" alt="picture 2"></div>
    </div>
    <div class="flex md:flex-row flex-col gap-10 mb-8 px-6 mx-auto max-w-screen-xl">
        <div><img class="w-full rounded-xl" src="/public/picture3.png.jpg" alt="picture 3"></div>
        <div><img class="mt-4 w-full lg:mt-10 rounded-xl" src="/public/picture4.png.jpg" alt="picture 4"></div>
    </div>
    <div class="flex md:flex-row flex-col gap-10 mb-8 px-6 mx-auto max-w-screen-xl">
        <div><img class="w-full rounded-xl" src="/public/picture5.png.jpg" alt="picture 5"></div>
        <div><img class="mt-4 w-full lg:mt-10 rounded-xl" src="/public/picture6.png.jpg" alt="picture 6"></div>
    </div>
    <div class="flex md:flex-row flex-col gap-10 mb-8 px-6 mx-auto max-w-screen-xl">
        <div><img class="w-full rounded-xl" src="/public/picture7.png.jpg" alt="picture 7"></div>
        <div><img class="mt-4 w-full lg:mt-10 rounded-xl" src="/public/picture8.png.jpg" alt="picture 8"></div>
    </div>
        
</section>
</template>