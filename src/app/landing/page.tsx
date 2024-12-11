"use client";

import { usePathname } from 'next/navigation';

const Page = () => {
  const path = usePathname();
  const pageName = path.substring(path.lastIndexOf('/') + 1) || 'index';

  return (
    <div>
      <h1>Hello Next.js!</h1>
      <p>Page name: {pageName}</p>
      <p>Current path: {path}</p>
    </div>
  );
};

export default Page;