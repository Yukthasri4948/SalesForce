# 🎓 Placement Management System

### Salesforce Developer Bridge Program – Day 3
**Validation Rules • Record-Triggered Flow • Duplicate Rules • Automation**

<p align="center">
  <img src="https://img.shields.io/badge/Salesforce-Developer%20Edition-blue" />
  <img src="https://img.shields.io/badge/Automation-Flow Builder-orange" />
  <img src="https://img.shields.io/badge/Validation%20Rules-Implemented-green" />
  <img src="https://img.shields.io/badge/Duplicate%20Rules-Implemented-purple" />
</p>

---

## 📌 Project Overview

The **Placement Management System** is a Salesforce application designed to manage:

- 👨‍🎓 Students
- 💼 Jobs
- 📝 Applications
- 📄 Offer Letters

The objective of Day 3 was to implement **declarative automation** using Salesforce's **Clicks Before Code** approach.

---

## 🎯 Business Requirements

| # | Requirement | Automation Used |
|---|---|---|
| 1 | Send email when student submits application | ⚡ Flow |
| 2 | Automatically populate Application Date | ⚡ Flow |
| 3 | Prevent duplicate applications | 🛡️ Matching + Duplicate Rule |
| 4 | Reject applications below minimum CGPA | ✅ Validation Rule |
| 5 | Create Offer Letter when Status = Selected | ⚡ Flow |

---

# 🛠️ Automation Implemented

## ⚡ 1. Application Date Flow

<details>
<summary><b>Click to expand Flow details</b></summary>

### Flow Name
`Generate Student Job Key / Application Date Flow`

### Flow Type
`Record-Triggered Flow`

### Object
`Application__c`

### Trigger
`When a record is created`

### Purpose

Automatically populates the Application Date when a new Application is created.



# 🛠️ Part 4 – Hands-on Assignment

## ⚡ Record-Triggered Flow

A Record-Triggered Flow was created for the `Application__c` object.

### Flow Configuration

| Configuration | Value |
|---|---|
| Flow Type | Record-Triggered Flow |
| Object | `Application__c` |
| Trigger | When a record is created |
| Purpose | Automate Application Date and Email Notification |

---

## 🔹 Start Element

The Flow starts when a new Application record is created.

```text
Application__c
      ↓
Record Created
      ↓
Flow Starts
````

### Start Configuration

```text
Object:
Application__c

Trigger:
A record is created
```

---

## 🔹 Assignment Element

The Assignment Element is used to automatically populate the Application Date.

### Purpose

Set the Application Date to the current date when the Application is created.

### Logic

```text
Application Date
        =
Current Date
```

### Example

```text
$Record.Application_Date__c
        =
$Flow.CurrentDate
```

> Use the exact field API name from your Salesforce org.

---

## 🔹 Email Action

The Flow uses an Email Action to notify the Placement Officer.

### Purpose

Send an email whenever a new Application is submitted.

### Email Content

```text
Subject:
New Placement Application Submitted

Body:
A new student application has been submitted.
Please review the Application record in Salesforce.
```

### Process

```text
Application Created
        ↓
Record-Triggered Flow
        ↓
Application Date Updated
        ↓
Send Email Action
        ↓
Placement Officer Notified 📧
```

---

## 🔹 Successful Execution

The Flow was tested using Salesforce Flow Debug.

### Expected Result

```text
Flow Interview Started
        ↓
Application Record Found
        ↓
Application Date Updated
        ↓
Email Action Executed
        ↓
Flow Interview Finished Successfully ✅
```

---

# 📸 Screenshots Required

The following screenshots should be added to the README.

## 1. Flow Canvas

```markdown
![Flow Canvas](screenshots/flow-canvas.png)
```

## 2. Start Element

```markdown
![Start Element](screenshots/start-element.png)
```

## 3. Assignment Element

```markdown
![Assignment Element](screenshots/assignment-element.png)
```

## 4. Email Action

```markdown
![Email Action](screenshots/email-action.png)
```

## 5. Successful Execution

```markdown
![Successful Execution](screenshots/successful-execution.png)
```

> Replace the image paths with the actual location and names of your screenshots.

---

# ✅ Part 5 – Validation Rule Challenge

Three Validation Rules were implemented to maintain Application data quality.

---

## 1️⃣ Student CGPA Validation

### Object

`Application__c`

### Requirement

Student CGPA must be greater than or equal to the minimum CGPA required by the selected Job.

### Formula

```salesforce
AND(
    NOT(ISBLANK(CGPA__c)),
    CGPA__c < Job__r.Minimum_CGPA__c
)
```

### Error Message

```text
Student CGPA must be greater than or equal to the Job's minimum CGPA.
```

### Result

```text
Student CGPA < Minimum CGPA
          ↓
     Validation Rule
          ↓
       ❌ Error
          ↓
