const getData = () => {
  return [
    {
      id: 1,
      name: "John Doe",
      picture: "/profile.jpeg",
      chats: [
        {
          id: 1,
          message: "Hello",
          time: "2023-10-01T10:00:00Z",
          isSender: true,
        },
        {
          id: 2,
          message: "Hi, how are you?",
          time: "2023-10-01T10:01:00Z",
          isSender: false,
        },
      ],
      stories: [
        {
          image: "/profile.jpeg",
          duration: 5000,
          time: "2023-10-01T10:00:00Z",
        },
        {
          image: "/profile.jpeg",
          duration: 5000,
          time: "2023-10-01T10:00:00Z",
        },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      picture: "/profile.jpeg",
      chats: [
        {
          id: 1,
          message: "Hey!",
          time: "2023-10-01T11:00:00Z",
          isSender: true,
        },
        {
          id: 2,
          message: "What's up?",
          time: "2023-10-01T11:01:00Z",
          isSender: false,
        },
      ],
      stories: [
        {
          image: "/profile.jpeg",
          duration: 5000,
          time: "2023-10-01T11:00:00Z",
        },
        {
          image: "/profile.jpeg",
          duration: 5000,
          time: "2023-10-01T11:00:00Z",
        },
      ],
    },
    {
      id: 3,
      name: "Alice Johnson",
      picture: "/profile.jpeg",
      chats: [
        {
          id: 1,
          message: "Hi!",
          time: "2023-10-01T12:00:00Z",
          isSender: true,
        },
        {
          id: 2,
          message: "Hello!",
          time: "2023-10-01T12:01:00Z",
          isSender: false,
        },
      ],
      stories: [
        {
          image: "/profile.jpeg",
          duration: 5000,
          time: "2023-10-01T12:00:00Z",
        },
        {
          image: "/profile.jpeg",
          duration: 5000,
          time: "2023-10-01T12:00:00Z",
        },
      ],
    },
  ];
};
const getProfileData = () => {
  return {
    name: "John Doe",
    picture: "/profile.jpeg",
    about: "Hey there! I am using WhatsApp.",
    phoneNumber: "+1234567890",
  };
};
export { getData, getProfileData };
