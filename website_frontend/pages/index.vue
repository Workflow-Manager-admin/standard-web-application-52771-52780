<template>
  <div class="min-h-screen flex flex-col" :style="bgStyle">
    <!-- HEADER -->
    <header
      class="fixed top-0 left-0 w-full z-50"
      :style="headerStyle"
    >
      <nav
        class="flex items-center justify-between h-[56px] px-8 border-b"
        :style="{
          borderBottom: '1px solid #2d292b',
        }"
      >
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <img
            src="/assets/Kavia_Logo_2.png"
            alt="Kavia"
            class="h-[22px] min-w-[22px]"
            style="padding-left: 8px"
          />
        </div>

        <!-- Navigation -->
        <ul class="hidden md:flex items-center gap-6 ml-8">
          <li v-for="nav in navLinks" :key="nav.text">
            <a
              :href="nav.href"
              class="font-medium text-[#efe7dc] text-[16px] px-1 py-0 transition-colors duration-150 hover:text-[#ff851b]"
              >{{ nav.text }}</a
            >
          </li>
        </ul>

        <!-- Actions -->
        <div class="flex items-center gap-4 ml-auto">
          <NuxtLink
            to="#contact"
            class="font-semibold text-[#efe7dc] text-[16px] px-4 py-2 rounded hover:text-[#ff851b] transition-colors"
          >
            Contact
          </NuxtLink>
          <NuxtLink
            to="#demo"
            class="ml-2 font-bold text-[16px] px-6 py-2 rounded-[6px] bg-[#ff851b] text-white shadow transition-all hover:shadow-lg hover:brightness-110"
          >
            Demo
          </NuxtLink>
        </div>
      </nav>
    </header>

    <!-- Spacer for fixed header -->
    <div class="h-[56px]"></div>

    <!-- MAIN CONTENT -->
    <main class="flex-1 flex flex-col items-center w-full px-4 sm:px-8" :style="{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }">
      <!-- HERO SECTION -->
      <section class="w-full flex flex-col items-center justify-center py-12 md:py-16" style="min-height:420px;">
        <h1
          class="text-[48px] md:text-[48px] font-bold text-white text-center mb-5 tracking-normal select-none"
        >
          Inspect. Plan. Build.
        </h1>
        <p class="text-[20px] text-[#efe7dc] text-center mb-7 max-w-2xl">
          Foundational Solutions to Perfectly Measure and Process code. Explore It.
        </p>
        <NuxtLink
          to="#get-started"
          class="rounded-[8px] px-8 py-4 bg-[#ff851b] text-white font-bold text-[18px] transition-all shadow hover:shadow-lg hover:brightness-110"
          style="font-weight:700;"
        >
          Get started with Kavia
        </NuxtLink>
      </section>

      <!-- VALUE PROPOSITION PANEL -->
      <section class="flex flex-col items-center w-full mb-8">
        <h2
          class="text-[36px] font-bold text-center mb-4"
        >
          <span class="text-[#ff851b]">Reimagining</span>
          <span class="text-white"> Software Product Development</span>
        </h2>
        <div
          class="bg-[#191516] rounded-[22px] w-full max-w-3xl mx-auto flex flex-col shadow-md px-8 py-7 mb-4"
        >
          <p class="text-white text-3xl sm:text-4xl font-bold text-center">
            From <span class="text-[#ff851b]">weekend ideas!</span><br />
            <span class="text-[#efe7dc] italic" style="fontSize: '28px'">to enterprise launch.</span>
          </p>
        </div>
      </section>

      <!-- PRODUCT HIGHLIGHT GRID -->
      <section class="w-full flex flex-col items-center">
        <h3 class="text-[32px] font-bold text-white text-center pt-12 pb-7">
          Built for Enterprise. Simplified for Software Creators
        </h3>
        <div
          class="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-7 pb-8"
        >
          <div
            v-for="card in cards"
            :key="card.title"
            class="bg-[#241d1b] rounded-[14px] shadow transition-all hover:-translate-y-1 hover:shadow-lg border border-transparent hover:border-[#ff851b] flex flex-col overflow-hidden"
            style="min-height:340px;"
          >
            <div class="aspect-w-16 aspect-h-9 bg-[#191516] flex items-center justify-center">
              <img
                v-if="card.img"
                :src="card.img"
                alt=""
                class="w-full h-full object-contain object-center"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-[#fff] text-opacity-50 text-lg">Image</div>
            </div>
            <div class="flex-1 flex flex-col px-6 py-5">
              <h4 class="text-[18px] font-semibold text-[#efe7dc] mb-2">{{ card.title }}</h4>
              <p class="text-[15px] text-[#efe7dc]">{{ card.desc }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- FOOTER -->
    <footer
      class="w-full bg-[#231e1f] border-t border-[#2d292b] text-[#efe7dc] flex flex-col items-center pt-12 pb-8 px-5 md:px-[56px] mt-auto"
      style="box-shadow: 0 -2px 20px 0 rgba(31,23,13,0.19)"
    >
      <div class="w-full max-w-7xl flex flex-col md:flex-row justify-between gap-12 md:gap-0">
        <!-- Left: Logo & Brand -->
        <div class="flex flex-col gap-4 md:w-1/3">
          <img src="/assets/Kavia_Logo_2.png" alt="Kavia" class="h-7 w-auto mb-2" />
          <p class="max-w-xs text-sm text-[#efe7dc]">
            Kavia – Advanced, scalable, and simple software creation platform for everyone.
          </p>
          <div class="flex flex-row gap-3 mt-1">
            <a
              v-for="icon in socialIcons"
              :key="icon.alt"
              :href="icon.href"
              class="text-[#efe7dc] hover:text-[#ff851b] transition-colors"
              target="_blank" rel="noopener" :aria-label="icon.alt"
            >
              <component :is="icon.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>
        <!-- Middle: Navigation -->
        <div class="flex flex-col md:w-1/3 gap-8 md:gap-0 md:flex-row md:justify-center md:items-start">
          <div class="flex flex-col gap-2 min-w-[120px]">
            <h5 class="font-bold text-[#ff851b] mb-1">Product</h5>
            <a v-for="item in productLinks" :key="item.text" :href="item.href" class="text-[#efe7dc] hover:text-[#ff851b] text-[15px] transition-colors" >{{ item.text }}</a>
          </div>
          <div class="flex flex-col gap-2 min-w-[120px] ml-0 md:ml-8">
            <h5 class="font-bold text-[#ff851b] mb-1">Company</h5>
            <a v-for="item in companyLinks" :key="item.text" :href="item.href" class="text-[#efe7dc] hover:text-[#ff851b] text-[15px] transition-colors" >{{ item.text }}</a>
          </div>
        </div>
        <!-- Right: Legal/Contact -->
        <div class="flex flex-col md:items-end md:w-1/3 gap-3">
          <div class="flex gap-2 mb-2">
            <a v-for="item in legalLinks" :key="item.text" :href="item.href" class="text-[#efe7dc] hover:text-[#ff851b] text-[15px] underline transition-colors">{{ item.text }}</a>
          </div>
          <div class="text-xs text-[#efe7dc] mb-0">
            © 2023 Kavia LLC. All Rights Reserved.
          </div>
          <div class="text-xs text-[#efe7dc] mt-1">WORLDWIDE</div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// PUBLIC_INTERFACE
// This script defines the landing page Home component following pixel-perfect design guidelines.

import { defineComponent } from 'vue'

// Navigation bar links
const navLinks = [
  { text: "Product", href: "#product" },
  { text: "Solutions", href: "#solutions" },
  { text: "Resources", href: "#resources" },
  { text: "Pricing", href: "#pricing" },
]

// Product cards grid
const cards = [
  {
    title: "AI-Driven Code Analysis",
    desc: "Instantly measure complexity and streamline code with advanced AI recommendations.",
    img: "",
  },
  {
    title: "Architecture Mapper",
    desc: "Visualize and plan software structure efficiently for rapid iteration.",
    img: "",
  },
  {
    title: "CI/CD Integrations",
    desc: "Seamlessly plug into your pipelines with minimal setup and full control.",
    img: "",
  },
  {
    title: "One-Click Deploy",
    desc: "Take your idea from repository to the cloud with a single click, zero hassle.",
    img: "",
  },
  {
    title: "Quality & Security Insights",
    desc: "Automated checks for best practices and security vulnerabilities.",
    img: "",
  },
  {
    title: "Human in the Loop Review",
    desc: "Collaborate with experts; speed without losing control.",
    img: "",
  },
]

// Social icons (placeholder: replace with icon components as needed)
const socialIcons = [
  {
    icon: {
      render() { return h('svg', { fill: "currentColor", viewBox: "0 0 20 20", width: "20", height: "20" }, [
        h('path', { d: 'M18.896 6.023a7.952 7.952 0 01-2.329.638 4.086 4.086 0 001.804-2.263 8.219 8.219 0 01-2.606.989A4.104 4.104 0 009.85 9.034a11.635 11.635 0 01-8.447-4.287A4.086 4.086 0 002.61 8.13a4.062 4.062 0 01-1.859-.514c0 .019 0 .038 0 .058A4.108 4.108 0 004.086 11.22a4.1 4.1 0 01-1.853.07 4.108 4.108 0 003.832 2.85A8.236 8.236 0 012 16.132 11.62 11.62 0 008.29 18c6.29 0 9.764-5.274 9.764-9.85 0-.15-.004-.299-.011-.448A7.078 7.078 0 0020 4.71a8.065 8.065 0 01-2.104.572z' })
      ]) },
    },
    href: "#", alt: "Twitter"
  },
  {
    icon: {
      render() { return h('svg', { fill: "currentColor", viewBox: "0 0 20 20", width: "20", height: "20" }, [
        h('path', { d: 'M10 0C4.477 0 0 4.478 0 10c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54V10h2.54V7.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.242 0-1.632.771-1.632 1.562V10h2.773l-.443 2.89h-2.33V19.88C16.343 19.13 20 14.991 20 10c0-5.522-4.478-10-10-10z' })
      ]) },
    },
    href: "#", alt: "Facebook"
  },
]

// Footer navigation links
const productLinks = [
  { text: "Home", href: "/" },
  { text: "Docs", href: "#" },
  { text: "API", href: "#" },
  { text: "Integrations", href: "#" },
]
const companyLinks = [
  { text: "About", href: "#" },
  { text: "Careers", href: "#" },
  { text: "Blog", href: "#" },
]
const legalLinks = [
  { text: "Terms", href: "#" },
  { text: "Privacy", href: "#" },
  { text: "Contact", href: "#contact" },
]

// Background styles
const bgStyle = `
  background:
    radial-gradient(ellipse 60% 70% at 50% 25%, #30271f 0%, #231e1f 60%, #191516 100%);
  min-height: 100vh;
`
const headerStyle = `
  background: #232021;
  box-shadow: 0 1px 5px rgba(33,21,1,0.13);
`

</script>

<style scoped>
/* Hide Nuxt default welcome */
:deep(.nuxt-welcome) {
  display: none !important;
}

/* Responsive tweaks */
@media (max-width: 1060px) {
  .footer-cols {
    flex-direction: column;
    gap: 2.5rem;
  }
}
/* Tailwind "aspect-w-16 aspect-h-9" emulation for explicit ratio for cards if not available */
.aspect-w-16 {
  position: relative;
  width: 100%;
}
.aspect-h-9::before {
  content: "";
  display: block;
  padding-top: 56.25%;
}
.aspect-h-9 > * {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  width: 100%; height: 100%;
}
</style>
