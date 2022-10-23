import React, { useEffect } from 'react';
import { PageProps } from 'types/types';

export default function NotFoundPage(props: PageProps) {
  useEffect(() => {
    document.title = props.title ?? '';
  });

  return (
    <div className="not-found">
      <div className="not-found__text">Page not found</div>
    </div>
  );
}
