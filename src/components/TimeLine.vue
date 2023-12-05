<script setup>
import CardView from './cardview.vue';
import ContainerView from './ContainerView.vue';

const data = [
    {
        id: 1,
        username: 'ha',
        url: '',
        caption: "lol"
    }
]
</script>


<template>
    <ContainerView>
        <div class="timeline-container">        
            <CardView v-for="post in data" 
                :key="post.id" 
                :post="post"
            />
        </div>
    </ContainerView>
</template>

<style scoped>
.timeline-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
}
</style>