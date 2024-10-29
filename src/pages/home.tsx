import { gql, useQuery } from "@apollo/client";

const POSTS = gql`
  query posts {
    posts {
      id
      title
      content
      published
      createdAt
      author {
        id
        name
        email
      }
    }
  }
`;

const HomePage = () => {
  const { loading, error, data } = useQuery(POSTS);

  const posts = data.posts;
  console.log("posts", posts);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error?.message}</p>;

  return (
    <section className="py-14 w-full max-w-screen-lg mx-auto px-4">
      {posts && posts?.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.map((post) => (
            <div key={post?.id}>{post?.title}</div>
          ))}
        </div>
      ) : (
        <div>
          <p>No posts found.</p>
        </div>
      )}
    </section>
  );
};

export default HomePage;
