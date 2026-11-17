# 🏛️ CALSTAR Admin Panel — Handover & User Guide

Welcome to the **CALSTAR (MNLU Mumbai)** Content Management Admin Panel! This guide is designed for non-technical team members to manage website content, upload photos, and post events without touching any code.

---

## 1. Accessing the Admin Panel

- **Web Address:** `https://your-domain.vercel.app/admin`  
  *(Or `http://localhost:5173/admin` during local development)*.
- **Login Shortcut:** You can also click the **"Admin Portal"** link in the website footer.
- **Security:** If you are not logged in, you will be redirected to the secure login page at `/admin/login`.

---

## 2. Logging In

1. Open `/admin/login`.
2. Enter your **Admin Email** and **Password** (set up in Supabase Authentication).
3. Click **"Sign In to Dashboard"**.
4. Once logged in, your session stays active automatically. To end your session, click **"Logout"** in the top right corner.

---

## 3. Managing People (Faculty & Office Bearers)

The **People Management** tab controls the **"People"** section on the live website.

### A. Adding a New Member
1. Click the **"+ Add Member"** button.
2. Fill in:
   - **Full Name:** e.g., *Dr. Rajesh Kumar*
   - **Role / Title:** e.g., *Assistant Professor of Economics* or *Student Convener*
   - **Category:** Select either **Faculty** or **Office Bearer**
   - **Order Index:** A number (0, 1, 2...) controlling display order from left to right. Lower numbers appear first.
   - **Profile Photo:** Click **Upload Photo** to pick a picture from your computer (JPG, PNG, WEBP). It will automatically be stored in Supabase Storage.
   - **Quote / Testimonial (Optional):** Enter a quote or short statement. Any member with a quote will automatically appear in the interactive editorial testimonial carousel on the website!
3. Click **"Save Member"**.

### B. Editing or Deleting a Member
- Click the **pencil icon (Edit)** to change details or replace a photo.
- Click the **trash icon (Delete)** to remove a member permanently.

---

## 4. Managing Events & Initiatives

The **Events Management** tab controls the **"Events & Initiatives"** section on the website.

### A. Posting a New Event
1. Click the **"+ Add Event"** button.
2. Fill in:
   - **Event Title:** e.g., *National Air & Space Law Conference 2026*
   - **Date / Schedule:** Flexible text, e.g. *April 15, 2026* or *Dates to be Announced Soon*
   - **Status:** Choose **Upcoming** or **Completed / Past**
   - **Category Tag:** e.g., *Competition*, *Publication*, *Seminar*, *Workshop*, or *Conference*
   - **Registration / Info Link (Optional):** e.g., `https://forms.gle/...` (adds a "Participate / Details" button on the card)
   - **Poster Image (Optional):** Upload an announcement banner or flyer.
   - **Description:** A short description of the event, eligibility, or guidelines.
3. Click **"Save Event"**.

### B. Marking an Event as Past / Completed
- In the events list, click **"Mark as Completed"** on any upcoming event. This moves it to the **"Past Events"** tab on the public website without deleting it.

---

## 5. Connecting with Vercel (For Website Deployment)

When deploying updates to Vercel, make sure the environment variables are set:

1. Go to your [Vercel Dashboard](https://vercel.com).
2. Select your `mnlumumbai` project.
3. Go to **Settings** → **Environment Variables**.
4. Add these two variables:
   - **`VITE_SUPABASE_URL`** = `https://pqqdrfuztlxabhzrvdme.supabase.co`
   - **`VITE_SUPABASE_ANON_KEY`** = `sb_publishable_muCpBSiylk_mXuFKCmcLNQ_THU_SmDG`
5. Click **Save** and trigger a **Redeploy**.

---

## 6. How to Add or Change Admin Passwords

If you need to change your admin password or invite another team member:
1. Log in to [Supabase Dashboard](https://supabase.com/dashboard/project/pqqdrfuztlxabhzrvdme).
2. Go to **Authentication** → **Users**.
3. To add a user: Click **"Add user"** → **"Create user"** → enter email and password.
4. To reset a password: Click the three dots next to an existing user → **"Send password reset"**.

---
*For technical support, reach out to the development team or refer to the Supabase documentation.*
