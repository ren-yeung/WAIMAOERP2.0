const LOOPBACK_HOSTS = new Set(["127.0.0.1", "::1"]);

export function resolveBackendHost(env: NodeJS.ProcessEnv = process.env) {
  const host = (env.BACKEND_HOST || "127.0.0.1").trim();
  if (!host) throw new Error("BACKEND_HOST 不能为空");
  // 允许 BACKEND_HOST_ALLOW_PUBLIC=1 在生产模式放开非回环监听（Docker 反代场景需要 0.0.0.0）
  if (env.NODE_ENV === "production" && !LOOPBACK_HOSTS.has(host) && env.BACKEND_HOST_ALLOW_PUBLIC !== "1") {
    throw new Error("生产环境后端默认只能监听回环地址，请使用 127.0.0.1 或 ::1；如需绑定 0.0.0.0（例如 Docker 容器反代），请设置 BACKEND_HOST_ALLOW_PUBLIC=1");
  }
  return host;
}
