export type Person = {
  id: string;
  name: string;
  message: string;
  reward: number;
  claimed?: boolean;
};

// Data store
export const people: Person[] = [
  {
    id: "john-doe",
    name: "John Doe",
    message: "Thank you for being an amazing friend this year!",
    reward: 200
  },
  {
    id: "jane-smith",
    name: "Jane Smith",
    message: "Your support means the world to me. Merry Christmas!",
    reward: 150
  }
];