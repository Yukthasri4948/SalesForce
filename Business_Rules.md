# Business Rules

## Sprint 4 – Building Business Logic with Apex

### Objective
Implement business logic for the Placement Management System by enforcing business rules before processing student applications.

## Business Rules

### Rule 1: Prevent Duplicate Applications
A student should not be allowed to apply for the same job more than once.

### Rule 2: Validate Application Deadline
Applications submitted after the closing date must be rejected.

### Rule 3: Validate CGPA
The student's CGPA must meet or exceed the minimum CGPA required by the company.

### Rule 4: Validate Active Backlogs
Students with active backlogs are not eligible if the company specifies "No Active Backlogs".

### Rule 5: Validate Branch Eligibility
Only students from eligible branches may apply.

### Rule 6: Save Valid Applications
Applications should be saved only after all validations succeed.

### Rule 7: Display Appropriate Messages
The system should display meaningful success or failure messages after processing an application.