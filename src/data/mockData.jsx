export const admissionTrend = [
  { month: "Nov", patients: 1050 },
  { month: "Dec", patients: 1080 },
  { month: "Jan", patients: 1100 },
  { month: "Feb", patients: 1070 },
  { month: "Mar", patients: 1130 },
  { month: "Apr", patients: 1180 },
  { month: "May", patients: 1250 },
];

export const revenueTrend = [
  { month: "Nov", revenue: 195000 },
  { month: "Dec", revenue: 210000 },
  { month: "Jan", revenue: 205000 },
  { month: "Feb", revenue: 220000 },
  { month: "Mar", revenue: 230000 },
  { month: "Apr", revenue: 240000 },
  { month: "May", revenue: 250000 },
];

export const deptDistribution = [
  { name: "Cardiology", value: 28, color: "#2563eb" },
  { name: "Orthopedics", value: 18, color: "#8b5cf6" },
  { name: "Pediatrics", value: 15, color: "#ef4444" },
  { name: "Neurology", value: 16, color: "#10b981" },
  { name: "Gynecology", value: 14, color: "#f59e0b" },
  { name: "Urology", value: 9, color: "#06b6d4" },
];

export const bedOccupancy = [
  { dept: "Cardiology", occupied: 24, total: 30, color: "blue" },
  { dept: "Orthopedics", occupied: 18, total: 25, color: "purple" },
  { dept: "Pediatrics", occupied: 15, total: 20, color: "green" },
  { dept: "Neurology", occupied: 12, total: 20, color: "orange" },
  { dept: "Gynecology", occupied: 10, total: 18, color: "red" },
  { dept: "ICU", occupied: 14, total: 15, color: "teal" },
];

export const recentPatients = [
  { id: "P-2024-001", name: "Rajesh Kumar", age: 45, dept: "Cardiology", doctor: "Dr. Anand", status: "admitted", date: "30 May" },
  { id: "P-2024-002", name: "Priya Devi", age: 32, dept: "Gynecology", doctor: "Dr. Meena", status: "scheduled", date: "30 May" },
  { id: "P-2024-003", name: "Suresh Babu", age: 58, dept: "Orthopedics", doctor: "Dr. Ravi", status: "critical", date: "29 May" },
  { id: "P-2024-004", name: "Kavitha S", age: 27, dept: "Neurology", doctor: "Dr. Kumar", status: "stable", date: "29 May" },
  { id: "P-2024-005", name: "Muthu Raj", age: 65, dept: "Cardiology", doctor: "Dr. Anand", status: "discharged", date: "28 May" },
  { id: "P-2024-006", name: "Anitha M", age: 40, dept: "Pediatrics", doctor: "Dr. Lakshmi", status: "observation", date: "30 May" },
];

export const doctors = [
  { id: "D-001", name: "Dr. S. Anand", dept: "Cardiology", exp: "12 yrs", patients: 142, rating: 4.9, avatar: "c1", online: true },
  { id: "D-002", name: "Dr. R. Meena", dept: "Gynecology", exp: "8 yrs", patients: 98, rating: 4.8, avatar: "c2", online: true },
  { id: "D-003", name: "Dr. K. Ravi", dept: "Orthopedics", exp: "15 yrs", patients: 115, rating: 4.7, avatar: "c3", online: false },
  { id: "D-004", name: "Dr. P. Kumar", dept: "Neurology", exp: "10 yrs", patients: 87, rating: 4.9, avatar: "c4", online: true },
  { id: "D-005", name: "Dr. V. Lakshmi", dept: "Pediatrics", exp: "6 yrs", patients: 203, rating: 4.8, avatar: "c5", online: true },
  { id: "D-006", name: "Dr. M. Priya", dept: "Urology", exp: "9 yrs", patients: 76, rating: 4.6, avatar: "c6", online: false },
  { id: "D-007", name: "Dr. T. Bala", dept: "Cardiology", exp: "18 yrs", patients: 189, rating: 5.0, avatar: "c1", online: true },
  { id: "D-008", name: "Dr. N. Geetha", dept: "Neurology", exp: "11 yrs", patients: 94, rating: 4.7, avatar: "c2", online: false },
];

export const appointments = [
  { id: "A-001", time: "09:00", patient: "Rajesh Kumar", age: 45, dept: "Cardiology", doctor: "Dr. Anand", type: "Follow-up", status: "scheduled" },
  { id: "A-002", time: "09:30", patient: "Priya Devi", age: 32, dept: "Gynecology", doctor: "Dr. Meena", type: "Consultation", status: "admitted" },
  { id: "A-003", time: "10:00", patient: "Arjun S", age: 28, dept: "Orthopedics", doctor: "Dr. Ravi", type: "Post-op", status: "stable" },
  { id: "A-004", time: "10:30", patient: "Latha Devi", age: 52, dept: "Neurology", doctor: "Dr. Kumar", type: "New", status: "scheduled" },
  { id: "A-005", time: "11:00", patient: "Karthik R", age: 8, dept: "Pediatrics", doctor: "Dr. Lakshmi", type: "Checkup", status: "admitted" },
  { id: "A-006", time: "11:30", patient: "Viji M", age: 36, dept: "Gynecology", doctor: "Dr. Meena", type: "Follow-up", status: "stable" },
  { id: "A-007", time: "14:00", patient: "Senthil P", age: 60, dept: "Cardiology", doctor: "Dr. Anand", type: "ECG Review", status: "critical" },
  { id: "A-008", time: "14:30", patient: "Deepa N", age: 44, dept: "Urology", doctor: "Dr. Priya", type: "Consultation", status: "scheduled" },
];

