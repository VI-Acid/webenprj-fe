<!--Benutzerbild mit Größenoption (greift auf .avatar, .avatar-md etc. zu)-->

<template>
  <!--Vue Datenbindung (: ist Kurzform für v-bind:).
Übergibt ein Array von Klassen → 'avatar' und der Wert von sizeClass-->
  <div :class="['avatar', sizeClass]">
    <!--Vue Struktur-Direktive v-if. Bild wird nur gerendert, wenn eine src übergeben wurde-->
    <img v-if="src" :src="src" alt="Avatar" class="avatar-img" />
    <!--:src="src": bindet den Prop-Wert an das src-Attribut.-->
  </div>
</template>

// Props (Kurzform für Properties) sind Eingabedaten, die eine Elternkomponente (Parent) an eine
Kindkomponente (Child) weitergibt // Vue 3 Composition API Syntactic Sugar - lang="ts": TypeScript
ist aktiv
<script setup lang="ts">
interface Props {
  src?: string
  size?: 'sm' | 'md' | 'lg'
}
// defineProps<Props>(): Vue Makro (Composition API). Sagt: „Diese Komponente akzeptiert Props mit Typ Props“
const props = withDefaults(defineProps<Props>(), { size: 'md' })

const sizeClass = {
  sm: 'avatar-sm',
  md: 'avatar-md',
  lg: 'avatar-lg',
}[props.size]
</script>
