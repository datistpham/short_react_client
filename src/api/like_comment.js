import { gql } from "@apollo/client"

const LikeCommentGraph= gql`
mutation LikeComment($id_token: String!,$comment_liked: String ) {
    like_comment(id_token: $id_token, comment_liked: $comment_liked) {
        id_token
        comment_liked
    }
}
`

export { LikeCommentGraph }