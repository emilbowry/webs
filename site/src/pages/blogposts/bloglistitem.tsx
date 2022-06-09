import routes from "./routes";

interface BlogPostItemProps {
    id: number;
    title: string;
    picturelink: string;
    subtitle: string;
    publishDate: number; //seconds from UTC epoch
}

const BlogPostItem: React.FC<BlogPostItemProps> = ({ id }) => {
    return <div>{id}</div>;
};

export default BlogPostItem;
