import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dwezgqoxmzopbmjjnzzs.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR3ZXpncW94bXpvcGJtampuenpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM1NzU3NzIsImV4cCI6MjA1OTE1MTc3Mn0.h5TOuE6XQSi-ScM1MbWJ-FtTwN8r_F42JcGqvl7R7Vo';

export const supabase = createClient('supabaseUrl', supabaseKey);