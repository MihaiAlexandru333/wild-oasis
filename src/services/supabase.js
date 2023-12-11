import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lcyaiqcajbglxpqchdby.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxjeWFpcWNhamJnbHhwcWNoZGJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMjQ4MjEsImV4cCI6MjAxNDYwMDgyMX0.m_d3ZtE5hP968BsfOK32PBcQnyX2mO2Dkwg_KMHrsJE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
