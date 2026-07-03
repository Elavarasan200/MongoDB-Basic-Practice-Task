📘 MongoDB CRUD Operations & Query Operators – Explanation
🟢 1. Database & Collection Setup

use studentDB

Switches to a database named studentDB.
If it doesn’t exist, MongoDB creates it automatically when data is inserted.

db.createCollection("students")

Explicitly creates a collection called students.
Collections in MongoDB are like tables in SQL.

🟢 2. INSERT OPERATIONS

insertOne()

db.students.insertOne({ ... })

Inserts a single document into the collection.
Example: Adds one student record (Arun).

insertMany()

db.students.insertMany([ ... ])
Inserts multiple documents at once.
More efficient than inserting one by one.

🟢 3. READ OPERATIONS

find()

db.students.find()

Retrieves all documents in the collection.

Filtered find()

db.students.find({ course: "MERN Stack" })

Returns only students enrolled in MERN Stack course.

🟢 4. UPDATE OPERATIONS

updateOne()

db.students.updateOne(

  { name: "Arun" },
  
  { $set: { status: "completed" } }
  
)

Updates only the first matching document.

$set modifies specific fields.

updateMany()

db.students.updateMany(

  { course: "MERN Stack" },
  
  { $set: { status: "completed" } }
  
)
Updates all documents matching condition.

🟢 5. DELETE OPERATIONS

deleteOne()

db.students.deleteOne({ name: "Meena" })

Deletes only one matching document.

deleteMany()

db.students.deleteMany({})

Deletes all documents in collection (⚠ dangerous).

🟢 6. QUERY OPERATORS

$gt (Greater Than)

{ age: { $gt: 21 } }

Finds students older than 21.

$lt (Less Than)

{ age: { $lt: 23 } }

Finds students younger than 23.

$in
{ course: { $in: ["MERN Stack", "Data Science"] } }

Matches any value in the list.

$and
{
  $and: [
  
    { course: "MERN Stack" },
    { status: "completed" }
    
  ]
}

Both conditions must be true.

$or
{
  $or: [
  
    { age: { $lt: 21 } },
    { status: "completed" }
    
  ]
}
Either condition can be true.

$exists
{ status: { $exists: true } }
Checks if a field exists in documents.

🟢 7. USE CASE: LIBRARY SYSTEM

Switch Database

db.getSiblingDB("libraryUseCase")
Switches to another database named libraryUseCase.

Insert Books
db.library.books.insertMany([...])
Adds multiple books into books collection.

Find Books by Category
db.library.books.find({ category: "Database" })
Filters books by category.

Update Stock

db.library.books.updateOne(
  { title: "MongoDB Basics" },
  { $set: { stock: 15 } }
)
Updates stock quantity.

Delete Book
db.library.books.deleteOne({ title: "Web Development" })
Removes one book document.

# MongoDB CRUD Operations & Query Operators

This project demonstrates basic MongoDB operations using a `students` collection and a simple `library` use case.


## 📌 1. Database Setup

```js
use studentDB;
db.createCollection("students");
use: Switches or creates database.
createCollection: Creates a new collection.
📌 2. Insert Operations
Insert One Document
db.students.insertOne({ name: "Arun", age: 22 });
Insert Multiple Documents
db.students.insertMany([
  { name: "Bala", age: 21 },
  { name: "Divya", age: 23 }
]);
📌 3. Read Operations
Fetch All Data
db.students.find();
Filter Data
db.students.find({ course: "MERN Stack" });
📌 4. Update Operations
Update One Document
db.students.updateOne(
  { name: "Arun" },
  { $set: { status: "completed" } }
);
Update Many Documents
db.students.updateMany(
  { course: "MERN Stack" },
  { $set: { status: "completed" } }
);
📌 5. Delete Operations
db.students.deleteOne({ name: "Meena" });

⚠️ Use carefully:

db.students.deleteMany({});
📌 6. Query Operators
Operator	Description
$gt	Greater than
$lt	Less than
$in	Matches values in array
$and	All conditions true
$or	Any condition true
$exists	Field exists check
📌 7. Library Use Case
db.getSiblingDB("libraryUseCase");
Insert Books
db.library.books.insertMany([...]);
Find Books
db.library.books.find({ category: "Database" });
Update Stock
db.library.books.updateOne(
  { title: "MongoDB Basics" },
  { $set: { stock: 15 } }
);
Delete Book
db.library.books.deleteOne({ title: "Web Development" });
🚀 Learning Outcome
MongoDB CRUD operations
Query operators usage
Real-world database structure design

---

If you want, I can also:
✅ Convert this into a **GitHub-ready project folder structure**  
✅ Add **ER diagram / MongoDB schema diagram**  
✅ Turn it into a **PDF notes file**  
✅ Or give **interview questions from this code**
