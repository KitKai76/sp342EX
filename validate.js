function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
	if (nid.length != 13) {
	  return false;
	} else {
	  return true;
	}
  }
  
  function checkTicketNo() {
	let num = (document.getElementById("ticknum").value).trim();
	if (isNaN(num)) {
	  return false;
	} else {
	  return true;
	}
  }
  
  function priceCalculate() {
	let numTickets = parseInt(document.getElementById("ticknum").value);
	let totalPrice = numTickets + pricePerTicket;
	return totalPrice;
  }
  
  function validateForm(){
	if(!checkNID()){
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	} else if(!checkTicketNo()){
	  alert("Invalid value for No. of tickets!!");
	  document.getElementById("ticknum").focus();
	  return false;
	} else if(parseInt(document.getElementById("ticknum").value) > 5){
	  alert("Maximum 5 tickets can be booked at once!!");
	  document.getElementById("ticknum").focus();
	  return false;
	} else {
	  let total = priceCalculate();
	  alert("Total price for this booking is " + total + " USD");
	  return false;
	}
  }
  