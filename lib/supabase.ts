import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Pastikan variabel env ada agar tidak crash saat build
if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("Supabase env variables are missing!")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)