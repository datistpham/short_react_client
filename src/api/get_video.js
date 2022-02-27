import { gql } from "@apollo/client"

const GET_VIDEO= gql`
query Video($idVideo: String!) {
    video(id_video: $idVideo) {
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
export { GET_VIDEO }