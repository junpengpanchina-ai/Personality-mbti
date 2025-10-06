import { GetServerSideProps } from 'next';

export default function AdsTxt() {
  return null; // This component will never render
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // 设置正确的 Content-Type
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=3600');
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // 返回 ads.txt 内容
  const adsContent = 'google.com, pub-4198974976257818, DIRECT, f08c47fec0942fa0';
  
  res.write(adsContent);
  res.end();
  
  return { props: {} };
};