import { createClient } from '@supabase/supabase-js'

/**
 * Configuração do Supabase
 * As variáveis de ambiente serão configuradas posteriormente
 */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