Application Not Saved
```

---

## 2️⃣ Application Date Validation

### Object

`Application__c`

### Requirement

Application Date cannot be after the Job Closing Date.

### Formula

```salesforce
AND(
    NOT(ISBLANK(Application_Date__c)),
    NOT(ISBLANK(Job__r.Closing_Date__c)),
    Application_Date__c > Job__r.Closing_Date__c
)
```

### Error Message

```text
Application Date cannot be after the Job Closing Date.
```

### Result

```text
Application Date > Closing Date
             ↓
       Validation Rule
             ↓
          ❌ Error
             ↓
      Application Rejected
```

---

## 3️⃣ Mandatory Fields Validation

### Object

`Application__c`

### Requirement

Student and Job must not be left blank.

### Formula

```salesforce
OR(
    ISBLANK(Student__c),
    ISBLANK(Job__c)
)
```

### Error Message

```text
Student and Job are mandatory fields.
```

### Result

```text
Student / Job Blank
        ↓
Validation Rule
        ↓
     ❌ Error
        ↓
Application Not Saved
```

> Replace the API names above with the exact API names from your Salesforce org if they are different.

---

# 🧪 Validation Rule Testing

| Test Case                       | Expected Result      | Status   |
| ------------------------------- | -------------------- | -------- |
| Student CGPA ≥ Minimum CGPA     | Application accepted | ✅ Passed |
| Student CGPA < Minimum CGPA     | Application rejected | ✅ Passed |
| Application Date ≤ Closing Date | Application accepted | ✅ Passed |
| Application Date > Closing Date | Application rejected | ✅ Passed |
| Student left blank              | Application rejected | ✅ Passed |
| Job left blank                  | Application rejected | ✅ Passed |

---

# 🛡️ Part 6 – Duplicate Application Prevention

## Matching Rule

### Rule Name

```text
Student_Job_Key_Match
```

### Object

```text
Application__c
```

### Matching Criteria

| Field           | Matching Method | Match Blank Fields |
| --------------- | --------------- | ------------------ |
| Student Job Key | Exact           | No                 |

### Status

```text
Active ✅
```

---

## Duplicate Rule

### Rule Name

```text
Student_Job_Application_Match
```

### Object

```text
Application__c
```

### Compare Records With

```text
Applications
```

### Matching Rule

```text
Student_Job_Key_Match
```

### Action on Create

```text
Block
```

### Action on Edit

```text
Block
```

### Alert Message

```text
Duplicate Application: This student has already applied for this job.
```

---

## 🔄 Duplicate Prevention Process

```text
Student
   +
Job
   ↓
Student Job Key
   ↓
Matching Rule
   ↓
Compare Existing Applications
   ↓
Same Student + Same Job?
   ↓
   YES
   ↓
Duplicate Rule
   ↓
     ❌ BLOCK
