import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SalesRepWins } from './sales-rep-wins.model';

@Injectable({
  providedIn: 'root'
})
export class SalesRepService {
  salesRepData=[
    { 
      name: "John Doe",
      date: new Date("2019-12-20"),
      client: "Oberoi group of hotels",
      poc: "Mahmood Ritelli",
      title: "C level",
      vertical: "Marketing",
      meet_loc: "Goto meeting",
      purpose_interaction : "Understanding their current ecosystem",
      outcome : "Send first cut of proposed solution",
      status: "Needs defined"
    },
    { 
      name: "Ethan Hunt",
      date: new Date("2019-12-20"),
      client: "Taj group of hotels",
      poc: "Avie Peasegood",
      title: "C level",
      vertical: "Sales",
      meet_loc: "Video",
      purpose_interaction : "Demo the product",
      outcome : "Will get back with availability for next meeting",
      status: "Contact made"
    },
    { 
      name: "Jane Doe",
      date: new Date("2019-12-20"),
      client: "Accenture",
      poc: "Dew Rilbey",
      title: "C level",
      vertical: "Senior Management",
      meet_loc: "Face To Face",
      purpose_interaction : "Negotiations",
      outcome : "Needs to get final approval by the board",
      status: "Negotiations started"
    },
    { 
      name: "Julia Cruise",
      date: new Date("2019-12-20"),
      client: "Google",
      poc: "Jerry Casswell",
      title: "Sr Management",
      vertical: "Technology",
      meet_loc: "Call",
      purpose_interaction : "Introductory Call",
      outcome : "Need to send them a reminder tomorrow to fix meetung w the sales head",
      status: "Contact Made"
    },
    { 
      name: "Tom Roberts",
      date: new Date("2019-12-20"),
      client: "Microsoft",
      poc: "Daynne Halms",
      title: "VP",
      vertical: "Sr Management",
      meet_loc: "Email",
      purpose_interaction : "Confirm final meeting with CEO for pricing Negotiation",
      outcome : "Meeting Confirmed for tomorrow",
      status: "Negotiations Started"
    },
    { 
      name: "John Doe",
      date: new Date("2019-12-21"),
      client: "Oberoi group of hotels",
      poc: "Mahmood Ritelli",
      title: "C level",
      vertical: "Marketing",
      meet_loc: "Face to Face",
      purpose_interaction : "Propose our solution",
      outcome : "Send updated proposal based on feedback",
      status: "Needs defined"
    },
    { 
      name: "Ethan Hunt",
      date: new Date("2019-12-21"),
      client: "Taj group of hotels",
      poc: "Avie Peasegood",
      title: "C level",
      vertical: "Sales",
      meet_loc: "Call",
      purpose_interaction : "Fix up next meeting",
      outcome : "She has to fly out of country immediately. Will get back availability once back.",
      status: "Contact made"
    },
    { 
      name: "Jane Doe",
      date: new Date("2019-12-21"),
      client: "Accenture",
      poc: "Dew Rilbey",
      title: "C level",
      vertical: "Senior Management",
      meet_loc: "Face To Face",
      purpose_interaction : "Deal Signing",
      outcome : "Deal closed",
      status: "Won"
    },
    { 
      name: "Julia Cruise",
      date: new Date("2019-12-21"),
      client: "Google",
      poc: "Jerry Casswell",
      title: "Sr Management",
      vertical: "Technology",
      meet_loc: "Text",
      purpose_interaction : "Fix up next meeting with sales head",
      outcome : "Scheduled for next week",
      status: "Contact Made"
    },

    { 
      name: "Tom Roberts",
      date: new Date("2019-12-21"),
      client: "Microsoft",
      poc: "Daynne Halms",
      title: "VP",
      vertical: "Sr Management",
      meet_loc: "Face to face",
      purpose_interaction : "Finalize Negotiation",
      outcome : "Deal Lost",
      status: "Lost"
    },

    { 
      name: "John Doe",
      date: new Date("2020-10-18"),
      client: "Oberoi group of hotels",
      poc: "Mahmood Ritelli",
      title: "C level",
      vertical: "Marketing",
      meet_loc: "Goto meeting",
      purpose_interaction : "Understanding their current ecosystem",
      outcome : "Send first cut of proposed solution",
      status: "Needs defined"
    },
    { 
      name: "Ethan Hunt",
      date: new Date("2020-10-19"),
      client: "Taj group of hotels",
      poc: "Avie Peasegood",
      title: "C level",
      vertical: "Sales",
      meet_loc: "Video",
      purpose_interaction : "Demo the product",
      outcome : "Will get back with availability for next meeting",
      status: "Contact made"
    },
    { 
      name: "Jane Doe",
      date: new Date("2020-10-20"),
      client: "Accenture",
      poc: "Dew Rilbey",
      title: "C level",
      vertical: "Senior Management",
      meet_loc: "Face To Face",
      purpose_interaction : "Negotiations",
      outcome : "Needs to get final approval by the board",
      status: "Negotiations started"
    },
    { 
      name: "Julia Cruise",
      date: new Date("2020-10-20"),
      client: "Google",
      poc: "Jerry Casswell",
      title: "Sr Management",
      vertical: "Technology",
      meet_loc: "Call",
      purpose_interaction : "Introductory Call",
      outcome : "Need to send them a reminder tomorrow to fix meetung w the sales head",
      status: "Contact Made"
    },
    { 
      name: "Tom Roberts",
      date: new Date("2020-10-20"),
      client: "Microsoft",
      poc: "Daynne Halms",
      title: "VP",
      vertical: "Sr Management",
      meet_loc: "Email",
      purpose_interaction : "Confirm final meeting with CEO for pricing Negotiation",
      outcome : "Meeting Confirmed for tomorrow",
      status: "Negotiations Started"
    },
    { 
      name: "John Doe",
      date: new Date("2020-10-20"),
      client: "Oberoi group of hotels",
      poc: "Mahmood Ritelli",
      title: "C level",
      vertical: "Marketing",
      meet_loc: "Face to Face",
      purpose_interaction : "Propose our solution",
      outcome : "Send updated proposal based on feedback",
      status: "Needs defined"
    },
    { 
      name: "Ethan Hunt",
      date: new Date("2020-10-20"),
      client: "Taj group of hotels",
      poc: "Avie Peasegood",
      title: "C level",
      vertical: "Sales",
      meet_loc: "Call",
      purpose_interaction : "Fix up next meeting",
      outcome : "She has to fly out of country immediately. Will get back availability once back.",
      status: "Contact made"
    },
    { 
      name: "Jane Doe",
      date: new Date("2020-10-20"),
      client: "Accenture",
      poc: "Dew Rilbey",
      title: "C level",
      vertical: "Senior Management",
      meet_loc: "Face To Face",
      purpose_interaction : "Deal Signing",
      outcome : "Deal closed",
      status: "Won"
    },
    { 
      name: "Julia Cruise",
      date: new Date("2020-10-20"),
      client: "Google",
      poc: "Jerry Casswell",
      title: "Sr Management",
      vertical: "Technology",
      meet_loc: "Text",
      purpose_interaction : "Fix up next meeting with sales head",
      outcome : "Scheduled for next week",
      status: "Contact Made"
    },

    { 
      name: "Tom Roberts",
      date: new Date("2020-10-20"),
      client: "Microsoft",
      poc: "Daynne Halms",
      title: "VP",
      vertical: "Sr Management",
      meet_loc: "Face to face",
      purpose_interaction : "Finalize Negotiation",
      outcome : "Deal Lost",
      status: "Lost"
    },
    


    { 
      name: "John Doe",
      date: new Date("2020-10-21"),
      client: "Oberoi group of hotels",
      poc: "Mahmood Ritelli",
      title: "C level",
      vertical: "Marketing",
      meet_loc: "Goto meeting",
      purpose_interaction : "Understanding their current ecosystem",
      outcome : "Send first cut of proposed solution",
      status: "Needs defined"
    },
    { 
      name: "Ethan Hunt",
      date: new Date("2020-10-21"),
      client: "Taj group of hotels",
      poc: "Avie Peasegood",
      title: "C level",
      vertical: "Sales",
      meet_loc: "Video",
      purpose_interaction : "Demo the product",
      outcome : "Will get back with availability for next meeting",
      status: "Contact made"
    },
    { 
      name: "Jane Doe",
      date: new Date("2020-10-21"),
      client: "Accenture",
      poc: "Dew Rilbey",
      title: "C level",
      vertical: "Senior Management",
      meet_loc: "Face To Face",
      purpose_interaction : "Negotiations",
      outcome : "Needs to get final approval by the board",
      status: "Negotiations started"
    },
    { 
      name: "Julia Cruise",
      date: new Date("2020-10-21"),
      client: "Google",
      poc: "Jerry Casswell",
      title: "Sr Management",
      vertical: "Technology",
      meet_loc: "Call",
      purpose_interaction : "Introductory Call",
      outcome : "Need to send them a reminder tomorrow to fix meetung w the sales head",
      status: "Contact Made"
    },
    { 
      name: "Tom Roberts",
      date: new Date("2020-10-21"),
      client: "Microsoft",
      poc: "Daynne Halms",
      title: "VP",
      vertical: "Sr Management",
      meet_loc: "Email",
      purpose_interaction : "Confirm final meeting with CEO for pricing Negotiation",
      outcome : "Meeting Confirmed for tomorrow",
      status: "Negotiations Started"
    },
    { 
      name: "John Doe",
      date: new Date("2020-10-21"),
      client: "Oberoi group of hotels",
      poc: "Mahmood Ritelli",
      title: "C level",
      vertical: "Marketing",
      meet_loc: "Face to Face",
      purpose_interaction : "Propose our solution",
      outcome : "Send updated proposal based on feedback",
      status: "Needs defined"
    },
    { 
      name: "Ethan Hunt",
      date: new Date("2020-10-21"),
      client: "Taj group of hotels",
      poc: "Avie Peasegood",
      title: "C level",
      vertical: "Sales",
      meet_loc: "Call",
      purpose_interaction : "Fix up next meeting",
      outcome : "She has to fly out of country immediately. Will get back availability once back.",
      status: "Contact made"
    },
    { 
      name: "Jane Doe",
      date: new Date("2020-10-21"),
      client: "Accenture",
      poc: "Dew Rilbey",
      title: "C level",
      vertical: "Senior Management",
      meet_loc: "Face To Face",
      purpose_interaction : "Deal Signing",
      outcome : "Deal closed",
      status: "Won"
    },
    { 
      name: "Julia Cruise",
      date: new Date("2020-10-21"),
      client: "Google",
      poc: "Jerry Casswell",
      title: "Sr Management",
      vertical: "Technology",
      meet_loc: "Text",
      purpose_interaction : "Fix up next meeting with sales head",
      outcome : "Scheduled for next week",
      status: "Contact Made"
    },

    { 
      name: "Tom Roberts",
      date: new Date("2020-10-21"),
      client: "Microsoft",
      poc: "Daynne Halms",
      title: "VP",
      vertical: "Sr Management",
      meet_loc: "Face to face",
      purpose_interaction : "Finalize Negotiation",
      outcome : "Deal Lost",
      status: "Lost"
    }
  ];

  salesRepsNames: string[]=[
    "Jane Doe",
    "John Doe",
    "Ethan Hunt",
    "Tom Roberts",
    "Julia Cruise"
  ];

  salesRepWins : SalesRepWins[] =[
    new SalesRepWins("Jane Doe", 5345, 89, 18),
    new SalesRepWins("John Doe", 6738, 102, 30),
    new SalesRepWins("Ethan Hunt", 4527, 77, 17),
    new SalesRepWins("Tom Roberts", 3423, 69, 15),
    new SalesRepWins("Julia Cruise", 1212, 66, 12),
  ];

  salesRepSelected = new Subject<string>();


  constructor(){
  }

  selectRepName(repName:string){
    this.salesRepSelected.next(repName);
  }

  onButtonClick($event){
    let clickedElement = $event.target || $event.srcElement;
    let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
    if( isCertainButtonAlreadyActive ) {
      isCertainButtonAlreadyActive.classList.remove("active");
    }
    clickedElement.className += " active";
  }
  
}