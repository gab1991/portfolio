import React, { useLayoutEffect } from 'react';
import { navigate } from 'gatsby';

export default function ErrorPage() {
  useLayoutEffect(() => {
    navigate('/');
  }, []);

  return <div />;
}
