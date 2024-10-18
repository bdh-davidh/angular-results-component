export interface User {
  id: number;
  results: {
    category: string;
    score: number;
    icon: string
  }[]
}
