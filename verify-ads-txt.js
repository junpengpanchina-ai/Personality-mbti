#!/usr/bin/env node

/**
 * ads.txt 验证脚本
 * 用于验证 ads.txt 文件是否正确部署和可访问
 */

const https = require('https');
const http = require('http');

// 配置
const DOMAIN = process.env.VERCEL_URL || 'your-domain.vercel.app'; // 替换为您的实际域名
const ADS_TXT_URL = `https://${DOMAIN}/ads.txt`;

console.log('🔍 开始验证 ads.txt 文件...\n');

// 验证函数
function verifyAdsTxt(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const req = protocol.get(url, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const result = {
          statusCode: res.statusCode,
          headers: res.headers,
          content: data.trim(),
          url: url
        };
        resolve(result);
      });
    });
    
    req.on('error', (err) => {
      reject(err);
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('请求超时'));
    });
  });
}

// 验证 ads.txt 内容
function validateAdsTxtContent(content) {
  const lines = content.split('\n').filter(line => line.trim());
  const errors = [];
  const warnings = [];
  
  if (lines.length === 0) {
    errors.push('❌ ads.txt 文件为空');
    return { errors, warnings, isValid: false };
  }
  
  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    
    // 跳过注释行
    if (trimmedLine.startsWith('#')) {
      return;
    }
    
    // 检查格式
    const parts = trimmedLine.split(',');
    if (parts.length !== 4) {
      errors.push(`❌ 第 ${index + 1} 行格式错误: ${trimmedLine}`);
      return;
    }
    
    const [domain, publisherId, relationship, certificationAuthorityId] = parts.map(p => p.trim());
    
    // 验证域名
    if (!domain || !domain.includes('.')) {
      errors.push(`❌ 第 ${index + 1} 行域名无效: ${domain}`);
    }
    
    // 验证发布商ID
    if (!publisherId || !publisherId.startsWith('pub-')) {
      errors.push(`❌ 第 ${index + 1} 行发布商ID无效: ${publisherId}`);
    }
    
    // 验证关系类型
    if (!['DIRECT', 'RESELLER'].includes(relationship)) {
      errors.push(`❌ 第 ${index + 1} 行关系类型无效: ${relationship}`);
    }
    
    // 验证认证机构ID
    if (!certificationAuthorityId || certificationAuthorityId.length < 10) {
      warnings.push(`⚠️  第 ${index + 1} 行认证机构ID可能无效: ${certificationAuthorityId}`);
    }
  });
  
  return {
    errors,
    warnings,
    isValid: errors.length === 0,
    lineCount: lines.length
  };
}

// 主验证流程
async function main() {
  try {
    console.log(`📡 正在检查: ${ADS_TXT_URL}`);
    
    const result = await verifyAdsTxt(ADS_TXT_URL);
    
    console.log(`📊 响应状态: ${result.statusCode}`);
    console.log(`📄 Content-Type: ${result.headers['content-type'] || '未设置'}`);
    console.log(`📏 内容长度: ${result.content.length} 字符\n`);
    
    if (result.statusCode !== 200) {
      console.log('❌ ads.txt 文件无法访问');
      console.log(`   状态码: ${result.statusCode}`);
      return;
    }
    
    // 验证内容类型
    const contentType = result.headers['content-type'];
    if (!contentType || !contentType.includes('text/plain')) {
      console.log('⚠️  警告: Content-Type 可能不正确');
      console.log(`   当前类型: ${contentType}`);
      console.log('   建议类型: text/plain\n');
    }
    
    // 显示文件内容
    console.log('📝 ads.txt 文件内容:');
    console.log('─'.repeat(50));
    console.log(result.content);
    console.log('─'.repeat(50));
    console.log();
    
    // 验证内容格式
    const validation = validateAdsTxtContent(result.content);
    
    if (validation.isValid) {
      console.log('✅ ads.txt 文件格式正确');
      console.log(`📊 包含 ${validation.lineCount} 个有效条目`);
    } else {
      console.log('❌ ads.txt 文件格式有误:');
      validation.errors.forEach(error => console.log(`   ${error}`));
    }
    
    if (validation.warnings.length > 0) {
      console.log('\n⚠️  警告:');
      validation.warnings.forEach(warning => console.log(`   ${warning}`));
    }
    
    // 缓存检查
    const cacheControl = result.headers['cache-control'];
    if (cacheControl) {
      console.log(`\n🗄️  缓存设置: ${cacheControl}`);
    }
    
    console.log('\n🎯 验证完成！');
    console.log('\n📋 下一步操作:');
    console.log('1. 如果验证通过，等待 24-48 小时让 Google 抓取');
    console.log('2. 在 AdSense 后台检查 ads.txt 状态');
    console.log('3. 使用第三方工具验证: https://www.ads.txt-validator.com/');
    
  } catch (error) {
    console.log('❌ 验证失败:');
    console.log(`   错误: ${error.message}`);
    console.log('\n🔧 故障排除建议:');
    console.log('1. 检查域名是否正确');
    console.log('2. 确认文件已部署到网站根目录');
    console.log('3. 检查 Vercel 部署状态');
    console.log('4. 尝试手动访问 ads.txt URL');
  }
}

// 运行验证
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { verifyAdsTxt, validateAdsTxtContent };
