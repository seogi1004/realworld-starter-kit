import React, { useState, useEffect } from 'react';
import { HOST } from '../constants';

const Tags = () => {
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState<Array<string>>([]);

  useEffect(() => {
    setLoading(true);

    fetch(`${HOST}/api/tags`)
      .then(async (res: any) => {
        const { tags } = await res.json();
        setTags(tags);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="sidebar">
      <p>Popular Tags</p>
      {loading ? (
        <div>Loading tags...</div>
      ) : tags.length > 0 ? (
        <div className="tag-list">
          {tags.map((tag) => (
            <a key={tag} className="tag-default tag-pill">
              {tag}
            </a>
          ))}
        </div>
      ) : (
        <div className="post-preview">No tags are here... yet.</div>
      )}
    </div>
  );
};

export default Tags;
