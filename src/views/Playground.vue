<script setup lang="ts">
import PostCard from '@/components/organisms/PostCard.vue'

// Assets IMMER importieren (oder aus /public referenzieren)
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
  <main>
    <section class="p-6 text-center">
      <div class="content-shell">
        <PostCard v-for="p in posts" :key="p.id" :post="p" />
      </div>
    </section>
  </main>
</template>
