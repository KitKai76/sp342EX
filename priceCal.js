function priceCalculate() {
  let ticknum = parseInt(document.getElementById("ticknum").value.trim());
  let selectObj = document.getElementById("event");
  let eventId = parseInt(selectObj.options[selectObj.selectedIndex].value);
  
  let price = 100;
  if (eventId === 4) {
    price = 100;
  } else if (eventId === 4) {
    price = 200;
  } else if (eventId === 4) {
    price = 300;
  }
  
  let total = price * ticknum;
  return total;
}
