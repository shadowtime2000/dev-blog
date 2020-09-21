import styles from '../styles/BlogPost.module.css'

export default function BlogPost({ postLink, postTitle, tags }) {
    return (
        <footer className={styles.blogpost}>
            <h4><a href={postLink} target="_blank">{postTitle}</a></h4>
            <div>{tags}</div>
        </footer>
    )
}