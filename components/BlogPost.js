import styles from "../styles/BlogPost.module.css";

export default function BlogPost({
  postLink,
  postTitle,
  tags,
  reactionCount,
  commentsCount,
  coverImage,
  views,
}) {
  return (
    <footer className={styles.blogpost}>
      {coverImage != undefined ? (
        <img src={coverImage} alt={`The cover image for ${postTitle}`} />
      ) : undefined}
      <h4>
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
      <div>
        <strong>Views</strong> - {views}
      </div>
    </footer>
  );
}
