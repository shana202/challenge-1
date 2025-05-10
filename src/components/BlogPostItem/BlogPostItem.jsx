
import styles from './BlogPostItem.module.css';

/**
 * BlogPostItem component 
 * 
 * @param {string} props.title - The post title
 * @param {string} props.summary - A brief summary of the post
 * @param {string} props.date - The date the post was published
 * @param {string} props.url - The URL to the full post
 */
 
const BlogPostItem = ({ 
  title, 
  summary, 
  date, 
  url
}) => {
    return (
        <div className={styles.postItem}>
            <h2 className={styles.postTitle}>{title}</h2>
            <p className={styles.postSummary}>{summary}</p>
            <p className={styles.postDate}>{new Date(date).toLocaleDateString()}</p>
            <a className={styles.readMore} href={url}>Read more</a>
        </div>
    );
};



export default BlogPostItem;