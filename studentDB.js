
// ==========================================
// 1. DATABASE & COLLECTION SETUP
// ==========================================

// Switch to database
use studentDB;

// Create collection
db.createCollection("students");


// ==========================================
// 2. INSERT OPERATIONS
// ==========================================

// Insert one document
db.students.insertOne({
  name: "Arun",
  age: 22,
  course: "MERN Stack",
  status: "ongoing"
});

// Insert multiple documents
db.students.insertMany([
  {
    name: "Bala",
    age: 21,
    course: "MERN Stack",
    status: "ongoing"
  },
  {
    name: "Divya",
    age: 23,
    course: "Data Science",
    status: "ongoing"
  },
  {
    name: "Kiran",
    age: 24,
    course: "MERN Stack",
    status: "completed"
  },
  {
    name: "Meena",
    age: 20,
    course: "UI/UX",
    status: "ongoing"
  }
]);


// ==========================================
// 3. READ OPERATIONS
// ==========================================

// Fetch all documents
db.students.find();

// Fetch students enrolled in MERN Stack
db.students.find({
  course: "MERN Stack"
});


// ==========================================
// 4. UPDATE OPERATIONS
// ==========================================

// Update single document (change status)
db.students.updateOne(
  { name: "Arun" },
  { $set: { status: "completed" } }
);

// Update multiple documents (mark MERN students as completed)
db.students.updateMany(
  { course: "MERN Stack" },
  { $set: { status: "completed" } }
);


// ==========================================
// 5. DELETE OPERATIONS
// ==========================================

// Delete one document
db.students.deleteOne({
  name: "Meena"
});

// Delete all documents (practice only - comment if not needed)
// db.students.deleteMany({});


// ==========================================
// 6. QUERY OPERATORS PRACTICE
// ==========================================

// $gt (greater than)
db.students.find({
  age: { $gt: 21 }
});

// $lt (less than)
db.students.find({
  age: { $lt: 23 }
});

// $in
db.students.find({
  course: { $in: ["MERN Stack", "Data Science"] }
});

// $and
db.students.find({
  $and: [
    { course: "MERN Stack" },
    { status: "completed" }
  ]
});

// $or
db.students.find({
  $or: [
    { age: { $lt: 21 } },
    { status: "completed" }
  ]
});

// $exists
db.students.find({
  status: { $exists: true }
});


// ==========================================
// 7. USE CASE: LIBRARY SYSTEM
// ==========================================
// (Simple real-world extension using same DB concept)

db.library = db.getSiblingDB("libraryUseCase");

db.library.books.insertMany([
  {
    title: "MongoDB Basics",
    author: "John Doe",
    category: "Database",
    stock: 10
  },
  {
    title: "Advanced MongoDB",
    author: "Jane Smith",
    category: "Database",
    stock: 5
  },
  {
    title: "Web Development",
    author: "Alex Brown",
    category: "MERN",
    stock: 8
  }
]);

// Search books
db.library.books.find({
  category: "Database"
});

// Update stock
db.library.books.updateOne(
  { title: "MongoDB Basics" },
  { $set: { stock: 15 } }
);

// Delete book
db.library.books.deleteOne({
  title: "Web Development"
});
