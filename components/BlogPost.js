import styles from "../styles/BlogPost.module.css";

export default function BlogPost({
  postLink,
  postTitle,
  tags,
  publishedDate,
  reactionCount,
  commentsCount,
  coverImage,
}) {
  return (
    <footer className={styles.blogpost}>
      <img src={coverImage} width={window.innerWidth * 0.15} />
      <h4>
        <span className="date">{publishedDate} - </span>
        <a href={postLink} target="_blank">
          {postTitle}
        </a>
      </h4>
      <div>
        {tags.map((tag, index) => (
          <a target="_blank" key={index} href={`https://dev.to/t/${tag}`}>
            #{tag}{" "}
          </a>
        ))}
      </div>
      <div>
        <strong>Reactions</strong> - {reactionCount}
      </div>
      <div>
        <strong>Comments</strong> - {commentsCount}
      </div>
    </footer>
  );
}
