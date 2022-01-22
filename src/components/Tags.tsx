import React from 'react'

const Tags = () => {
    return (
        <div className="sidebar">
          <p>Popular Tags</p>
          <div className="tag-list" ng-show="$ctrl.tags">
            <a className="tag-default tag-pill">welcome</a>
          </div>
          <div>
            Loading tags...
          </div>
          <div className="post-preview">
            No tags are here... yet.
          </div>
        </div>
    )
}

export default Tags;