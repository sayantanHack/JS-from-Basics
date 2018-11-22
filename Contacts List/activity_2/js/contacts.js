console.log("Welcome to your contacts manager!");
//console.log("Here is the list of all of your contacts.\n");
var contacts = {
  //initializing the constacts
  init: function(firstName,lastName){
    this.firstName= firstName;
    this.lastName= lastName;
  },
  
  // creationg the details function
  details: function(){
    return("Last name: "+ this.lastName+", first name: "+this.firstName);
  }
  
};
var contactList = ['John','Smith','Jane','Doe']
// creating objects
var contact = Object.create(contacts);
// initializing items


while(true){
console.log("1: List Contacts\n2: Add a contact\n0: Quit");
var val= prompt("Type 1 for Lists of Contacts\n2 for add a contact\n0 for Quit: ");
if(val==1){
	console.log("Here is the list of all of your contacts.");
	for(i=0;i<contactList.length;i=i+2){
    		contact.init(contactList[i],contactList[i+1]);
		console.log(contact.details());
		}
		
	}
else if(val==2){
	var fName=prompt("Enter the First name: ");
	var lName=prompt("Enter the Last name: ");
	contactList.push(fName,lName);
	console.log("Contact added");
	}
else if(val==0){
	console.log("Exited");	
	break;
	}
}

