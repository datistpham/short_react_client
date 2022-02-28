import { gql } from "@apollo/client"

const UndoLikeComment= gql`
    mutation UndoLikeComment($id_token: String!,$comment_liked: String ) {
        undolike_comment(id_token: $id_token, comment_liked: $comment_liked) {
            id_token
            comment_liked
        }
    }
`

export { UndoLikeComment }