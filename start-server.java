import java.io.*;
import java.net.*;
import java.nio.file.*;
import java.util.*;

public class StartServer {
    private static final int PORT = 8080;
    private static final String ROOT_DIR = ".";
    
    public static void main(String[] args) {
        try {
            ServerSocket serverSocket = new ServerSocket(PORT);
            System.out.println("🚀 Java HTTP服务器启动成功！");
            System.out.println("📍 访问地址: http://localhost:" + PORT);
            System.out.println("📁 根目录: " + new File(ROOT_DIR).getAbsolutePath());
            System.out.println("⏹️  按 Ctrl+C 停止服务器");
            System.out.println();
            
            while (true) {
                Socket clientSocket = serverSocket.accept();
                new Thread(new ClientHandler(clientSocket)).start();
            }
        } catch (IOException e) {
            System.err.println("❌ 服务器启动失败: " + e.getMessage());
        }
    }
    
    static class ClientHandler implements Runnable {
        private Socket clientSocket;
        
        public ClientHandler(Socket socket) {
            this.clientSocket = socket;
        }
        
        public void run() {
            try (BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
                 PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true)) {
                
                String requestLine = in.readLine();
                if (requestLine == null) return;
                
                String[] requestParts = requestLine.split(" ");
                if (requestParts.length < 2) return;
                
                String method = requestParts[0];
                String path = requestParts[1];
                
                if ("GET".equals(method)) {
                    handleGetRequest(path, out);
                }
                
            } catch (IOException e) {
                System.err.println("❌ 处理客户端请求失败: " + e.getMessage());
            } finally {
                try {
                    clientSocket.close();
                } catch (IOException e) {
                    System.err.println("❌ 关闭客户端连接失败: " + e.getMessage());
                }
            }
        }
        
        private void handleGetRequest(String path, PrintWriter out) throws IOException {
            if ("/".equals(path)) {
                path = "/index.html";
            }
            
            File file = new File(ROOT_DIR + path);
            
            if (file.exists() && file.isFile()) {
                String contentType = getContentType(path);
                byte[] content = Files.readAllBytes(file.toPath());
                
                out.println("HTTP/1.1 200 OK");
                out.println("Content-Type: " + contentType);
                out.println("Content-Length: " + content.length);
                out.println("Access-Control-Allow-Origin: *");
                out.println();
                out.flush();
                
                clientSocket.getOutputStream().write(content);
                clientSocket.getOutputStream().flush();
                
                System.out.println("✅ 200 " + path + " (" + content.length + " bytes)");
            } else {
                out.println("HTTP/1.1 404 Not Found");
                out.println("Content-Type: text/plain");
                out.println();
                out.println("404 - 文件未找到: " + path);
                
                System.out.println("❌ 404 " + path);
            }
        }
        
        private String getContentType(String path) {
            if (path.endsWith(".html")) return "text/html; charset=UTF-8";
            if (path.endsWith(".js")) return "application/javascript; charset=UTF-8";
            if (path.endsWith(".css")) return "text/css; charset=UTF-8";
            if (path.endsWith(".json")) return "application/json; charset=UTF-8";
            if (path.endsWith(".txt")) return "text/plain; charset=UTF-8";
            if (path.endsWith(".md")) return "text/markdown; charset=UTF-8";
            return "text/plain; charset=UTF-8";
        }
    }
}
