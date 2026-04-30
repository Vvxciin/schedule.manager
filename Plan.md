# Software Project Plan

## Functional Requirements

### Trainer Management
- Track trainers
  - Location
  - Timetable

### Working Hours
- Track working hours
  - Total hours worked
  - Clock-in system (optional)
  - Include 1 hour travel time

### Scheduling
- Automatically assign trainers at the beginning of the week
- Automatically assign substitutes (e.g. sick leave)
- Shift swapping (optional)
  - By request if dissatisfied with schedule
- Preferred working time (optional)
  - Trainers can block specific days

### Overview
- 1-week overview of schedule

### Booking System
- Class booking for customers
  - Unlimited bookings
  - Cannot book overlapping classes
  - Can be cancelled
  - Max 20 people per class

### Notifications
- Notify when class is cancelled/rescheduled
  - Via app and/or email

---

## Non-Functional Requirements
- Handle 300+ customers
- Manage 100+ employees
- Enforce max hours per week
- No overlapping shifts
- Skill matching (trainer → class type)
- Real-time notifications

---

## User Roles
- Admin
- Trainers
- Customers

---

## System Testing

### Trainer Simulation
- Simulate auto assignment for 101 trainers
  - Verify working hours calculation
  - Verify preferred time constraints

### Customer Simulation
- Simulate booking for 301 customers
  - Check class overflow (max 20 per class)
  - Ensure no double bookings

### Substitution Test
- Simulate sick trainer
  - Check auto substitution
  - Verify customer notifications

---

## Tech Stack
- Next.js (Web App)
- Firebase Auth (Authentication)
- Firestore (Database)
- Cloud Functions (Automation logic)
- Firebase Hosting / Vercel (Deployment)
- React Native / Expo (Mobile App - optional)
