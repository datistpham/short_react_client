import { gql } from "@apollo/client"

const GetUser= gql`
    query GetUser ($id_token: String!) {
        user(id_token: $id_token) {
            comment_liked,
            video_liked
        }
    }
`

export { GetUser }