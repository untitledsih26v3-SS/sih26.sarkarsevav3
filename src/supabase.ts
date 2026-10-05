import { createClient } from '@supabase/supabase-js';

// Hardcoding the public keys directly to bypass Cloudflare build blockers
const supabaseUrl = 'https://vxfxvcapucmyukdbzkqw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4Znh2Y2FwdWNteXVrZGJ6a3F3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTExMjc3MTIsImV4cCI6MjEwNjcwMzcxMn0._UfIkFi7FyKixrU9XJ6WLLvLNneYl2rFq-JxZtud02k';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
