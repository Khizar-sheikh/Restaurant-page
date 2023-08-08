export default function createContactSection() {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");
  
    const contactUsDiv = document.createElement("div");
    contactUsDiv.classList.add("contactUs");
  
    const contactUsHeading = document.createElement("h1");
    contactUsHeading.textContent = "Contact Us";
    contactUsDiv.appendChild(contactUsHeading);
  
    contactDiv.appendChild(contactUsDiv);
  
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");
  
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("location");
  
    const locationHeading = document.createElement("h1");
    locationHeading.textContent = "Location";
    locationDiv.appendChild(locationHeading);
  
    const locationAddress1 = document.createElement("p");
    locationAddress1.textContent = "Gulberg Road";
    locationDiv.appendChild(locationAddress1);
  
    const locationAddress2 = document.createElement("p");
    locationAddress2.textContent = "1054, Faisalabad, Pakistan";
    locationDiv.appendChild(locationAddress2);
  
    infoDiv.appendChild(locationDiv);
  
    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("hours");
  
    const hoursHeading = document.createElement("h1");
    hoursHeading.textContent = "Hours";
    hoursDiv.appendChild(hoursHeading);
  
    const hoursWeekdays = document.createElement("p");
    hoursWeekdays.textContent = "Mon - Fri, 8am to 10pm";
    hoursDiv.appendChild(hoursWeekdays);
  
    const hoursWeekends = document.createElement("p");
    hoursWeekends.textContent = "Sat - Sun, 12pm to 10pm";
    hoursDiv.appendChild(hoursWeekends);
  
    infoDiv.appendChild(hoursDiv);
  
    const contactInfoDiv = document.createElement("div");
    contactInfoDiv.classList.add("contactinfo");
  
    const contactInfoHeading = document.createElement("h1");
    contactInfoHeading.textContent = "Contact";
    contactInfoDiv.appendChild(contactInfoHeading);
  
    const contactNumber = document.createElement("p");
    contactNumber.textContent = "(+92) 322-5473790";
    contactInfoDiv.appendChild(contactNumber);
  
    const contactEmail = document.createElement("p");
    contactEmail.textContent = "latteRall@gmail.com";
    contactInfoDiv.appendChild(contactEmail);
  
    infoDiv.appendChild(contactInfoDiv);
  
    contactDiv.appendChild(infoDiv);
  
} 
  