# 🔐 Next.js User Authentication Starter

This project provides a basic user authentication system built with Next.js, Prisma, and PostgreSQL. It includes features for user signup and a simple user profile page. It serves as a starting point for building more complex applications requiring user authentication.

🚀 **Key Features:**

*   **User Signup:** Allows new users to create accounts with a username and password.
*   **Database Integration:** Uses Prisma as an ORM to interact with a PostgreSQL database.
*   **API Endpoint:** Provides an API endpoint for user creation.
*   **Client-Side Routing:** Uses Next.js's client-side routing to navigate users after signup.
*   **Basic User Profile:** Displays a simple user profile page with fetched data.
*   **Font Configuration:** Configures custom fonts (Geist Sans and Geist Mono) for a consistent UI.
*   **Server Actions:** Implements server actions for secure data handling.

🛠️ **Tech Stack:**

| Category    | Technology          | Description                                                                 |
| :---------- | :------------------ | :-------------------------------------------------------------------------- |
| Frontend    | React               | JavaScript library for building user interfaces                             |
|             | Next.js             | React framework for building server-rendered and statically generated apps |
|             | Tailwind CSS        | Utility-first CSS framework for styling                                     |
| Backend     | Next.js API Routes  | Serverless functions for handling API requests                              |
| Database    | PostgreSQL          | Relational database for storing user data                                   |
| ORM         | Prisma              | ORM for interacting with the database                                       |
| Fonts       | Google Fonts (Geist) | Custom fonts for UI                                                         |
| Build Tools | Node.js             | JavaScript runtime environment                                              |
|             | npm/yarn/pnpm       | Package manager                                                             |

📦 **Getting Started:**

### Prerequisites

*   Node.js (version 18 or higher recommended)
*   npm, yarn, or pnpm
*   PostgreSQL database
*   Prisma CLI (`npm install -g prisma`)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/GeekNoob04/nextjs-backend-cohort-db
    cd <project_directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install # or yarn install or pnpm install
    ```

3.  **Set up your PostgreSQL database:**

    *   Create a new PostgreSQL database.
    *   Update the `.env` file with your database connection URL:

        ```
        DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
        ```

4.  **Generate the Prisma client:**

    ```bash
    npx prisma generate
    ```

5.  **Run database migrations:**

    ```bash
    npx prisma migrate dev --name init
    ```

### Running Locally

1.  **Start the development server:**

    ```bash
    npm run dev # or yarn dev or pnpm dev
    ```

    This will start the Next.js development server, typically at `http://localhost:3000`.

💻 **Usage:**

1.  **Access the signup page:** Navigate to `http://localhost:3000/user/signup` to create a new user account.
2.  **View the user profile:** After signing up, you can view a basic user profile at `http://localhost:3000/user`.

📂 **Project Structure:**

```
├── app
│   ├── actions
│   │   └── user.ts           # Server actions for user management (signup)
│   ├── api
│   │   └── user
│   │       └── route.ts      # API endpoint for creating users
│   ├── generated             # Prisma generated client
│   │   └── prisma
│   ├── user
│   │   ├── signup
│   │   │   └── page.tsx      # Signup page component
│   │   └── page.tsx          # User profile page component
│   ├── layout.tsx            # Root layout for the application
│   └── page.tsx              # Main landing page (homepage)
├── components
│   └── Signup.tsx            # Signup form component
├── prisma
│   └── schema.prisma         # Prisma schema definition
├── public
│   └── ...
├── db.ts                     # Prisma client initialization
├── next.config.js            # Next.js configuration
├── package.json
├── README.md
└── tsconfig.json
```

🤝 **Contributing:**

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with clear, concise messages.
4.  Submit a pull request.

📬 **Contact:**

If you have any questions or suggestions, feel free to contact me at [harshitbudhraja0@gmail.com](mailto:harshitbudhraja0@gmail.com).

💖 Thanks for checking out this project!

This README is written by [readme.ai](https://readme-generator-phi.vercel.app/).
