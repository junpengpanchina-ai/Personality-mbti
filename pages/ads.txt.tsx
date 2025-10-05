import { NextPageContext } from 'next';

function AdsTxt() {
  return null;
}

AdsTxt.getInitialProps = ({ res }: NextPageContext) => {
  if (res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.write('google.com, pub-4198974976257818, DIRECT, f08c47fec0942fa0');
    res.end();
  }
  return {};
};

export default AdsTxt;
