# Software Project Plan

---

### Introduction

The goal of this project is to design and develop a software system for managing a fitness studio network called “Fit & Aktiv”. The current system relies on manual planning, which leads to scheduling errors, inefficient time management, and difficulties in handling last-minute changes.

The main objective of this software is to automate and simplify the scheduling process for courses, trainers, rooms, and customers. The system should reduce human errors, improve communication, and ensure efficient resource planning.

The system supports three main user roles: Admin, Trainer, and Customer. It allows course scheduling, booking management, trainer availability tracking, and automatic handling of schedule conflicts.

______

## Functional Requirements

### Trainer Management

Track Trainers

* Track trainer location (where trainers are)
* View trainer timetable/schedule
* Track trainer working hours

Working Hours

* Calculate total worked hours
* Include 1 hour travel time in working hour calculation

Scheduling

* Automatically assign trainers at the beginning of each week
* Automatically assign substitutes when a trainer is sick

### Overview

* 1-week schedule overview

### Booking System

Customer Class Booking

* Customers can book classes
* Unlimited bookings allowed
* Customers cannot book 2 classes at the same time
* Bookings can be cancelled
* Maximum 20 participants per class

### Notifications

* Notify customers when a class is cancelled or rescheduled
* Notification via email
* Real-time notifications (optional)


### Calendar

* Small calendar for each room and trainer
* Display reservations and work schedules

### Login System

User roles:

* Admin
* Trainers
* Customers

⸻

## Non-Functional Requirements

### Performance

* Handle 1000 customers at least
* Manage 100+ employees/trainers

### Scheduling Constraints

* Enforce maximum working hours per week
* No overlapping shifts
* Include 1 hour travel time between studios in working hour calculation
* Trainers may work in multiple studios
* Automatic reassignment when schedule changes occur

### Security

* Secure login using passwords for all users
* Customer data shall be securely stored

### Usability

* The system shall be easy to use for non-technical users

### Availability

* The system shall be available 24/7

### Maintainability

* The code shall be modular and easy to maintain

### Website

* Simple website with login credentials

⸻


### Use Cases

### Actors:

* Admin / Management
* Trainer
* Customer (Member)
* System (Automated Processes)



### 1. Admin / Management

The Admin is responsible for the overall management of the fitness studio system.

Main responsibilities:

* Create, edit, and delete courses
* Assign trainers to courses
* Assign rooms to courses
* Manage and update weekly schedules
* Assign substitute trainers in case of absence
* Plan special events (e.g. company classes, trial sessions)
* Cancel or reschedule courses when necessary
* Oversee overall system operations



### 2. Trainer

The Trainer manages their availability and participates in assigned courses.

Main responsibilities:

* Set and update personal availability
* View assigned working schedule and courses
* View schedule changes in real time
* Accept or reject assigned courses (optional)
* Take over substitute courses if required
* Work according to assigned timetable



### 3. Customer (Member)

Customers use the system to book and manage their course participation.

Main responsibilities:

* Book available courses
* Cancel bookings
* View weekly course schedule
* Receive notifications about changes or cancellations
* Prevent booking overlapping classes automatically
* View available courses and schedules



### 4. System (Automated Functions)

The system handles automatic processes to support scheduling and management.

Main responsibilities:

* Detect and prevent scheduling conflicts (time, trainer, room overlaps)
* Automatically enforce maximum participant limits per course
* Suggest substitute trainers in case of absence
* Automatically assign substitute trainers when possible
* Cancel courses if no substitute is available
* Send notifications to users about changes or cancellations
* Ensure real-time updates of schedule changes



### Use Case Summary

The system is designed around four main actors: Admin, Trainer, Customer, and System. Each actor has specific responsibilities to ensure efficient scheduling, booking, and resource management. The system focuses on automation, conflict prevention, and real-time updates to reduce manual workload and errors.

  ________


## Data Model

### Trainer

* trainerId
* name
* email
* phoneNumber
* skills
* workingHours
* availability

### Customer

* customerId
* name
* email
* phoneNumber
* bookedClasses

### Course

* courseId
* trainerId
* title
* roomNumber
* classTime
* startDate
* endDate
* maxParticipants

### Relationships

* One trainer can teach multiple courses
* Each course can only have one assigned trainer
* One customer can create multiple bookings
* Each booking belongs to one customer
* One course can have multiple bookings
* Each booking belongs to one course
* One room can host multiple courses
* Each course takes place in one room

⸻



### System Logic 

* A trainer cannot be assigned to two courses at the same time
* A course cannot exceed the maximum number of 20 participants
* If a trainer is unavailable, the system should automatically search for a substitute
* If no substitute is available, the course must be cancelled
* Customers cannot book overlapping classes
* All schedule changes must be updated in real time
* Trainer availability must always be considered during scheduling



_________

### Class Diagram (Text Version)

### Classes:

### Trainer

* trainerId
* name
* email
* skills
* availability

### Customer

* customerId
* name
* email
* bookedClasses

### Course

* courseId
* title
* time
* room
* maxParticipants
* trainerId

### Booking

* bookingId
* customerId
* courseId

### Room

* roomId
* name
* capacity



### Relationships:

* Trainer → Course (1 to many)
* Course → Booking (1 to many)
* Customer → Booking (1 to many)
* Course → Room (many courses per room)




### Sequence Diagram – Course Booking Process (Text Version)

### Actors :

* Customer
* Web Interface
* Booking System
* Database
* Notification System



### Process Flow:

1. The customer opens the booking page.
2. The web interface requests available courses from the booking system.
3. The booking system retrieves course data from the database.
4. The available courses are displayed to the customer.
5. The customer selects a course and submits the booking request.
6. The booking system checks:
    * course capacity
    * overlapping bookings
    * course availability
1. If validation is successful, the booking is stored in the database.
2. The system updates the participant count.
3. A confirmation notification is sent to the customer.
4. The customer receives the booking confirmation.



_________

### User Interface Design

The system provides a simple and intuitive web interface designed for non-technical users.

* A login page allows users to access the system based on their role.
* An admin dashboard provides full control over courses, trainers, and scheduling.
* A trainer dashboard displays assigned courses and availability settings.
* A customer dashboard allows course booking and schedule viewing.
* A calendar view shows weekly schedules for rooms, trainers, and courses.
* Booking actions are designed to be completed in a few simple clicks.


_________


## System Architecture / Tech Stack

* Next.js → Website / Web App
* Firebase Auth → Login & authentication
* Firestore → Real-time database
* Cloud Functions → Auto-assignment and automation logic
* Firebase Hosting / Vercel → Deployment
* React Native / Expo → Mobile App (optional)


_________



## System Testing

### Trainer Simulation

Simulate auto assignment for 101 trainers

* Verify working hour calculation
* Verify preferred working time constraints

### Customer Simulation

Simulate booking for 301 customers

* Check class overflow
* Maximum 20 people per class
* Ensure customers cannot book overlapping classes

### Substitution Test

Simulate trainer sick leave

* Check if automatic substitution works
* Verify customer notifications are sent

⸻

### Conclusion

This system provides an automated solution for managing fitness studio operations. It reduces manual planning effort, prevents scheduling conflicts, and improves communication between trainers, customers, and administration. The design focuses on usability, scalability, and automation to ensure efficient management of a growing fitness business.
_______


  

