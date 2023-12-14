import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nqdnpsmthculinjdrwrh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xZG5wc210aGN1bGluamRyd3JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzNzQ5MTgsImV4cCI6MjAxNzk1MDkxOH0.HCMzVw8qjFiba9OyOfa6nfjX1z-7x1MLFK_IDOiOWxg"
export const supabase = createClient(supabaseUrl, supabaseKey)
