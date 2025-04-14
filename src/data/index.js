const getData = () => {
  return [
    {
      id: 1,
      name: "John Doe",
      picture: "",
      chats: [
        {
          id: 1,
          message: "Hello",
          time: "2023-10-01T10:00:00Z",
          sender: true,
        },
        {
          id: 2,
          message: "Hi, how are you?",
          time: "2023-10-01T10:01:00Z",
          sender: false,
        },
      ],
    },
  ];
};

export default getData;
