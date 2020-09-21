import styles from '../styles/BlogPost.module.css'

export default function BlogPost({ postLink, postTitle, tags }) {
    return (
        <footer className={styles.blogpost}>
            <h4><a href={postLink} target="_blank">{postTitle}</a></h4>
            <div>{tags.map((tag, index) => <a target="_blank" key={index} href={`https://dev.to/t/${tag}`}>{tag} </a>)}</div>
        </footer>
    )
}