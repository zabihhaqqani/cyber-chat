import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 1,
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    email: "mdzabihhaqqani@gmail.com",
    password: "adarshBalika123",
    bio: "Frontend Developer",
    website: "zabihhaqqani.netlify.app",
    createdAt: "2022-05-31T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    _id: uuid(),
    firstName: "Jack",
    lastName: "Parker",
    username: "jackparker",
    email: "jackparker@gmail.com",
    password: "jackparker123",
    bio: "Backend Developer",
    website: "jackparker.netlify.app",
    createdAt: "2022-01-31T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
    avatar: "https://i.pravatar.cc/150?img=11",
  },

  {
    _id: uuid(),
    firstName: "Henry",
    lastName: "Williamson",
    username: "henry",
    email: "henrywilliamson@gmail.com",
    password: "williamson123",
    bio: "Full Stack Developer",
    website: "williamson.netlify.app",
    createdAt: "2023-02-31T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    _id: uuid(),
    firstName: "Sabrina",
    lastName: "West",
    username: "sabrina",
    email: "sabrina@gmail.com",
    password: "sabrina12345",
    bio: "Data Scientist",
    website: "sabrina.netlify.app",
    createdAt: "2022-04-31T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
    avatar: "https://i.pravatar.cc/150?img=38",
  },

  {
    _id: uuid(),
    firstName: "Benjamin",
    lastName: "Ford",
    username: "benjamin",
    email: "benjamin@gmail.com",
    password: "benjaminford123",
    bio: "Product Manager",
    website: "benjamin.netlify.app",
    createdAt: "2022-04-31T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
    avatar: "https://i.pravatar.cc/150?img=58",
  },
];
