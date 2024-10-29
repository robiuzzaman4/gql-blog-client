import { Card, Avatar } from "@radix-ui/themes";
import { Post } from "../types";

type BlogPostCardProps = {
  post: Post;
};

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  return (
    <div>
      <Card className="space-y-3" size="3">
        <h3 className="capitalize text-lg font-semibold">{post?.title}</h3>
        <p className="text-base">{post?.title}</p>
        <div className="w-full flex items-center gap-2">
          <Avatar fallback={post?.author?.name?.slice(0, 1)} radius="full" />
          <span>
            <p className="text-sm text-gray-a11">{post?.author?.name}</p>
            <p className="text-sm text-gray-a11">{post?.author?.email}</p>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default BlogPostCard;
