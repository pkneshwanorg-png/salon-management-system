// Services data array for services.html
var services = [
  { name: "Haircut & Styling", cat: "Hair", time: "45 min", price: "Rs 800" },
  { name: "Keratin Treatment", cat: "Hair", time: "3 hrs", price: "Rs 5,500" },
  { name: "Hair Coloring", cat: "Hair", time: "2 hrs", price: "Rs 3,500" },
  { name: "Classic Facial", cat: "Skin", time: "60 min", price: "Rs 1,800" },
  { name: "Manicure & Pedicure", cat: "Skin", time: "80 min", price: "Rs 1,500" },
  { name: "Bridal Makeup", cat: "Bridal", time: "3 hrs", price: "Rs 8,000" }
];

// Populate services table on services.html
var sTable = document.getElementById("servicesTableBody");
if (sTable) {
  services.forEach(function (s) {
    var tr = document.createElement("tr");
    tr.innerHTML = "<td><strong>" + s.name + "</strong></td><td>" + s.cat + "</td><td>" + s.time + "</td><td>" + s.price + "</td><td><a href='booking.html' class='btn btn-primary btn-sm'>Book</a></td>";
    sTable.appendChild(tr);
  });
}

// Render saved bookings on booking.html
function renderBookings() {
  var bBody = document.getElementById("bookingListBody");
  if (!bBody) return;
  var list = JSON.parse(localStorage.getItem("salon_bookings") || "[]");
  bBody.innerHTML = list.length === 0 ? "<tr><td colspan='5' class='text-center text-muted'>No bookings saved yet.</td></tr>" : "";
  list.forEach(function (b, i) {
    var tr = document.createElement("tr");
    tr.innerHTML = "<td>" + (i + 1) + "</td><td>" + b.name + " (" + b.phone + ")</td><td>" + b.service + "</td><td>" + b.stylist + "</td><td>" + b.date + " at " + b.time + "</td>";
    bBody.appendChild(tr);
  });
}

// Booking form submission
function handleBookingSubmit(e) {
  e.preventDefault();
  if (!bForm.checkValidity()) { bForm.reportValidity(); return; }
  var item = {
    name: bForm.name.value, phone: bForm.phone.value, service: bForm.service.value,
    stylist: bForm.stylist.value, date: bForm.date.value, time: bForm.time.value
  };
  var list = JSON.parse(localStorage.getItem("salon_bookings") || "[]");
  list.push(item);
  localStorage.setItem("salon_bookings", JSON.stringify(list));
  bForm.reset();
  document.getElementById("bookMsg").textContent = "Booking saved successfully!";
  renderBookings();
}

var bForm = document.getElementById("bookingForm");
if (bForm) {
  renderBookings();
  bForm.addEventListener("submit", handleBookingSubmit);
}
