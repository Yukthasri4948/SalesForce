
# 🏫 Placement Management System – Lightning Web Components (LWC)

## Salesforce Developer Bridge Program – Day 4

### Topic
**Lightning Web Components (LWC): Components, Data Binding & Event Handling**

---

# 📌 Project Overview

The **Placement Management System** is a Salesforce Lightning Web Component (LWC) application developed as part of the Salesforce Developer Bridge Program. The objective of this hands-on exercise was to understand the fundamentals of Lightning Web Components by creating reusable components, implementing data binding, handling button click events, and building a simple Placement Dashboard.

The project follows Salesforce's modern component-based development approach using **Lightning Web Components (LWC)**.

---

# 🎯 Objectives

- Create a Lightning Web Component
- Display static and dynamic data
- Understand one-way data binding
- Implement event handling using button clicks
- Build a simple Placement Dashboard
- Understand how JavaScript properties update the UI automatically

---

# 🛠 Activities Completed

---

# ✅ Activity 1 – Create the First Lightning Web Component

### Objective

Create the first Lightning Web Component named **placementHome** and display a welcome message.

### Output

- Placement Portal
- Welcome to Vishnu Placement Portal

### Learning Outcome

- Created a Lightning Web Component
- Understood the LWC project structure
- Configured component metadata using `js-meta.xml`

---

# ✅ Activity 2 – Variables & Data Binding

### Objective

Display student information using JavaScript variables.

### Data Displayed

- Student Name
- Roll Number
- Department

### Learning Outcome

- Created JavaScript properties
- Displayed values in HTML using data binding
- Learned one-way data binding in LWC

---

# ✅ Activity 3 – Event Handling

### Objective

Display a welcome message when the user clicks a button.

### Features

- Created a button using `lightning-button`
- Implemented the `onclick` event
- Created the `showMessage()` JavaScript method

### Learning Outcome

- Learned event handling in Lightning Web Components
- Connected HTML button events with JavaScript methods

---

# ✅ Activity 4 – Apply Now Button

### Objective

Change the application status after clicking the **Apply Now** button.

### Initial Status

```
Not Applied
```

### After Clicking Button

```
Applied
```

### Learning Outcome

- Updated JavaScript variables dynamically
- Observed automatic UI updates through data binding

---

# ✅ Activity 5 – Placement Dashboard

### Objective

Create a simple Placement Dashboard displaying placement-related information.

### Dashboard Information

- Student Name
- Roll Number
- Department
- Placement Status
- Companies Available
- Applications Submitted
- Interviews Scheduled

### Learning Outcome

- Built a dashboard using Lightning Web Components
- Displayed multiple dynamic values using JavaScript properties

---

# ✅ Activity 6 – Understanding Data Binding

### Objective

Understand how data binding works in Lightning Web Components.

### Step 1

Initially:

```
studentName = 'Rahul'
```

Output:

```
Hello Rahul
```

### Step 2

Changed:

```
studentName = 'Shaik Muhadh Sulthana'
```

Output:

```
Hello Shaik Muhadh Sulthana
```

### Observation

The displayed text automatically changed after updating the JavaScript property.

### Explanation

Lightning Web Components use **one-way data binding**, where HTML automatically reflects the latest value of JavaScript properties without manually updating the DOM.

---

# 💻 Technologies Used

- Salesforce Developer Edition
- Lightning Web Components (LWC)
- Visual Studio Code
- Salesforce CLI (SF CLI)
- Lightning App Builder

---

# 📂 Project Structure

```
PlacementManagementSystem
│
├── force-app
│
├── main
│
├── default
│
├── lwc
│
└── placementHome
    ├── placementHome.html
    ├── placementHome.js
    └── placementHome.js-meta.xml
```

---

# 🚀 Features Implemented

- Lightning Web Component Creation
- Component Deployment
- One-Way Data Binding
- JavaScript Variables
- Event Handling
- Button Click Events
- Placement Dashboard
- Dynamic UI Updates

---

# 📚 Learning Outcomes

By completing this hands-on project, I learned:

- Fundamentals of Lightning Web Components
- LWC folder structure
- JavaScript properties in LWC
- HTML template syntax
- One-way data binding
- Event handling using `onclick`
- Updating UI dynamically
- Building reusable Salesforce components
- Deploying LWC using Salesforce CLI
- Adding components to Lightning App Builder


# 📌 Conclusion

Successfully completed the Lightning Web Components (LWC) hands-on activities by creating reusable Salesforce components, implementing one-way data binding, handling user interactions through events, and building a simple Placement Dashboard. These activities provided a strong foundation in LWC development and prepared the project for future enhancements using Apex and dynamic Salesforce data.


You can add the following section to your **README.md**:

---

## ❓ README Questions

### 1. What is LWC?

**Lightning Web Components (LWC)** is Salesforce's modern JavaScript framework for building fast, reusable, and lightweight user interface components. It uses standard web technologies such as **HTML, JavaScript, and CSS**, making component development efficient and maintainable.

---

### 2. What did you build?

I built a **Placement Management System** using Lightning Web Components. The project includes:

* A Placement Portal welcome page
* Student details display using data binding
* Button click event handling
* Application status update functionality
* A Placement Dashboard displaying placement-related information
* A data binding demonstration showing automatic UI updates when JavaScript values change

---

### 3. Which file contains HTML?

The **`placementHome.html`** file contains the HTML template. It defines the user interface and displays dynamic data using LWC data binding syntax.

---

### 4. Which file contains JavaScript?

The **`placementHome.js`** file contains the JavaScript logic. It defines variables, methods, event handling, and the component's business logic.

---

### 5. What did you learn today?

Today, I learned:

* The fundamentals of Lightning Web Components (LWC)
* The structure of an LWC component (`.html`, `.js`, and `.js-meta.xml`)
* One-way data binding in LWC
* Displaying dynamic data using JavaScript properties
* Handling button click events using JavaScript methods
* Updating the user interface dynamically
* Creating and deploying Lightning Web Components using Salesforce CLI
* Adding LWC components to Lightning App Builder
