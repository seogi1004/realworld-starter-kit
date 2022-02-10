import type { NextPage } from 'next';
import type { PageProps, PostArticleWrapper, GetArticleWrapper } from '../types';
import React, { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/Layout';

const Editor: NextPage<PageProps> = ({ user }: PageProps) => {
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
            <div className="row">
              <div className="col-md-10 oofset-md-1 col-x-12">
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Article Title"
                      disabled={loading}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="What's this article about?"
                      disabled={loading}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </fieldset>

                  <fieldset className="form-group">
                    <textarea
                      className="form-control"
                      rows={8}
                      placeholder="Write your article (in markdown)"
                      disabled={loading}
                      onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                  </fieldset>

                  <fieldset className="form-group">
                    <input className="form-control" type="text" placeholder="Enter tags" disabled={loading} onKeyPress={onAddTag} />

                    <div className="tag-list">
                      {tagList.map((tag) => {
                        return (
                          <span className="tag-default tag-pill">
                            <i className="ion-close-round" onClick={(e) => onDeleteTag(e, tag)}></i>
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </fieldset>

                  <button className="btn btn-lg pull-xs-right btn-primary" type="button" disabled={loading} onClick={onSubmit}>
                    Publish Article
                  </button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Editor;
