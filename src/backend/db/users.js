import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    email: "mdzabihhaqqani@gmail.com",
    password: "adarshBalika123",
    bio: "Frontend Developer",
    createdAt: "2022-05-31T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "jack",
    lastName: "parker",
    username: "jackparker",
    email: "jackparker@gmail.com",
    password: "jackparker123",
    bio: "Backend Developer",
    createdAt: "2022-01-31T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "henry",
    lastName: "williamson",
    username: "henry",
    email: "henrywilliamson@gmail.com",
    password: "williamson123",
    bio: "Full Stack Developer",
    createdAt: "2023-02-31T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "sabrina",
    lastName: "west",
    username: "sabrina",
    email: "sabrina@gmail.com",
    password: "sabrina12345",
    bio: "Data Scientist",
    createdAt: "2022-04-31T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
  {
    _id: uuid(),
    firstName: "benjamin",
    lastName: "ford",
    username: "benjaminford",
    email: "benjamin@gmail.com",
    password: "benjaminford123",
    bio: "Product Manager",
    createdAt: "2022-04-31T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
  },
];