export const emergencyCases = [
  { id: "E-001", name: "Mohan Kumar", age: 55, condition: "Acute MI - Chest pain, BP 180/110", status: "critical", time: "10 min ago", bed: "ICU-3", doctor: "Dr. Anand" },
  { id: "E-002", name: "Saraswathi D", age: 42, condition: "Road accident - Multiple fractures", status: "serious", time: "25 min ago", bed: "ER-5", doctor: "Dr. Ravi" },
  { id: "E-003", name: "Baby Arjun", age: 4, condition: "High fever 104°F, Seizure", status: "critical", time: "35 min ago", bed: "PICU-1", doctor: "Dr. Lakshmi" },
  { id: "E-004", name: "Rajan S", age: 68, condition: "Stroke symptoms - Slurred speech", status: "critical", time: "50 min ago", bed: "ICU-7", doctor: "Dr. Kumar" },
  { id: "E-005", name: "Malathi V", age: 38, condition: "Allergic reaction - Anaphylaxis", status: "stable", time: "1 hr ago", bed: "ER-2", doctor: "Dr. Meena" },
  { id: "E-006", name: "Venkat R", age: 50, condition: "Diabetic ketoacidosis, Blood sugar 450", status: "serious", time: "2 hrs ago", bed: "ER-8", doctor: "Dr. Anand" },
];

export const labTests = [
  { id: "L-001", patient: "Rajesh Kumar", test: "CBC + LFT", ordered: "Dr. Anand", status: "completed", result: "Normal", date: "30 May" },
  { id: "L-002", patient: "Priya Devi", test: "Blood Sugar (F/PP)", ordered: "Dr. Meena", status: "pending", result: "-", date: "30 May" },
  { id: "L-003", patient: "Suresh Babu", test: "X-Ray Lumbar", ordered: "Dr. Ravi", status: "completed", result: "L4-L5 Disc", date: "30 May" },
  { id: "L-004", patient: "Kavitha S", test: "MRI Brain", ordered: "Dr. Kumar", status: "in-progress", result: "-", date: "30 May" },
  { id: "L-005", patient: "Mohan Kumar", test: "ECG + Troponin", ordered: "Dr. Anand", status: "completed", result: "Abnormal", date: "30 May" },
  { id: "L-006", patient: "Baby Arjun", test: "CBC + CRP", ordered: "Dr. Lakshmi", status: "pending", result: "-", date: "30 May" },
];

export const medicines = [
  { id: "M-001", name: "Amoxicillin", category: "Antibiotic", price: 120, stock: 450, icon: "💊", low: false },
  { id: "M-002", name: "Paracetamol", category: "Analgesic", price: 45, stock: 1200, icon: "💊", low: false },
  { id: "M-003", name: "Metformin", category: "Diabetic", price: 95, stock: 320, icon: "🔵", low: false },
  { id: "M-004", name: "Atorvastatin", category: "Cardiac", price: 210, stock: 38, icon: "❤️", low: true },
  { id: "M-005", name: "Omeprazole", category: "GI", price: 85, stock: 600, icon: "🟡", low: false },
  { id: "M-006", name: "Amlodipine", category: "BP", price: 130, stock: 22, icon: "🔴", low: true },
  { id: "M-007", name: "Insulin Glargine", category: "Diabetic", price: 780, stock: 95, icon: "💉", low: false },
  { id: "M-008", name: "Cetirizine", category: "Antihistamine", price: 60, stock: 800, icon: "💊", low: false },
];

export const bills = [
  { id: "B-001", patient: "Rajesh Kumar", amount: 15400, type: "IPD", status: "paid", date: "30 May" },
  { id: "B-002", patient: "Priya Devi", amount: 3200, type: "OPD", status: "pending", date: "30 May" },
  { id: "B-003", patient: "Suresh Babu", amount: 48000, type: "Surgery", status: "partial", date: "29 May" },
  { id: "B-004", patient: "Kavitha S", amount: 22500, type: "IPD", status: "paid", date: "29 May" },
  { id: "B-005", patient: "Muthu Raj", amount: 8700, type: "IPD", status: "paid", date: "28 May" },
  { id: "B-006", patient: "Anitha M", amount: 4100, type: "Lab", status: "pending", date: "28 May" },
];

export const departments = [
  { name: "Cardiology", head: "Dr. S. Anand", icon: "❤️", patients: 142, beds: 30, color: "blue", bg: "#dbeafe" },
  { name: "Orthopedics", head: "Dr. K. Ravi", icon: "🦴", patients: 98, beds: 25, color: "purple", bg: "#ede9fe" },
  { name: "Pediatrics", head: "Dr. V. Lakshmi", icon: "👶", patients: 115, beds: 20, color: "green", bg: "#d1fae5" },
  { name: "Neurology", head: "Dr. P. Kumar", icon: "🧠", patients: 87, beds: 20, color: "orange", bg: "#fef3c7" },
  { name: "Gynecology", head: "Dr. R. Meena", icon: "🌸", patients: 76, beds: 18, color: "pink", bg: "#fce7f3" },
  { name: "Urology", head: "Dr. M. Priya", icon: "🔬", patients: 54, beds: 15, color: "teal", bg: "#cffafe" },
  { name: "Emergency", head: "Dr. T. Bala", icon: "🚨", patients: 203, beds: 15, color: "red", bg: "#fee2e2" },
  { name: "Laboratory", head: "Mr. Suresh", icon: "🧪", patients: 320, beds: 0, color: "green", bg: "#d1fae5" },
];
