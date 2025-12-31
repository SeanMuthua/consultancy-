# Database Schema & Setup (Supabase)

## Overview
This document outlines the database schema required for the Lead Management system used in the Two-Track Business Model. We use Supabase (PostgreSQL) for storage.

## Tables

### 1. `leads`
Stores all inquiries from the `BookingFormV2`.

```sql
CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  track TEXT NOT NULL CHECK (track IN ('track1', 'track2', 'collaborative')),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed', 'lost')),
  notes TEXT
);
```

### 2. `admin_users` (Optional - if custom auth needed beyond Supabase Auth)
Managed via Supabase Auth. Ensure RLS (Row Level Security) policies allow only authenticated admins to view/edit `leads`.

## Row Level Security (RLS) Policies

```sql
-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to insert leads (Booking Form)
CREATE POLICY "Enable insert for public" ON leads FOR INSERT WITH CHECK (true);

-- Policy: Allow admins to view all leads
CREATE POLICY "Enable read for admins" ON leads FOR SELECT USING (auth.role() = 'authenticated');

-- Policy: Allow admins to update leads
CREATE POLICY "Enable update for admins" ON leads FOR UPDATE USING (auth.role() = 'authenticated');
```

## Setup Instructions

1.  **Create Project**: Go to [Supabase.com](https://supabase.com) and create a new project.
2.  **SQL Editor**: Copy the SQL above into the SQL Editor and run it.
3.  **Environment Variables**: Add your Supabase URL and Key to `.env.local`:
    ```env
    NEXT_PUBLIC_SUPABASE_URL=your-project-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
    ```
4.  **Types**: Generate TypeScript types:
    ```bash
    npx supabase gen types typescript --project-id your-project-id > types/supabase.ts
    ```
