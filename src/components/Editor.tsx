import React from 'react';

type Props = {
  loading: boolean;
  title: string;
  description: string;
  body: string;
  tagList: Array<string>;
  setTitle: Function;
  setDescription: Function;
  setBody: Function;
  onAddTag: Function;
  onDeleteTag: Function;
  onSubmit: Function;
};

const Editor = ({ loading, title, description, body, tagList, setTitle, setDescription, setBody, onAddTag, onDeleteTag, onSubmit }: Props) => {
  return (
    <div className="row">
      <div className="col-md-10 oofset-md-1 col-x-12">
        <fieldset>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg"
              type="text"
              placeholder="Article Title"
              disabled={loading}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="What's this article about?"
              disabled={loading}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </fieldset>

          <fieldset className="form-group">
            <textarea
              className="form-control"
              rows={8}
              placeholder="Write your article (in markdown)"
              disabled={loading}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></textarea>
          </fieldset>

          <fieldset className="form-group">
            <input className="form-control" type="text" placeholder="Enter tags" disabled={loading} onKeyPress={(e) => onAddTag(e)} />

            <div className="tag-list">
              {tagList.map((tag) => {
                return (
                  <span key={tag} className="tag-default tag-pill">
                    <i className="ion-close-round" onClick={(e) => onDeleteTag(e, tag)}></i>
                    {tag}
                  </span>
                );
              })}
            </div>
          </fieldset>

          <button className="btn btn-lg pull-xs-right btn-primary" type="button" disabled={loading} onClick={(e) => onSubmit(e)}>
            Publish Article
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default Editor;
