  <script setup>
  import { ref, defineProps, reactive } from 'vue';
  import { useUserStore } from "../stores/users.js"
  import { storeToRefs } from 'pinia';
  
  const props = defineProps(['isLogin'])
  const visible = ref(false);
  const userStore = useUserStore()

  const {errorMessage} = storeToRefs(userStore);


  const userCredentials = reactive({
    email: "",
    password: "",
    username: "",
  })
  const showModal = () => {
    visible.value = true;
  };
  
  const handleOk = () => {
    userStore.handleSingup(userCredentials)
  };

  function handleCancel(){
    userStore.clearErrorMessage()
    visible.value = false
  }
  const title =  props.isLogin ? 'Login' : 'Sign Up' 
  </script>

<template>
  <div>
    <AButton type="primary" @click="showModal">{{ title }}</AButton>
    <AModal v-model:visible="visible" :title="title" @ok="handleOk">
        <template #footer>
          <AButton key="back" @click="handleCancel">Cancel</AButton>
          <AButton key="sumbit" type="primary" :loading="loading" @click="handleOk">Sumbit</AButton>
        </template>
        <aInput class="input" v-if="!isLogin" v-model:value="userCredentials.username" placeholder="Username" />
        <aInput class="input" v-model:value="userCredentials.email" placeholder="Email" />
        <aInput class="input" v-model:value="userCredentials.password" placeholder="Password" />
        <ATypographyText v-if="errorMessage" type="danger">{{ errorMessage }}</ATypographyText>
      </AModal>
    </div>
  </template>

<style scoped>
    .input{
        margin-top: 10px;
    }
</style>