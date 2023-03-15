import React from 'react';
import style from '../styles/modules/title.module.scss'

function PageTitle({ children , ...rest}) {
  return (
    <div>
      <p className={style.title}{...rest}>{children}</p>
    </div>
  );
}

export default PageTitle;
