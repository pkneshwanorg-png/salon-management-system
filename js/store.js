/*
  store.js - localStorage CRUD module
  All appointment and customer data lives here.
  Unit III: JS module pattern, no frameworks
*/

const BOOKINGS_KEY   = "lumina_bookings";
const CUSTOMERS_KEY  = "lumina_customers";
const SEEDED_KEY     = "lumina_seeded";

// ---- Seed data loaded on first visit ----
const SEED_BOOKINGS = [
  {
    id: "b1", name: "Priya Nair", phone: "9847123456",
    service: "Bridal Makeup", stylist: "Meena Krishnan",
    date: "2026-11-08", time: "10:00",
    notes: "Wants a natural dewy look.", status: "Confirmed"
  },
  {
    id: "b2", name: "Anjali Sharma", phone: "9812345678",
    service: "Keratin Treatment", stylist: "Ritika Verma",
    date: "2026-11-08", time: "12:00",
    notes: "", status: "Pending"
  },
  {
    id: "b3", name: "Deepa Menon", phone: "9900112233",
    service: "Hair Coloring", stylist: "Sana Qureshi",
    date: "2026-11-09", time: "11:30",
    notes: "Allergic to ammonia, please use ammonia-free dye.", status: "Confirmed"
  },
  {
    id: "b4", name: "Kavitha Reddy", phone: "9876543210",
    service: "Classic Facial", stylist: "Meena Krishnan",
    date: "2026-11-07", time: "14:00",
    notes: "", status: "Completed"
  },
  {
    id: "b5", name: "Rukmini Das", phone: "9765432100",
    service: "Manicure & Pedicure Combo", stylist: "Ritika Verma",
    date: "2026-11-07", time: "16:00",
    notes: "Prefers gel nails.", status: "Cancelled"
  },
  {
    id: "b6", name: "Fatima Sheikh", phone: "9833445566",
    service: "Blowout & Styling", stylist: "Sana Qureshi",
    date: "2026-11-10", time: "09:30",
    notes: "", status: "Pending"
  }
];

const SEED_CUSTOMERS = [
  {
    id: "c1", name: "Priya Nair", email: "priya.nair@email.com",
    phone: "9847123456", dob: "1995-03-12", gender: "Female",
    joinedOn: "2026-10-01"
  },
  {
    id: "c2", name: "Anjali Sharma", email: "anjali.s@email.com",
    phone: "9812345678", dob: "1992-07-19", gender: "Female",
    joinedOn: "2026-10-15"
  },
  {
    id: "c3", name: "Deepa Menon", email: "deepa.menon@email.com",
    phone: "9900112233", dob: "1998-01-25", gender: "Female",
    joinedOn: "2026-10-20"
  }
];

// Seed data into localStorage if first time
function seedIfNeeded() {
  if (localStorage.getItem(SEEDED_KEY)) return;
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(SEED_BOOKINGS));
  localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(SEED_CUSTOMERS));
  localStorage.setItem(SEEDED_KEY, "1");
}

// ---- Bookings CRUD ----

function getBookings() {
  const raw = localStorage.getItem(BOOKINGS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveBookings(list) {
  localStorage.setItem(BOOKINGS_KEY, JSON.stringify(list));
}

function addBooking(data) {
  const list = getBookings();

  // Double-booking check: same stylist + date + time
  const clash = list.find(b =>
    b.stylist === data.stylist &&
    b.date   === data.date   &&
    b.time   === data.time   &&
    b.status !== "Cancelled"
  );
  if (clash) {
    return { ok: false, message: `${data.stylist} already has an appointment at this time. Please choose another slot.` };
  }

  const booking = {
    id: "b" + Date.now(),
    ...data,
    status: "Pending"
  };
  list.push(booking);
  saveBookings(list);
  return { ok: true, booking };
}

function updateBookingStatus(id, status) {
  const list = getBookings();
  const idx  = list.findIndex(b => b.id === id);
  if (idx === -1) return false;
  list[idx].status = status;
  saveBookings(list);
  return true;
}

function deleteBooking(id) {
  const list = getBookings().filter(b => b.id !== id);
  saveBookings(list);
}

function getTodayBookings() {
  const today = new Date().toISOString().slice(0, 10);
  return getBookings().filter(b => b.date === today);
}

function getRevenueEstimate() {
  const prices = {
    "Bridal Makeup": 8000,
    "Keratin Treatment": 5500,
    "Hair Coloring": 3500,
    "Classic Facial": 1800,
    "Manicure & Pedicure Combo": 1500,
    "Blowout & Styling": 1200,
    "Haircut & Styling": 800,
    "Deep Conditioning": 1000,
    "Eyebrow Threading & Shaping": 300,
    "Waxing (Full Body)": 2200,
    "Head Massage": 600,
    "Party Makeup": 3500
  };
  return getBookings()
    .filter(b => b.status === "Completed")
    .reduce((sum, b) => sum + (prices[b.service] || 1000), 0);
}

// ---- Customers CRUD ----

function getCustomers() {
  const raw = localStorage.getItem(CUSTOMERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveCustomers(list) {
  localStorage.setItem(CUSTOMERS_KEY, JSON.stringify(list));
}

function addCustomer(data) {
  const list = getCustomers();
  const exists = list.find(c => c.email === data.email);
  if (exists) {
    return { ok: false, message: "An account with this email already exists." };
  }
  const customer = {
    id: "c" + Date.now(),
    ...data,
    joinedOn: new Date().toISOString().slice(0, 10)
  };
  list.push(customer);
  saveCustomers(list);
  return { ok: true, customer };
}

// Initialize on script load
seedIfNeeded();
