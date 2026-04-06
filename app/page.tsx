"use client"

import { useEffect } from 'react'
import { supabase } from '@/lib/supabase' 

export default function Home() {
  useEffect(() => {
    // Definisikan fungsi di dalam agar tidak ada warning dependency
    const testConnection = async () => {
      try {
        const { data, error } = await supabase.from('rsvps').select('*').limit(1)
        
        if (error) {
          console.error("Koneksi Gagal:", error.message)
        } else {
          console.log("Koneksi Berhasil! Data:", data)
        }
      } catch (err) {
        console.error("Unexpected error:", err)
      }
    }

    testConnection()
  }, []) // Dependency array tetap kosong aman jika fungsi di dalam

  return (
    <div className="p-10 font-sans">
      <h1 className="text-2xl font-bold">Status Koneksi</h1>
      <p className="mt-2 text-gray-600">Buka Console (F12) untuk melihat hasil log.</p>
    </div>
  )
}