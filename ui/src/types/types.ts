export interface NavigationsProps {
  navigations: {
    name: string;
    path: string;
  }[];
}
export interface FormDataObject {
  email: string;
  name: string;
  surname: string;
}
export interface EventType {
  id: number;
  name: String;
  type: Number;
  date: Date;
  addressId: Number;
  address: {
    id: Number;
    city: String;
    street: String;
    house: Number;
    apartment: Number;
    link: String;
  };
  description: String;
  shortDescription: String;
  imgLink: string;
}

export interface QuestionType {
  id: number;
  name: string;
  questions: {
    id: number;
    questionText: string;
    quizId: number;
    answers: {
      id: number;
      text: string;
      value: number;
    }[];
  }[];
}

export interface UserResult {
  id: number;
  details: string;
  quizId: number;
  score: number;
  resultTitle: string;
}
