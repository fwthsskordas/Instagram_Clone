import { ref } from 'vue'
import { defineStore } from 'pinia'
import {supabase} from "../supabase"
import { Table } from 'ant-design-vue'

export const useUserStore = defineStore('users', () => {
  const user = ref(null)
  const errorMessage = ref("")

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = () => {

  }

  const handleSingup = async (credentials) => {
    const {email, password, username} = credentials

    if(password.length < 6){
      return errorMessage.value = "Password length is too short"
    }
    
    if(username.length < 4){
      return errorMessage.value = "Username length is too short"
    }

    if(!validateEmail(email)){
      return errorMessage.value = "Wrong E-mail"
    }

    //validate user
    
    const {data: userExistWithUsername} = await supabase.from("users").select().eq('username', username).single()
    
    if(userExistWithUsername){
      return  errorMessage.value = "user already Exist"
    }

    errorMessage.value = ""

    //sign up
   const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    if(error){
      return errorMessage.value = error.message
    }

    await supabase.from("users").insert({
      username,
      email,
    })
  }

  const handleLogout = () => {
    
  }

  const getUser = () => {
    
  }

  const clearErrorMessage = () => {
    errorMessage.value = ""
  }
  return { user, errorMessage, handleLogin, handleSingup,  handleLogout, getUser, clearErrorMessage }
})
