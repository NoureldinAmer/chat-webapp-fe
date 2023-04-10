import { faker } from "@faker-js/faker";

export const Chat_History = [
  {
    id: 0,
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
    msgOwner: faker.name.firstName(),
    
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
    msgOwner: faker.name.firstName(),
    id: 1,
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
    msgOwner: faker.name.firstName(),
    id: 2,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
    msgOwner: faker.name.firstName(),
    id: 3,
  },

  {
    type: "msg",
    message: "Here You Go",
    incoming: true,
    outgoing: false,
    msgOwner: faker.name.firstName(),
    id: 4,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
    msgOwner: faker.name.firstName(),
    id: 5,
  },

  {
    type: "msg",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
    msgOwner: faker.name.firstName(),
    id: 6,
  },
  {
    type: "msg",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
    msgOwner: faker.name.firstName(),
    id: 7,
  },
  {
    type: "msg",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
    msgOwner: faker.name.firstName(),
    id: 8,
  },
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
    msgOwner: faker.name.firstName(),
    id: 9,
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
    msgOwner: faker.name.firstName(),
    id: 10,
  },
  {
    type: "connection",
    user: "Jorge Masbidal",
    connection: "disconnection",
    id: 11,
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
    msgOwner: faker.name.firstName(),
    id: 12,
    
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
    msgOwner: faker.name.firstName(),
    id: 13,
  },
  {
    type: "connection",
    user: "Jorge Masbidal",
    connection: "connection",
    id: 14,
  },
  {
    type: "msg",
    message: "Here You Go",
    incoming: true,
    outgoing: false,
    msgOwner: faker.name.firstName(),
    id: 15,
  },
  {
    type: "msg",
    message: "Can you please send this in file format? Can you please send this in file format? Can you please send this in file format? Can you please send this in file format? Can you please send this in file format? Can you please send this in file format?",
    incoming: false,
    outgoing: true,
    msgOwner: faker.name.firstName(),
    id: 16,
  },

  {
    type: "msg",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
    msgOwner: faker.name.firstName(),
    id: 17,
  },
  {
    type: "msg",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
    msgOwner: faker.name.firstName(),
    id: 18,
  },
  {
    type: "msg",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
    msgOwner: faker.name.firstName(),
    id: 19,
  },
];

