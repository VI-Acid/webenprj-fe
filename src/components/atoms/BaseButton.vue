<template>
  <!--<component :is="as"> Vue-spezifisch.
  :is sagt Vue, welches HTML-Tag oder welche Komponente tatsächlich verwendet wird.
  → Wenn as="button", rendert Vue <button>.
  → Wenn as="a", rendert Vue <a>. So bleibt die Komponente flexibel.-->
  <component
    :is="as"
    :type="as === 'button' ? type : undefined"
    :class="[base, variantClass, sizeClass]"
    :disabled="disabled"
  >
    <slot />
    <!--Platzhalter für Inhalt zwischen den Tags. zB  <Button>Click me</Button>-->
  </component>
</template>

<script setup lang="ts">
// definiert, welche Props die Komponente akzeptiert
interface Props {
  variant?: 'primary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}
// definiert die Props laut Interface
// withDefaults(...) → gibt Standardwerte an, wenn der Parent keine Props übergibt
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  as: 'button',
  type: 'button',
  disabled: false,
})

// Grundklasse für den Button
const base = 'btn'
const variantClass = {
  primary: 'btn-primary',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
  danger: 'btn-danger',
}[props.variant]
const sizeClass = { sm: 'btn-sm', md: '', lg: 'btn-lg' }[props.size]
</script>
