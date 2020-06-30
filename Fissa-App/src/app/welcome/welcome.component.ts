import { Component, OnInit } from "@angular/core";
import { Location } from "@angular/common";
import { RouterExtensions } from "nativescript-angular/router";
import { alert } from "tns-core-modules/ui/dialogs";

@Component({
    selector: "Welcome",
    moduleId: module.id,
    templateUrl: "./welcome.component.html",
    styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
    // constructor(private location: Location) {}
    constructor(private routerExtension: RouterExtensions) {}

    // tslint:disable-next-line: no-empty
    ngOnInit(): void {}

    // navigate to login page
    onLogin() {
        this.routerExtension.navigate(["../login"], { clearHistory: true });
    }

    // navigate to sign up page
    onSignin() {
        this.routerExtension.navigate(["../sign-up"]);
    }

    // terms of services
    alert() {
        alert({
            title: "Terms of services",
            message: `Fissa One, located at Triangelstraat 76, is responsible for the processing of personal data as shown in this privacy statement.

Contact details:
https://fissaofficial.com/
Triangelstraat 76
0630012930
Florian Korzelius is the Data Protection Officer of Fissa One He can be reached at FKorzelius@fissaofficial.com

Personal data that we process
Fissa One processes your personal data because you use our services and / or because you provide this data to us yourself.

Below you will find an overview of the personal data we process:
    - First and last name
    - Sex
    - Date of birth
    - Birthplace
    - Phone number
    - E-mail address
    - IP address
    - Other personal data that you actively
      provide, for example by creating a profile
      on this Application, in correspondence
      and by telephone
    - Location data
    - Data about your surfing behavior across
      different Applications (for example,
      because this company is part of an
      advertising network)
    - Internet browser and device type

Special and / or sensitive personal data that we process
Our Application and / or service does not intend to collect information about Application Visitors who are under 16 years old. Unless they have parental or guardian permission. However, we cannot check whether a visitor is older than 16. We therefore recommend that parents be involved in the online activities of their children, in order to prevent data about children from being collected without parental consent. If you are convinced that we have collected personal information about a minor without this permission, please contact us at FKorzelius@fissaofficial.com and we will delete this information.

For what purpose and on what basis we process personal data
Fissa One processes your personal data for the following purposes:
    - Sending our newsletter and / or
      advertising brochure
    - To call or e-mail you if necessary to
      carry out our services
    - To inform you about changes to our
      services and products
    - Offer you the opportunity to create an
      account
    - Fissa One analyzes your behavior on
      the Application in order to improve the
      Application and to tailor the range of
      products and services to your
      preferences.

Automated decision making
Fissa One does not make decisions based on automated processing on matters that can have (significant) consequences for people. These are decisions taken by computer programs or systems, without involving a person (for example, an employee of Fissa One).

How long we keep personal data

Fissa One does not store your personal data longer than is strictly necessary to realize the goals for which your data is collected. We use the following retention periods for the following (categories) of personal data:

Personal data
Retention period
Reason
First and last name: As long as the use of the application lasts and for the optimal functioning of the application

Sex: As long as the use of the application lasts and for the optimal functioning of the application
Date of birth:As long as the use of the application lasts and for the optimal functioning of the application
Phone number: As long as the use of the application lasts and for the optimal functioning of the application
E-mail address: As long as the use of the application lasts and for the optimal functioning of the application
IP address: As long as the use of the application lasts and for the optimal functioning of the application
Other personal data that you actively provide, for example by creating a profile on this Application, in correspondence and by telephone: As long as the use of the application lasts and for the optimal functioning of the application
Location data: As long as the use of the application lasts and for the optimal functioning of the application
Data about your surfing behavior across different Applications (for example because this company is part of an advertising network).
(will depend on who places ads)
For displaying advertisements and offers.
Internet Browser and device type: As long as the use of the application lasts and for the optimal functioning of the application

Sharing personal data with third parties

Fissa One shares your personal data with various third parties if this is necessary for the execution of the agreement and to comply with any legal obligation. We conclude a processor agreement with companies that process your data on our behalf to ensure the same level of security and confidentiality of your data. Fissa One remains responsible for these processing operations. In addition, Fissa One provides your personal data to other third parties. We only do this with your express permission.

You got the right to view, correct or delete your personal data. You can do this yourself via the personal settings of your account. In addition, you have the right to withdraw your consent to the data processing or to object to the processing of your personal data by our company and you have the right to data portability. This means that you can submit a request to us to send the personal data that we hold about you in a computer file to you or another organization mentioned by you.

If you wish to exercise your right of objection and / or right to data portability or if you have other questions / comments about data processing, please send a specified request to FKorzelius@fissaofficial.com.

To ensure that the request for access has been made by you, we ask you to send a copy of your ID with the request. Make your passport photo, MRZ (machine readable zone, the strip with numbers at the bottom of the passport), passport number and citizen service number (BSN) black in this copy. This is to protect your privacy. Fissa One will respond to your request as soon as possible, but in any case within four weeks.

Fissa One would also like to point out that you have the opportunity to file a complaint with the national supervisory authority, the Dutch Data Protection Authority. You can do this via the following link: https://autoriteitpersoonsgegevens.nl/nl/contact-met-de-autoriteit-persoonsgegevens/tip-ons

How we protect personal data
Fissa One takes the protection of your data seriously and takes appropriate measures to prevent misuse, loss, unauthorized access, unwanted disclosure and unauthorized modification. If you feel that your data is not properly secured or there are indications of abuse, please contact our customer service or via FKorzelius@fissaofficial.com.

`,
            okButtonText: "Ok",
            cancelable: false
        }).then(() => {
            console.log("The user closed the terms of services.");
        });
    }
}
