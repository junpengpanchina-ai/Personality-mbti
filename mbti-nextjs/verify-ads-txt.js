const https = require('https');
const http = require('http');

// 验证 ads.txt 文件的可访问性
async function verifyAdsTxt(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    const req = client.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          content: data.trim(),
          success: res.statusCode === 200
        });
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

// 测试多个 URL
async function testAdsTxt() {
  const urls = [
    'https://mbti-nextjs-7gfzh9905-junpen.vercel.app/ads.txt',
    'https://mbti-nextjs-7gfzh9905-junpen.vercel.app/api/ads.txt'
  ];
  
  console.log('🔍 验证 ads.txt 文件可访问性...\n');
  
  for (const url of urls) {
    try {
      console.log(`测试: ${url}`);
      const result = await verifyAdsTxt(url);
      
      if (result.success) {
        console.log(`✅ 状态: ${result.status}`);
        console.log(`📄 内容: ${result.content}`);
        console.log(`📋 Content-Type: ${result.headers['content-type']}`);
        console.log(`⏰ Cache-Control: ${result.headers['cache-control']}`);
        console.log(`🌐 CORS: ${result.headers['access-control-allow-origin']}`);
      } else {
        console.log(`❌ 状态: ${result.status}`);
        console.log(`📄 内容: ${result.content}`);
      }
    } catch (error) {
      console.log(`❌ 错误: ${error.message}`);
    }
    
    console.log('---\n');
  }
}

// 运行测试
testAdsTxt().catch(console.error);
