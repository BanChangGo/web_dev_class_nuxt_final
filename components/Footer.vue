<template>
    <footer class="border-2 border-white bg-mountain-meadow-700 justify-between py-2">
        <div class="text-white text-lg gap-4 text-center ">
                <nuxt-link to="/"> MY 2024 SPRING </nuxt-link>
        </div>
        
        <div class="mx-auto w-full justify-between pd-4">
            <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 ">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <a href="/about" class=" hover:underline">About</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Classes</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <a href="/page1" class="hover:underline">INTC 3243</a>
                        </li>
                        <li class="mb-4">
                            <a href="/page2" class="hover:underline">MATH 3003</a>
                        </li>
                        <li class="mb-4">
                            <a href="/page3" class="hover:underline">LANG 0663</a>
                        </li>
                        <li class="mb-4">
                            <a href="/page4" class="hover:underline">BMGT 3543</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Pictures</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <a href="/pictures" class=" hover:underline">Pictures</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Will Add</h2>
                    <ul class="text-gray-500 dark:text-gray-400 font-medium">
                        <li class="mb-4">
                            <a href="#" class=" hover:underline"></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </footer>

</template>
