<!--Container für Posts, Profile, etc. (nutzt .card, .card-header, .card-body …)-->

<template>
  <div class="card">
    <!--prüft, ob der Parent einen benannten Slot namens header übergeben hat.
Wenn ja, wird dieser Bereich angezeigt-->
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    <div class="card-body">
      <slot />
    </div>
    <!--Zweiter benannter Slot für Buttons oder Aktionen (z. B. Edit, Delete, Like).
    v-if="$slots.actions" → Bereich wird nur gerendert, wenn der Parent tatsächlich etwas an diesen Slot liefert-->
    <div v-if="$slots.actions" class="card-actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
