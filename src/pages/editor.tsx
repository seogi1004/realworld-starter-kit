import type { NextPage } from 'next';
import type { PageProps, PostArticle } from '../types';
import React, { useState } from 'react';
import Layout from '../components/Layout';

const Editor: NextPage<PageProps> = ({ user }: PageProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [tagList, setTagList] = useState<Array<string>>([]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(title);
  };

  return (
    <>
      <Layout user={user}>
        <div className="editor-page">
          <div className="container page">
            <div className="row">
              <div className="col-md-10 oofset-md-1 col-x-12">
                <form onSubmit={onSubmit}>
                  <fieldset>
                    <fieldset className="form-group">
                      <input className="form-control form-control-lg" type="text" placeholder="Article Title" onChange={(e) => setTitle(e.target.value)} />
                    </fieldset>

                    <fieldset className="form-group">
                      <input className="form-control" type="text" placeholder="What's this article about?" onChange={(e) => setDescription(e.target.value)} />
                    </fieldset>

                    <fieldset className="form-group">
                      <textarea
                        className="form-control"
                        rows={8}
                        placeholder="Write your article (in markdown)"
                        onChange={(e) => setBody(e.target.value)}
                      ></textarea>
                    </fieldset>

                    <fieldset className="form-group">
                      <input className="form-control" type="text" placeholder="Enter tags" />

                      <div className="tag-list">
                        <span className="tag-default tag-pill">
                          <i className="ion-close-round"></i>
                          test
                        </span>
                      </div>
                    </fieldset>

                    <button className="btn btn-lg pull-xs-right btn-primary" type="submit">
                      Publish Article
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Editor;
