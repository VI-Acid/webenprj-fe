<script setup lang="ts">
import { ref, computed } from 'vue'
import PostCard from '@/components/organisms/PostCard.vue'
import SearchBar from '@/components/molecules/SearchBar.vue'
import TagSelect from '@/components/molecules/TagSelect.vue'
import BaseDivider from '@/components/atoms/BaseDivider.vue'
import { POSTS, type Post } from '@/data/posts'

const q = ref('')
const tag = ref('')
const tags = Array.from(new Set(POSTS.map((p) => p.tag)))
  .sort()
  .map((t) => ({ label: t, value: t }))

const filtered = computed<Post[]>(() => {
  const term = q.value.trim().toLowerCase()
  return POSTS.filter((p) => {
    const byTag = tag.value ? p.tag === tag.value : true
    const byText = term
      ? p.text.toLowerCase().includes(term) || p.user.name.toLowerCase().includes(term)
      : true
    return byTag && byText
  })
})
</script>

<template>
  <section class="section">
    <header class="flex flex-col md:flex-row md:items-center gap-3 mb-4">
      <h1>Resources</h1>
      <div class="flex items-center gap-2 w-full md:w-auto">
        <SearchBar @search="(v) => (q = v)" />
        <TagSelect v-model="tag" :options="tags" placeholder="Filter by tag…" />
      </div>
    </header>

    <div v-if="filtered.length === 0" class="card card-pad text-neutral-600">
      No posts found. Try another tag or search term.
    </div>

    <div v-else class="flex flex-col items-center gap-3 py-8">
      <template v-for="p in filtered" :key="p.id">
        <PostCard :post="p" />
        <BaseDivider class="divider-narrow" />
      </template>
    </div>
  </section>
</template>