```

---

# 🧪 Duplicate Application Testing

| Test Case               | Expected Result     | Status   |
| ----------------------- | ------------------- | -------- |
| Student A + Job A       | Application created | ✅ Passed |
| Student A + Job A again | Application blocked | ✅ Passed |
| Student A + Job B       | Application created | ✅ Passed |
| Student B + Job A       | Application created | ✅ Passed |

---

# ⚔️ Part 7 – Trigger vs Flow Debate

| Situation                                          | Recommended Solution | Reason                                                     |
| -------------------------------------------------- | -------------------- | ---------------------------------------------------------- |
| 1. Update a field automatically                    | ⚡ Flow               | Simple declarative automation                              |
| 2. Create a related record                         | ⚡ Flow               | Create Records element can handle this                     |
| 3. Send an email notification                      | ⚡ Flow               | Built-in Email Action                                      |
| 4. Call an external REST API                       | 👨‍💻 Apex           | Apex provides more control for custom callouts             |
| 5. Complex calculations involving multiple objects | 👨‍💻 Apex / Flow    | Depends on complexity                                      |
| 6. Process 10,000 imported records                 | 👨‍💻 Apex / Flow    | Depends on complexity, limits, and processing requirements |

---

# 💡 Explanation

## 1. Update a Field Automatically

**Flow** is preferred because a Record-Triggered Flow can easily update fields without writing Apex.

## 2. Create a Related Record

**Flow** is preferred because the Create Records element can create related records.

## 3. Send an Email

**Flow** is preferred because it provides built-in email actions.

## 4. External REST API

**Apex** may be preferred for custom REST callouts and advanced integration requirements.

## 5. Complex Calculations

Flow can handle many calculations, but Apex may be more suitable when the logic becomes highly complex.

## 6. 10,000 Imported Records

The correct choice depends on the complexity of the processing. Both Flow and Apex support bulk processing, but Apex can provide more control for complex or performance-sensitive processing.

---

# 🚀 Part 8 – Mini Project Enhancement

The Placement Management System was enhanced with the following features.

## 📅 Application Date Automation

A Record-Triggered Flow automatically handles the Application Date when a new Application is created.

## ✅ Data Validation

Validation Rules ensure:

* Student CGPA meets Job requirements.
* Application Date does not exceed Job Closing Date.
* Mandatory fields are completed.

## 📧 Email Notification

An automated email notification is sent to the Placement Officer when a new Application is submitted.

## 📄 Offer Letter Automation

When the Application Status changes to `Selected`, a Record-Triggered Flow creates an Offer Letter.

### Offer Letter Process

```text
Application Status
       ↓
     Selected?
       ↓
      YES
       ↓
Create Offer Letter
       ↓
Link Offer Letter to Application
```

---

# 🐛 Part 9 – Debugging Challenge

## Scenario

A developer created:

```text
Trigger → Updates Status

Flow → Updates Status

Workflow → Updates Status
```

---

## 1. What problem might occur?

Multiple automation processes updating the same field can cause:

* ⚠️ Conflicting updates
* 🔄 Recursive execution
* 🐞 Difficult debugging
* ❌ Unexpected field values
* 📉 Unnecessary processing

---

## 2. Could automation repeatedly execute?

Yes.

If one automation updates a record and that update causes another automation to run, it can trigger additional automation.

This can result in:

```text
Automation A
     ↓
Updates Record
     ↓
Automation B
     ↓
Updates Record
     ↓
Automation A
     ↓
🔄 Repeated Execution
```

---

## 3. How would you redesign the solution?

Use one primary automation tool for the same business requirement.

For this Placement Management System, **Flow** would be preferred for standard automation.

### Improved Design

```text
Application Updated
        ↓
Record-Triggered Flow
        ↓
Decision / Business Logic
        ↓
Update Status
        ↓
Complete ✅
```

This makes the solution:

* Easier to maintain
* Easier to debug
* Less likely to cause recursion
* More organized

---

# 🎤 Part 10 – Interview Questions

<details>
<summary><b>1. What is the difference between Workflow, Process Builder, and Flow?</b></summary>

Workflow Rules provide basic automation such as field updates, email alerts, tasks, and outbound messages.

Process Builder provides more advanced automation but is now a legacy automation tool.

Flow is Salesforce's modern declarative automation platform and supports more complex logic, record creation, updates, decisions, and actions.

</details>

---

<details>
<summary><b>2. Why is Flow replacing Workflow Rules?</b></summary>

Flow provides more functionality and flexibility than Workflow Rules.

It can:

* Create records
* Update records
* Delete records
* Send emails
* Perform decisions
* Call Apex
* Handle complex automation

Therefore, Flow is the preferred automation tool for new Salesforce development.

</details>

---

<details>
<summary><b>3. What is a Record-Triggered Flow?</b></summary>

A Record-Triggered Flow automatically executes when a record is created, updated, or deleted based on configured conditions.

Example:

```text
Application Created
        ↓
