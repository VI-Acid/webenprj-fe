<script setup lang="ts">
import PostCard from '@/components/organisms/PostCard.vue'
import BaseDivider from '@/components/atoms/BaseDivider.vue'

import avatar1 from '@/assets/user1.avif'
import sampleImg from '@/assets/PostPicture1.png'

const posts = [
  {
    id: 1,
    user: { name: 'mariasantos', avatar: avatar1 }, // <-- Variable, kein String-Pfad!
    tag: 'webengineering',
    time: '2d',
    text: 'Today I finally understood async/await…',
    image: sampleImg,
    likes: 12,
    comments: 3,
    streak: 25,
  },
]
</script>

<template>
  <main class="flex flex-col items-center gap-3 py-8">
    <PostCard v-for="p in posts" :key="p.id" :post="p" />

    <BaseDivider class="divider-narrow" />

    <PostCard v-for="p in posts" :key="p.id" :post="p" />

    <BaseDivider class="divider-narrow" />

    <PostCard v-for="p in posts" :key="p.id" :post="p" />

    <BaseDivider class="divider-narrow" />

    <PostCard v-for="p in posts" :key="p.id" :post="p" />

    <BaseDivider class="divider-narrow" />

    <PostCard v-for="p in posts" :key="p.id" :post="p" />

    <BaseDivider class="divider-narrow" />
  </main>
</template>
