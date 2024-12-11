import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();
  const path = router.pathname;
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