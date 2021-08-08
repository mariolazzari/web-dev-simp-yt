import { useState, useEffect } from "react";

const Resources = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const onResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => console.log(json));
  }, [resourceType]);

  useEffect(() => {
    window.addEventListener("resize", onResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <h1>useEffect</h1>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Userss</button>{" "}
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      <h2>{`Window width: ${windowWidth}`}</h2>
    </>
  );
};

export default Resources;
