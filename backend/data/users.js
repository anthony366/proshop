import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "johnD@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Cane",
    email: "janeC@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
