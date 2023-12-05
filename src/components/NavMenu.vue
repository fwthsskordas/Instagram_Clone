<script setup>
import {RouterLink, useRouter} from "vue-router"
import ContainerView from './ContainerView.vue';
import {ref} from "vue"
import AuthModal from "./AuthModal.vue";

const searchUsername = ref("")
const isAuth = ref(false)
const router = useRouter()


const onSearch = () => {
  if(searchUsername.value){
    router.push(`/profile/${searchUsername.value}`)
    searchUsername.value = ""
  }
}

</script>


<template>
  <aLayoutHeader>
        <ContainerView>
          <div class="nav-container">
            <div class="right-content">
              <RouterLink to="/">Instagram</RouterLink>
              <aInputSearch
                v-model:value="searchUsername"
                placeholder="Username..."
                style="width: 200px"
                @search="onSearch"
              />
            </div>
            <div class="left-content" v-if="!isAuth">
              <AuthModal :isLogin="false"/>
              <AuthModal :isLogin="true"/>
            </div>
            <div class="left-content" v-else>
              <AButton type="primary">Profile</AButton>
              <AButton type="primary">Log out</AButton>
            </div>
          </div>
        </ContainerView>
  </aLayoutHeader>
</template>

<style scoped>
.nav-container{
  display: flex;
  justify-content: space-between;
}

.right-content{
  display: flex;
  align-items: center;
  gap: 2rem;
}

.left-content{
  display: flex;
  align-items: center;
  gap: 2rem;
}
</style>