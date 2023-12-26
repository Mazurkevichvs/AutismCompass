export interface NavigationsProps {
    navigations: {
        name: string,
        path: string,
        sublinks?: {
          name: string,
          path: string
        }[] 
    }[]
}
export interface FormDataObject {
  email: string;
  name: string;
  surname: string;
}
export interface EventType {
  id: number,
  name: String,
  type: Number,
  date: Date,
  addressId: Number,
  address: {
    id: Number,
    city: String,
    street: String,
    house: Number,
    apartment: Number,
    link: String
  },
  description: String,
  shortDescription: String
}