Record-Triggered Flow
        ↓
Application Date Updated
        ↓
Email Sent
```

</details>

---

<details>
<summary><b>4. What are Before-Save and After-Save Flows?</b></summary>

### Before-Save Flow

A Before-Save Flow runs before the record is saved and is mainly used for updating fields on the triggering record.

### After-Save Flow

An After-Save Flow runs after the record is saved and can be used to:

* Create related records
* Send emails
* Update other records
* Perform additional actions

</details>

---

<details>
<summary><b>5. When should Apex be preferred over Flow?</b></summary>

Apex should be preferred when requirements involve:

* Complex business logic
* Advanced calculations
* Custom integrations
* REST API callouts
* Complex transactions
* Functionality that cannot be efficiently implemented using Flow

</details>

---

<details>
<summary><b>6. Can Flow call Apex?</b></summary>

Yes. Flow can call Apex using an **Apex Action**.

This allows declarative automation to use custom Apex logic when required.

</details>

---

<details>
<summary><b>7. What are the advantages of declarative automation?</b></summary>

Declarative automation:

* Requires little or no code
* Is faster to develop
* Is easier to maintain
* Reduces development effort
* Can be configured by administrators
* Provides standard Salesforce automation capabilities

</details>

---

<details>
<summary><b>8. Explain one Flow that you built.</b></summary>

I built a Record-Triggered Flow on the Application object.

When a new Application is created, the Flow automatically populates the Application Date and sends an email notification to the Placement Officer.

This reduces manual work and improves the placement application process.

</details>

---

<details>
<summary><b>9. Explain one Validation Rule that you created.</b></summary>

I created a Validation Rule to check whether the student's CGPA meets the minimum CGPA required for the selected Job.

If the student's CGPA is below the required value, Salesforce prevents the Application from being saved and displays an error message.

</details>

---

<details>
<summary><b>10. If given the choice, why did you use Flow instead of Apex?</b></summary>

I used Flow because the requirements could be implemented using standard Salesforce declarative automation.

Flow is easier to build, maintain, test, and debug for requirements such as updating fields, sending emails, and creating related records.

</details>

---

# 📚 Part 11 – Learning Resources

## 🏆 Salesforce Trailhead

Recommended topics:

* Build Flows with Flow Builder
* Record-Triggered Flows
* Validation Rules
* Flow Builder
* Salesforce Automation
* Duplicate Management

## 🎥 YouTube Topics

Recommended topics to study:

* Salesforce Record-Triggered Flow
* Salesforce Validation Rules
* Salesforce Matching Rules
* Salesforce Duplicate Rules
* Salesforce Flow Debugging
* Salesforce Order of Execution

---

# 🚀 Technologies Used

```text
Salesforce Developer Edition
        │
        ├── Flow Builder
        ├── Record-Triggered Flow
        ├── Validation Rules
        ├── Matching Rules
        ├── Duplicate Rules
        ├── Custom Objects
        ├── Lookup Relationships
        └── Email Automation
```

---

# 📂 Salesforce Objects

| Object               | Purpose                         |
| -------------------- | ------------------------------- |
| 👨‍🎓 `Student__c`   | Stores student information      |
| 💼 `Job__c`          | Stores job information          |
| 📝 `Application__c`  | Stores student applications     |
| 📄 `Offer_Letter__c` | Stores offer letter information |

---

# 🏗️ Part 12 – System Architecture

```text
                    🎓 STUDENT
                         │
                         ↓
                  💼 JOB SELECTION
                         │
                         ↓
                  📝 APPLICATION
                         │
          ┌──────────────┼───────────────┐
          │              │               │
          ↓              ↓               ↓
    Validation       Duplicate          Flow
       Rules            Rules             │
          │              │               ├── 📅 Application Date
          │              │               ├── 📧 Email Notification
          │              │               └── 📄 Offer Letter
          ↓              ↓
      Data Quality   Duplicate
        Check        Prevention
```

---

# 🔄 Complete Application Automation

```text
🎓 Student
     │
     ↓
📝 Submit Application
     │
     ↓
📅 Application Date Automatically Set
     │
     ↓
