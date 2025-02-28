'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
const RedirectPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    window.open(searchParams.get('url') as string, '_blank');
  });
  router.push('/');
  return (
    <div style={{ background: '#222222', width: '100vw', height: '100vh' }}>
      Redirecting...
    </div>
  );
};

export default RedirectPage;
