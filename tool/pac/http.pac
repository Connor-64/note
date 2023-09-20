function FindProxyForURL(url, host) {
  // 如果 URL 是本地文件，则不使用代理
  if (url.startsWith("file://")) {
    return "DIRECT";
  }

  // 如果 URL 是本地网络，则不使用代理
  if (host.startsWith("192.168.1.")) {
    return "DIRECT";
  }

  // 否则，使用代理
  return "PROXY http://192.168.1.19:10809";
}
