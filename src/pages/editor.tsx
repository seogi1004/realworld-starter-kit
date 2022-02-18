import type { NextPage } from 'next';
import type { PageProps, PostArticleWrapper, GetArticleWrapper, GetArticle } from '../types';
import React, { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/Layout';
import Editor from '../components/Editor';

const EditorPage: NextPage<PageProps> = ({ user }: PageProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [tagList, setTagList] = useState<Array<string>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    const payload: PostArticleWrapper = {
      article: {
        title,
        description,
        body,
        tagList,
      },
    };

    const res = await fetch('/api/articles', {
      method: 'POST',
      body: JSON.stringify(payload),
    });

    if (res.status === 200) {
      const data: GetArticleWrapper = await res.json();
      Router.push({ pathname: `/article/${data.article.slug}` });
    }

    setLoading(false);
  };

  const onAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const value = e.currentTarget.value;
      if (!tagList.includes(value)) setTagList([...tagList, value]);
      e.currentTarget.value = '';
    }
  };

  const onDeleteTag = (e: React.MouseEvent<HTMLElement>, t: string) => {
    setTagList(tagList.filter((tag) => tag !== t));
  };

  return (
    <>
      <Layout user={user}>
        <div className="editor-page">
          <div className="container page">
            <Editor
              loading={loading}
              title={title}
              description={description}
              body={body}
              tagList={tagList}
              setTitle={setTitle}
              setDescription={setDescription}
              setBody={setBody}
              onAddTag={onAddTag}
              onDeleteTag={onDeleteTag}
              onSubmit={onSubmit}
            ></Editor>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default EditorPage;
