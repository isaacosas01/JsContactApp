
class Contact {
    constructor(name, email, number) {
        this.name = name;
        this.email = email;
        this.number = number;
    }
}


function deleteContact(event) {
    alert('delete button click' + event.type);
    
    var sav = this;
   
    event.innerHTML = "";
    //console.log(sav.innerHTML);
    console.log(document.querySelector('#row0').innerHTML);
};
 
class ContactManager {
    constructor() {
        // when we build the contact manager, it
        // has an empty list of contacts
        this.listOfContacts = [];
    }
    add(contact) {
        this.listOfContacts.push(contact);
    }
    remove(contact) {
        // we iterate on the list of contacts until we find the contact
        // passed as a parameter (we say that they are equal if emails match)
        for (let i = 0; i < this.listOfContacts.length; i++) {
            var c = this.listOfContacts[i];

            if (c.email === contact.email) {
                // remove the contact at index i
                this.listOfContacts.splice(i, i);
                // stop/exit the loop
                break;
            }
        };
    }

    displayContactsAsATable(idOfContainer) {
        var counter = 0;
        // to empty the container that contains the results
        let container = document.querySelector("#" + idOfContainer);
        container.innerHTML = "";
 
        if(this.listOfContacts.length === 0) {
            container.innerHTML = "<p>No contacts to display!</p>";
            // stops the execution of this method
            return;
        }
        // creates and populates the table with users
        let table = document.createElement("table");
        // iterates on the array of users
        this.listOfContacts.forEach(function(currentContact) {
            // creates a row
            let row = table.insertRow();
            row.innerHTML = "<td id='row" + (counter) + "' >" + currentContact.name + "</td>"
                          + "<td>" + currentContact.email + "</td>"
                          + "<td>" + currentContact.number + "</td>"
                          + "<td>" + "<button onclick='deleteContact(event);'>Delete<botton>" + "</td>";
                          
                          ++counter;

        });
        // adds the table to the div
        container.appendChild(table);
        
    }

    printContactsToConsole() {
        this.listOfContacts.forEach(function (c) {
            console.log(c.name);
        });
    };
}

var cm = new ContactManager();

function formSubmitted() {
    // Get the values from input fields
    let name = document.querySelector("#name");
    let email = document.querySelector("#email");
    let number = document.querySelector("#number");
    console.log(number.value);
    console.log('HELLO');
    let newContact = new Contact(name.value, email.value, number.value);
    cm.add(newContact);
    // Empty the input fields
    name.value = "";
    email.value = "";
    number.value ="";
    cm.printContactsToConsole();
    //cm.displayContactsAsATable(contacts);
    // refresh the table
    cm.displayContactsAsATable("contacts");
    // do not let your browser submit the form using HTTP
    return false;
}