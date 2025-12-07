export interface BestResponse {
  message: string;
  data: Data[];
}

export interface Data {
  acc: number;
  consistency: number;
  difficulty: string;
  lazyMode: boolean;
  language: string;
  punctuation: boolean;
  numbers: boolean;
  raw: number;
  wpm: number;
  timestamp: number;
}
