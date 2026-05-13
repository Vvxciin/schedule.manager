# Software Project Plan

---

##Functional Requirements

###Trainer Management

Track Trainers

* Track trainer location (where trainers are)
* View trainer timetable/schedule
* Track trainer working hours

Working Hours

* Calculate total worked hours
* Track whether trainers have clocked in (optional)
* Include 1 hour travel time in working hour calculation

Scheduling

* Automatically assign trainers at the beginning of each week
* Automatically assign substitutes when a trainer is sick
* Shift swapping (optional)
    * Trainers can request schedule changes if dissatisfied with assigned shifts
* Preferred working time (optional)
    * Trainers can block specific days they do not want to work

###Overview

* 1-week schedule overview

###Booking System

Customer Class Booking

* Customers can book classes
* Unlimited bookings allowed
* Customers cannot book 2 classes at the same time
* Bookings can be cancelled
* Maximum 20 participants per class

Notifications

* Notify customers when a class is cancelled or rescheduled
* Notification via email
* Real-time notifications (optional)

###AI Assistant (Optional)

* Small AI assistant for customers
* Can guide customers and answer questions or problems

###Calendar

* Small calendar for each room and trainer
* Display reservations and work schedules

###Login System

User roles:

* Admin
* Trainers
* Customers

⸻

##Non-Functional Requirements

###Performance

* Handle 300+ customers
* Manage 100+ employees/trainers

###Scheduling Constraints

* Enforce maximum working hours per week
* No overlapping shifts
* Skill matching (trainer → class type)

###Security

* Secure login using passwords for all users
* Customer data shall be securely stored

###Usability

* The system shall be easy to use for non-technical users

###Availability

* The system shall be available 24/7

###Maintainability

* The code shall be modular and easy to maintain

###Website

* Simple website with login credentials

⸻

##Data Model

###Trainer

* trainerId
* name
* email
* phoneNumber
* skills
* workingHours
* availability

###Customer

* customerId
* name
* email
* phoneNumber
* bookedClasses

###Course

* courseId
* trainerId
* title
* roomNumber
* classTime
* startDate
* endDate
* maxParticipants

###Relationships

* One trainer can teach multiple courses
* Each course can only have one assigned trainer
* One customer can create multiple bookings
* Each booking belongs to one customer
* One course can have multiple bookings
* Each booking belongs to one course
* One room can host multiple courses
* Each course takes place in one room

⸻

##System Testing

###Trainer Simulation

Simulate auto assignment for 101 trainers

* Verify working hour calculation
* Verify preferred working time constraints

###Customer Simulation

Simulate booking for 301 customers

* Check class overflow
* Maximum 20 people per class
* Ensure customers cannot book overlapping classes

###Substitution Test

Simulate trainer sick leave

* Check if automatic substitution works
* Verify customer notifications are sent

⸻

##System Architecture / Tech Stack

* Next.js → Website / Web App
* Firebase Auth → Login & authentication
* Firestore → Real-time database
* Cloud Functions → Auto-assignment and automation logic
* Firebase Hosting / Vercel → Deployment
* React Native / Expo → Mobile App (optional)

