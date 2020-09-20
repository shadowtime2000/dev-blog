import styles from '../styles/BlogPost.module.css'

import { Link } from '@material-ui/core'

export default function BlogPost({ postLink, postTitle }) {
    return (
        <footer className={styles.blogpost}>
            <h4>{postTitle}</h4>
            <Link href={postLink} color="primary">DEV Post</Link>
        </footer>
    )
}