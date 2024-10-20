interface Result {
  category: string;
  score: number;
  icon: string;
}


export interface User {
  id: number;
  results: Result[]
}
