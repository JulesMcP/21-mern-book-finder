import { gql } from "@apollo/client";

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            bookcount
            savedBooks {
                bookId
                authors
                description
                image
                link
                title
            }
        }
    }
`;