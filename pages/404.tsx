import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 1500);
  }, []);

  return (
    <div>
      <h1 className='title-not-found'>Ooops...</h1>
      <h1 className='title-not-found'>
        Halaman yang anda cari tidak di temukan
      </h1>
    </div>
  );
}
