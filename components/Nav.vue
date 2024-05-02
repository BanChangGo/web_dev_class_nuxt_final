<template>
    <div class=" dark:text-slate-200">

    <nav class="hidden bg-white text-base dark:bg-slate-900 sm:block rounded-lg">
      <ul class="flex flex-col items-center space-x-2 md:flex-row">
        <li class="group relative">
          <nuxt-link class="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50" to="/about">
            About
          </nuxt-link>
        </li>
        <li class="group relative">
          <div class="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50">
            Classes
          </div>
          <ul
            class="invisible absolute z-30 space-y-2 rounded-lg border border-slate-50 bg-white p-4 opacity-0 shadow-xl transition-opacity delay-75 ease-in-out group-hover:visible group-hover:opacity-100 dark:border-slate-800 dark:bg-slate-900"
          >
            <li>
              <nuxt-link class="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50" to="/page1">
                INTC 3243
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50" to="/page2">
                MATH 3003
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50" to="/page3">
                LANG 0663 
              </nuxt-link>
            </li>
            <li>
              <nuxt-link class="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50" to="/page4">
                BMGT 3543
              </nuxt-link>
            
            </li>
          </ul>
        </li>
        
        <li class="group relative">
          <nuxt-link class="block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50" to="/pictures">
            Pictures
          </nuxt-link>  
        </li>
      </ul>
    </nav>
    <button
      class="block text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 sm:hidden"
      title="Open navigation menu"
    >
      <svg
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        width="1.2em"
        height="1.2em"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    </button>
    <nav
      class="fixed -right-2/3 top-0 z-20 h-full w-2/3 transform overflow-y-auto bg-white py-4 text-base transition dark:bg-slate-900 sm:hidden"
    >
      <ul class="flex flex-col space-y-2">
        <li class="text-right">
          <button
            class="px-6 py-2 text-slate-400 hover:text-slate-900 dark:hover:text-slate-50"
          >
            <svg
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14m-4 4l4-4m-4-4l4 4"
              ></path>
            </svg>
          </button>
        </li>
        <li class="group relative w-full overflow-x-visible text-right">
          <a
            class="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
            href="/"
          >
            Home
          </a>
        </li>
        <li class="group relative w-full overflow-x-visible text-right">
          <a
            class="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
            href="#"
          >
            Solutions
          </a>
          <ul
            class="h-0 space-y-2 overflow-y-hidden bg-slate-50 px-4 py-0 transition-all delay-75 ease-in-out group-hover:h-full group-hover:py-4 dark:bg-slate-800"
          >
            <li>
              <a
                class="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                href="#"
              >
                Business Line of Credit
              </a>
            </li>
            <li>
              <a
                class="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                href="#"
              >
                SBA Loan
              </a>
            </li>
            <li>
              <a
                class="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                href="#"
              >
                Revenue Based Financing
              </a>
            </li>
            <li>
              <a
                class="undefined block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
                href="#"
              >
                Invoice Factoring
              </a>
            </li>
          </ul>
        </li>
        <li class="group relative w-full overflow-x-visible text-right">
          <a
            class="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-400 no-underline transition hover:text-slate-900 dark:hover:text-slate-50"
            href="/about"
          >
            About
          </a>
        </li>
        <li class="group relative w-full overflow-x-visible text-right">
          <a
            class="mx-4 block whitespace-nowrap px-2 py-2 text-sm text-slate-900 no-underline transition hover:text-slate-900 dark:text-slate-50 dark:hover:text-slate-50"
            href="/contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>

</div>
</template>
