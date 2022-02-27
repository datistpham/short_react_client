import { gql } from "@apollo/client"

const INCREMENT_LIKE= gql`
    mutation INCREMENT_LIKE1($numberOfLike: Int! , $idVideo: String!) {
        increment_like(number_of_like: $numberOfLike, id_video: $idVideo) {
            number_of_like
    }
}
`
const DECREMENT_LIKE= gql`
    mutation DECREMENT_LIKE1($numberOfDislike: Int!, $idVideo: String!) {
        decrement_like(number_of_dislike: $numberOfDislike, id_video: $idVideo) {
            number_of_dislike
        }
    }
`


export { INCREMENT_LIKE, DECREMENT_LIKE }