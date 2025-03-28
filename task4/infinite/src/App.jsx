import { useState, useEffect } from "react";

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMoreContent = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const data = await response.json();
      console.log(data)
      setPosts((prevPosts) => [...prevPosts, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error loading content:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 100
    ) {
      loadMoreContent();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  useEffect(() => {
    loadMoreContent();
  }, []);

  return (
    <div>
      <h2 className="p-2 text-xl text-center">Infinite Scrolling Content</h2>
      <div>
        <div className="content flex flex-col gap-4 justify-center items-center">
          {posts.map((post,i) => (
            <div
              key={i}
              className="post w-3/4 bg-red-200 rounded-md p-1 m-4"
            >
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
        {loading && <p>Loading more content...</p>}
      </div>
    </div>
  );
};

export default InfiniteScroll;
