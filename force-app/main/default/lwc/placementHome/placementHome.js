import { LightningElement } from 'lwc';

export default class PlacementHome extends LightningElement {

    // Student Information
    studentName = 'Yukthasri';

    rollNumber = '22B81A0501';

    department = 'CSE';


    // Today's Date
    todayDate = '31 July 2026';


    // Placement Statistics
    companyCount = 25;

    jobCount = 63;

    applicationCount = 5;


    // Welcome Message
    welcomeMessage = '';


    // Application Status
    applicationStatus = 'Not Applied';


    // Show Welcome Message Button
    handleWelcome() {

        this.welcomeMessage =
            'Welcome to Salesforce Development';

    }


    // Apply Now Button
    handleApply() {

        this.applicationStatus = 'Applied';

    }

}