import React from 'react';

export type PageProps = {
  title?: string;
  openModal?: (content: React.ReactNode) => void;
};
