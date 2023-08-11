import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Get all users
  //   const allUsers = await prisma.user.findMany();
  //   console.log(allUsers);

  // Create a user
  const user = await prisma.user.create({
    data: {
      name: "Golam Rabbani",
      email: "rabbani.cse.eub1@gmail.com",
      age: 23,
    },
  });
  console.log("user", user);
};

main();
