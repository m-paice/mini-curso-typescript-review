interface UserInterface {
  id: string;
  name: string;
  username: string;
}

const User: UserInterface[] = [
  {
    id: Math.floor(Math.random() * 9999).toString(),
    name: "Matheus",
    username: "paice"
  }
];

export default User;
