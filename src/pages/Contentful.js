import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import ReactMarkdown from "react-markdown";
import "./Contentful.scss";

const client = createClient({
  space: "min1s6zlj815",
  accessToken: "romx301L0RTIp4GVgtC3qIVRGTKL6FP2NSbCevfUtmk"
});

const TestContentful = () => {
  const [posts, setPosts] = useState([]);

  async function fetchContentTypes() {
    const types = await client.getContentTypes();
    if (types.items) return types.items;
    console.log("Error getting Content Types.");
  }

  async function fetchEntriesForContentType(contentType) {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  useEffect(() => {
    async function getPosts() {
      const contentTypes = await fetchContentTypes();
      const allPosts = await fetchEntriesForContentType(contentTypes[0]);
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

  return (
    <React.Fragment>
      {posts.map(post => (
        <div key={post.sys.id} className="contentful-wrapper">
          <h1>{post.fields.title}</h1>
          <h5>{post.fields.description}</h5>
          <ReactMarkdown source={post.fields.project} />
        </div>
      ))}
    </React.Fragment>
  );
};

export default TestContentful;
