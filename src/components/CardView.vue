<script setup>
import { defineProps } from "vue"

const props = defineProps(['post'])
</script>


<template>
  <ACard hoverable style="width: 240px" class="card">
    <template #cover>
      <img alt="example" :src="post.url" />
    </template>
    <ACardMeta :title="post.username">
      <template #description>{{ post.caption }}</template>
    </ACardMeta>
  </ACard>
</template>


<style scoped>
.card:hover{
  box-shadow: 5px 10px 18px #888888;
}

.card{
  margin-bottom: 20px;
  box-shadow: 2px 5px 9px #888888;
}
</style>