export const chat_log = [
  {
      "_id": "6432aa28f489ac09b3b69493",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "let's see if this works",
      "type": "text",
      "created_at": "2023-04-09T12:05:11.461Z",
      "expriy_date": "2023-04-16T12:05:11.461Z",
      "__v": 0
  },
  {
      "_id": "6432aa2ff489ac09b3b69496",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "does this work?",
      "type": "text",
      "created_at": "2023-04-09T12:05:11.461Z",
      "expriy_date": "2023-04-16T12:05:11.461Z",
      "__v": 0
  },
  {
      "_id": "6432aa33f489ac09b3b69499",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "okay",
      "type": "text",
      "created_at": "2023-04-09T12:05:11.461Z",
      "expriy_date": "2023-04-16T12:05:11.461Z",
      "__v": 0
  },
  {
      "_id": "6432ad6ee46cc8ee82af6d5b",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "something",
      "type": "text",
      "created_at": "2023-04-09T12:15:31.008Z",
      "expriy_date": "2023-04-16T12:15:31.008Z",
      "__v": 0
  },
  {
      "_id": "6432ad76e46cc8ee82af6d62",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "try",
      "type": "text",
      "created_at": "2023-04-09T12:15:31.008Z",
      "expriy_date": "2023-04-16T12:15:31.008Z",
      "__v": 0
  },
  {
      "_id": "6432adf1cba872a614a9dc5b",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "speed",
      "type": "text",
      "created_at": "2023-04-09T12:21:07.590Z",
      "expriy_date": "2023-04-16T12:21:07.590Z",
      "__v": 0
  },
  {
      "_id": "6432adf7cba872a614a9dc5e",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "okay!",
      "type": "text",
      "created_at": "2023-04-09T12:21:07.590Z",
      "expriy_date": "2023-04-16T12:21:07.590Z",
      "__v": 0
  },
  {
      "_id": "6432ae46d9a7ec5a54dce959",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "say something now!!",
      "type": "text",
      "created_at": "2023-04-09T12:23:25.071Z",
      "expriy_date": "2023-04-16T12:23:25.071Z",
      "__v": 0
  },
  {
      "_id": "6432ae84d9a7ec5a54dce962",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "ok",
      "type": "text",
      "created_at": "2023-04-09T12:23:25.071Z",
      "expriy_date": "2023-04-16T12:23:25.071Z",
      "__v": 0
  },
  {
      "_id": "6432aecfd9a7ec5a54dce965",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "fair",
      "type": "text",
      "created_at": "2023-04-09T12:23:25.071Z",
      "expriy_date": "2023-04-16T12:23:25.071Z",
      "__v": 0
  },
  {
      "_id": "6432aed8d9a7ec5a54dce968",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "huh?",
      "type": "text",
      "created_at": "2023-04-09T12:23:25.071Z",
      "expriy_date": "2023-04-16T12:23:25.071Z",
      "__v": 0
  },
  {
      "_id": "6432af74d9a7ec5a54dce97f",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "try something",
      "type": "text",
      "created_at": "2023-04-09T12:23:25.071Z",
      "expriy_date": "2023-04-16T12:23:25.071Z",
      "__v": 0
  },
  {
      "_id": "6432af96d9a7ec5a54dce98c",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "now?",
      "type": "text",
      "created_at": "2023-04-09T12:23:25.071Z",
      "expriy_date": "2023-04-16T12:23:25.071Z",
      "__v": 0
  },
  {
      "_id": "6432afd8d9f8ae83390abc9c",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "awsome",
      "type": "text",
      "created_at": "2023-04-09T12:29:55.155Z",
      "expriy_date": "2023-04-16T12:29:55.155Z",
      "__v": 0
  },
  {
      "_id": "6432afe8d9f8ae83390abc9f",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "wait",
      "type": "text",
      "created_at": "2023-04-09T12:29:55.155Z",
      "expriy_date": "2023-04-16T12:29:55.155Z",
      "__v": 0
  },
  {
      "_id": "6432b016d9f8ae83390abcae",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "alright",
      "type": "text",
      "created_at": "2023-04-09T12:29:55.155Z",
      "expriy_date": "2023-04-16T12:29:55.155Z",
      "__v": 0
  },
  {
      "_id": "6432b01dd9f8ae83390abcb1",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "noice",
      "type": "text",
      "created_at": "2023-04-09T12:29:55.155Z",
      "expriy_date": "2023-04-16T12:29:55.155Z",
      "__v": 0
  },
  {
      "_id": "6432b02bd9f8ae83390abcb4",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "good shit",
      "type": "text",
      "created_at": "2023-04-09T12:29:55.155Z",
      "expriy_date": "2023-04-16T12:29:55.155Z",
      "__v": 0
  },
  {
      "_id": "6432b1334448b66f0f038e0e",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "good balls",
      "type": "text",
      "created_at": "2023-04-09T12:35:40.481Z",
      "expriy_date": "2023-04-16T12:35:40.481Z",
      "__v": 0
  },
  {
      "_id": "6432b13b4448b66f0f038e11",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "awsome",
      "type": "text",
      "created_at": "2023-04-09T12:35:40.481Z",
      "expriy_date": "2023-04-16T12:35:40.481Z",
      "__v": 0
  },
  {
      "_id": "6432b1e94448b66f0f038e3e",
      "from": "6432aa0bf489ac09b3b6948b",
      "text": "the heck is json doing?",
      "type": "text",
      "created_at": "2023-04-09T12:35:40.481Z",
      "expriy_date": "2023-04-16T12:35:40.481Z",
      "__v": 0
  }
]
