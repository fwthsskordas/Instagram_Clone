  <script setup>
  import { ref, defineProps } from 'vue';
  
  const props = defineProps(['isLogin'])
  const visible = ref(false);

  const showModal = () => {
    visible.value = true;
  };
  
  const handleOk = (e) => {
    console.log(e);
    open.value = false;
  };

  const title =  props.isLogin ? 'Login' : 'Sign Up' 
  </script>

<template>
    <div>
      <AButton type="primary" @click="showModal">{{ title }}</AButton>
      <AModal v-model:visible="visible" :title="title" @ok="handleOk">
        <aInput class="input" v-if="!isLogin" v-model:value="value" placeholder="Username" />
        <aInput class="input" v-model:value="value" placeholder="Email" />
        <aInput class="input" v-model:value="value" placeholder="Password" />
      </AModal>
    </div>
  </template>

<style scoped>
    .input{
        margin-top: 10px;
    }
</style>