🛡️ Duplicate Application Check
     │
     ├──────────── Duplicate ────────────→ ❌ Application Blocked
     │
     ↓
🎓 CGPA Validation
     │
     ├──────────── CGPA Low ────────────→ ❌ Application Rejected
     │
     ↓
📧 Email Notification
     │
     ↓
👨‍💼 Placement Officer Notified
     │
     ↓
Application Status Updated
     │
     ↓
Status = Selected?
     │
     ├──────────── No ──────────────────→ Continue
     │
     ↓ Yes
📄 Offer Letter Created
```

---

# 📸 Part 13 – Project Screenshots

## 🔹 Flow Canvas

Add your Flow Canvas screenshot here:

```markdown
![Flow Canvas](screenshots/flow-canvas.png)
```

---

## 🔹 Start Element

```markdown
![Start Element](screenshots/start-element.png)
```

---

## 🔹 Assignment Element

```markdown
![Assignment Element](screenshots/assignment-element.png)
```

---

## 🔹 Email Action

```markdown
![Email Action](screenshots/email-action.png)
```

---

## 🔹 Successful Flow Execution

```markdown
![Successful Execution](screenshots/successful-execution.png)
```

---

## 🔹 Validation Rule

```markdown
![Validation Rule](screenshots/validation-rule.png)
```

---

## 🔹 Matching Rule

```markdown
![Matching Rule](screenshots/matching-rule.png)
```

---

## 🔹 Duplicate Rule

```markdown
![Duplicate Rule](screenshots/duplicate-rule.png)
```

---

## 🔹 Offer Letter Creation

```markdown
![Offer Letter](screenshots/offer-letter.png)
```

---

# 🧠 Key Learning Outcomes

After completing Day 3, I learned:

* [x] Validation Rules
* [x] Record-Triggered Flows
* [x] Before-Save Flow
* [x] After-Save Flow
* [x] Assignment Element
* [x] Email Action
* [x] Create Records Element
* [x] Matching Rules
* [x] Duplicate Rules
* [x] Flow Debugging
* [x] Declarative Automation
* [x] Flow vs Apex
* [x] Salesforce Order of Execution

---

# 📊 Final Implementation Summary

| Feature                  | Salesforce Tool           | Status |
| ------------------------ | ------------------------- | ------ |
| 📅 Application Date      | Record-Triggered Flow     | ✅      |
| 📧 Email Notification    | Record-Triggered Flow     | ✅      |
| 🛡️ Duplicate Prevention | Matching + Duplicate Rule | ✅      |
| 🎓 CGPA Validation       | Validation Rule           | ✅      |
| 📅 Date Validation       | Validation Rule           | ✅      |
| 🔒 Mandatory Fields      | Validation Rule           | ✅      |
| 📄 Offer Letter          | Record-Triggered Flow     | ✅      |

---

# 🏆 Conclusion

The **Placement Management System** was successfully enhanced using Salesforce declarative automation.

The implementation includes:

* 📅 Automatic Application Date
* 📧 Email Notification to Placement Officer
* 🛡️ Duplicate Application Prevention
* 🎓 CGPA Validation
* 📅 Application Date Validation
* 🔒 Mandatory Field Validation
* 📄 Automatic Offer Letter Creation

The project demonstrates the **Clicks Before Code** approach by using Salesforce declarative tools such as **Flow Builder, Validation Rules, Matching Rules, and Duplicate Rules** wherever possible instead of Apex.

---

# 👩‍💻 Project Information

| Category       | Details                                 |
| -------------- | --------------------------------------- |
| 🎓 Program     | Salesforce Developer Bridge Program     |
| 📅 Day         | Day 3                                   |
| 💼 Project     | Placement Management System             |
| ☁️ Platform    | Salesforce Developer Edition            |
| 🛠️ Main Topic | Validation Rules, Flows & Automation    |
| 🚀 Approach    | Clicks Before Code                      |
| 📂 Objects     | Student, Job, Application, Offer Letter |

---

<p align="center">

## 🚀 Placement Management System

### Built with Salesforce Declarative Automation

**Validation Rules • Record-Triggered Flows • Matching Rules • Duplicate Rules**

</p>
```
