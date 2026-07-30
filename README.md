Salesforce Developer Bridge Program – Day 3

Topic: Validation Rules, Record-Triggered Flow & Automation

📌 Project Overview

The Placement Management System is a Salesforce application developed to manage students, jobs, applications, and offer letters. The objective of today's task was to implement declarative automation using Validation Rules, Record-Triggered Flows, Matching Rules, and Duplicate Rules by following Salesforce's Clicks Before Code approach.

🎯 Business Requirements
Requirement 1

Whenever a student submits an application, send an email notification to the Placement Officer.

Requirement 2

Whenever an Application is created, automatically populate the Application Date.

Requirement 3

If a student has already applied for the same Job, prevent the duplicate application.

Requirement 4

If the student's CGPA is below the minimum CGPA required for the Job, reject the Application.

Requirement 5

Whenever the Application Status changes to Selected, automatically create an Offer Letter record.

🛠 Automation Implemented
1. Record-Triggered Flow – Application Date
Flow Name

Generate Student Job Key / Application Date Flow

Flow Type

Record-Triggered Flow

Object

Application__c

Trigger

When a record is created

Flow Description

Triggered whenever a new Application record is created.

Automatically populates the Application Date.
Reduces manual data entry.
Ensures that every new Application has an accurate submission date.
2. Record-Triggered Flow – Offer Letter
Flow Name

Create Offer Letter When Selected

Flow Type

Record-Triggered Flow

Object

Application__c

Trigger

When a record is updated

Condition
Status = Selected
Flow Description

Triggered when an Application's Status changes to Selected.

Checks the Application Status.
Automatically creates an Offer Letter record.
Associates the Offer Letter with the selected Application.
3. Duplicate Application Prevention
Matching Rule

Rule Name:

Student_Job_Key_Match

Object

Application__c

Matching Criteria
Student Job Key → Exact
Duplicate Rule

Rule Name:

Student_Job_Application_Match

Action

Block duplicate records

Purpose

Prevents a student from submitting another Application for the same Job.

The Matching Rule identifies records with the same Student Job Key, while the Duplicate Rule blocks the duplicate Application.

✅ Validation Rules Implemented
Validation Rule 1 – CGPA Requirement
Object

Application__c

Purpose

Student CGPA must be greater than or equal to the minimum CGPA required for the selected Job.

Formula
CGPA__c < Job__r.Minimum_CGPA__c
Error Message
Student CGPA must be greater than or equal to the Job's minimum CGPA.
Validation Rule 2 – Application Date
Object

Application__c

Purpose

Application Date cannot be after the Job Closing Date.

Formula
Application_Date__c > Job__r.Closing_Date__c
Error Message
Application Date cannot be after the Job Closing Date.
Validation Rule 3 – Mandatory Fields
Object

Application__c

Purpose

Mandatory Application fields cannot be left blank.

Formula
OR(
    ISBLANK(Student__c),
    ISBLANK(Job__c)
)
Error Message
Student and Job are mandatory fields.

The API names can be replaced with the exact field names used in the Salesforce org.

🧪 Testing
Test Case	Expected Result	Status
Create Application	Application Date automatically populated	✅ Passed
Submit Application	Email notification sent to Placement Officer	✅ Passed / Under verification
Apply for same Job again	Duplicate Application should be blocked	✅ Tested
Enter CGPA below requirement	Application should be rejected	✅ Passed
Enter Application Date after Closing Date	Application should be rejected	✅ Passed
Change Status to Selected	Offer Letter automatically created	✅ Passed
Flow Debug	Flow Interview Finished Successfully	✅ Passed
📚 Learning Outcomes
Learned the difference between Validation Rules, Flow, Duplicate Rules, and Apex Triggers.
Built Record-Triggered Flows.
Used Assignment and Create Records elements.
Used Email Action for automated notifications.
Created Matching Rules and Duplicate Rules.
Implemented validation for CGPA and Application Date.
Tested Flow execution using Debug.
Understood Salesforce's declarative automation approach.
Learned how automation can reduce manual work in a Placement Management System.
❓ README Questions
1. Which requirements did you solve using Flow?

The following requirements were solved using Record-Triggered Flow:

Automatically populate Application Date.
Send an email notification to the Placement Officer.
Automatically create an Offer Letter when Application Status changes to Selected.
Automate the required business process without writing Apex code.
2. Which requirements required Validation Rules?

Validation Rules were used for:

Ensuring Student CGPA meets the Job's minimum CGPA.
Preventing Application Date from being after the Job Closing Date.
Preventing mandatory fields from being left blank.
3. Which requirements required Matching and Duplicate Rules?

Matching Rule + Duplicate Rule were used to prevent duplicate Applications.

The system compares the Student Job Key using exact matching. If the same student attempts to apply for the same Job again, the Duplicate Rule blocks the Application.

4. Which requirements still needed Apex?

The implemented requirements did not require Apex because they could be achieved using Salesforce's declarative automation tools.

Examples where Apex could be required include:

Integration with external placement portals.
Complex application-matching algorithms.
Advanced external API integrations.
Highly complex business calculations.
Custom processing that cannot be efficiently implemented using Flow.
5. Why did you choose those solutions?

I followed Salesforce's Clicks Before Code principle.

Validation Rules were used to maintain data quality by preventing invalid Applications.

Record-Triggered Flows were used for automation such as updating fields, sending emails, and creating Offer Letters because they are declarative and easier to maintain.

Matching Rules and Duplicate Rules were used specifically for detecting and preventing duplicate Applications.

Apex was not used because the current requirements could be implemented effectively using standard Salesforce declarative automation.

🚀 Technologies Used
Salesforce Developer Edition
Flow Builder
Record-Triggered Flow
Validation Rules
Matching Rules
Duplicate Rules
Custom Objects
Lookup Relationships
CRM
Email Automation
📂 Objects Used
Student__c
Job__c
Application__c
Offer_Letter__c
📌 Conclusion

Successfully implemented declarative automation for the Placement Management System using Validation Rules, Record-Triggered Flows, Matching Rules, and Duplicate Rules. The system automatically manages Application Dates, sends notifications, prevents duplicate Applications, validates CGPA and Application Dates, and creates Offer Letters when students are selected. The implementation follows Salesforce's Clicks Before Code approach by using declarative tools instead of Apex wherever possible.
