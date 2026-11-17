import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://pqqdrfuztlxabhzrvdme.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'sb_publishable_muCpBSiylk_mXuFKCmcLNQ_THU_SmDG'

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey)

if (!isSupabaseConfigured) {
  console.warn(
    '[Supabase] Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Falling back to static data.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Upload an image file to Supabase Storage 'site-media' bucket
 * @param {File} file - The file object from input[type="file"]
 * @param {string} folder - 'people' or 'events'
 * @returns {Promise<string>} The public URL of the uploaded image
 */
export async function uploadSiteMedia(file, folder = 'general') {
  if (!file) throw new Error('No file provided')

  // Generate safe unique filename
  const fileExt = file.name.split('.').pop().toLowerCase()
  const cleanName = file.name
    .replace(/\.[^/.]+$/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .slice(0, 30)
  const fileName = `${folder}/${Date.now()}-${cleanName}.${fileExt}`

  const { data, error } = await supabase.storage
    .from('site-media')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    })

  if (error) {
    throw new Error(`Upload failed: ${error.message}`)
  }

  const { data: publicData } = supabase.storage
    .from('site-media')
    .getPublicUrl(data.path)

  return publicData.publicUrl
}
