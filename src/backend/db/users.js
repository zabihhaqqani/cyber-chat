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
    password: "adarshBalika",
    bio: "Frontend Developer",
    website: "zabihhaqqani.netlify.app",
    createdAt: "2022-01-31T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
    avatar: "https://i.pravatar.cc/150?img=13",
    backgroundImg:
      "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
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
    backgroundImg:
      "https://fastly.picsum.photos/id/20/3670/2462.jpg?hmac=CmQ0ln-k5ZqkdtLvVO23LjVAEabZQx2wOaT4pyeG10I",
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
    createdAt: "2022-03-03T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
    avatar: "https://i.pravatar.cc/150?img=12",
    backgroundImg:
      "https://fastly.picsum.photos/id/24/4855/1803.jpg?hmac=ICVhP1pUXDLXaTkgwDJinSUS59UWalMxf4SOIWb9Ui4",
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
    createdAt: "2022-05-10T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
    avatar: "https://i.pravatar.cc/150?img=38",
    backgroundImg:
      "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI",
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
    createdAt: "2021-12-08T10:15:12+05:30",
    updatedAt: formatDate(),
    bookmarks: [],
    avatar: "https://i.pravatar.cc/150?img=58",
    backgroundImg:
      "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA",
  },
];
