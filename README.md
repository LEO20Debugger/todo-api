# ✅ Todo API

A simple Todo API that performs basic CRUD operations:

- 📌 **Fetch Tasks:** Retrieve all tasks from the database.
- ✍️ **Create Tasks:** Add new tasks to the database.
- 🔄 **Update Tasks:** Modify existing tasks.
- ❌ **Delete Tasks:** Remove tasks from the database.

## 🛠️ Technologies Used
- 🌿 **Drizzle ORM:** To communicate with a MySQL database.
- 📏 **Zod:** For schema validation and ensuring data integrity.
- 🚀 **NestJS:** For building a robust and scalable backend.
- 🗄️ **MySQL:** The relational database used to store tasks.

## 📥 Installation

1. 📂 Clone the repository:
```bash
 git clone <your-repo-url>
```

2. 📦 Install dependencies:
```bash
npm install
```

3. 🔧 Set up your environment variables (.env):
```
DATABASE_URL=mysql://user:password@localhost:3306/your-database
```

4. 📌 Run migrations:
```bash
npx drizzle-kit generate:sql
npx drizzle-kit push
```

5. 🟢 Start the server:
```bash
npm run start:dev
```

## 📖 Usage

- Make requests to the API endpoints to perform CRUD operations on tasks.
- Example endpoints:
  - `GET /tasks`: 📌 Fetch all tasks.
  - `POST /tasks`: ✍️ Create a new task.
  - `PUT /tasks/:id`: 🔄 Update an existing task.
  - `DELETE /tasks/:id`: ❌ Delete a task.

## 📄 License

This project is licensed under the MIT License.


