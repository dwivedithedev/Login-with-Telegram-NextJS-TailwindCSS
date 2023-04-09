import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ruccaghopbvowacblzuu.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export default async function handler(req, res) {
    const { userId } = req.query
    const { data, error } = await supabase.from('users').select().eq('id', userId).single()
  
    if (error) {
      console.error(error)
      return res.status(500).json({ message: 'Error fetching user data.' })
    }
  
    return res.status(200).json(data)
  }
  