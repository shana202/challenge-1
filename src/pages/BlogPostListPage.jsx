import { posts } from '../data/posts';
import styles from './BlogPostListPage.module.css';
import BlogPostItem from '../components/BlogPostItem/BlogPostItem';

const BlogPostListPage = () => {
    if (!posts || posts.length === 0) {
        return (
            <div>
                <div>
                    <h1>Blog Posts</h1>
                </div> 
                <div className={styles.emptyFeed}>
                    <p>No posts to display</p>
                </div>
            </div>
        );
    };
    return (
        <div>
            <div>
                <h1>Blog Posts</h1>
            </div> 
            <div className={styles.blogListing}>
                {posts.map(post => (
                   <BlogPostItem 
                    key={post.id}
                    title={post.title}
                    summary={post.summary}
                    date={post.date}
                    url={post.url}
                   />
                ))};
            
            </div>
        </div>
    );

};



export default BlogPostListPage;