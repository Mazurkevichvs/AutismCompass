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

export interface EventType {
  id: Number,
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