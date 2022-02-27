import { gql } from "@apollo/client"

const loadmorevideo= gql`
    query loadmorevideo {
        videorand1 {
            id_video
            source
            title
            tag 
            author_name
            author_avatar
            number_of_like
            number_of_dislike
            comment
            number_of_comment
            number_of_view     
            imagesnapshot
        }
    }
`

export { loadmorevideo }