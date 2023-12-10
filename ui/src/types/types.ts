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