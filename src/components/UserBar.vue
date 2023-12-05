<script setup>
import { defineProps } from 'vue';

const props = defineProps(['Username', 'UserInfo'])
</script>


<template>
    <div class="userbar-container">
        <div class="top-content">
            <ATypographyTitle :level="2">{{props.Username}}</ATypographyTitle>
        </div>
        <div class="bottom-content">
            <ATypographyTitle :level="5">{{ props.UserInfo.posts }} posts</ATypographyTitle>
            <ATypographyTitle :level="5">{{ props.UserInfo.followers }} followers</ATypographyTitle>
            <ATypographyTitle :level="5">{{ props.UserInfo.following }} following</ATypographyTitle>
        </div>
    </div>
</template>


<style scoped>

.userbar-container{
    padding-bottom: 75px;
}

.bottom-content{
    display: flex;
    align-items: center;
}

.bottom-content h5{
    margin: 0 !important;
    padding: 0;
    margin-left: 30px !important;
    align-items: center;
}
</style>