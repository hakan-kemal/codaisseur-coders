import React, { Fragment } from 'react';

export default function Developer(props) {
  const developers = props.developers;
  // console.log('Developer component:', developers.rows);
  return (
    <div>
      {developers.map((developer, index) => (
        <Fragment key={index}>
          <h4>{developer.name}</h4>
          <p>
            <em>{developer.email}</em>
          </p>
        </Fragment>
      ))}
    </div>
  );
}
