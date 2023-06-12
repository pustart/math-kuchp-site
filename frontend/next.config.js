/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    loader: 'default',
    domains: ['localhost', 'math.vsu.ru', 'www.kuchp.ru', 'backend'],
  },
  // Разрешенные типы файлов
  async headers() {
    return [
      {
        source: "/(.*)", // Регулярное выражение для всех маршрутов
        headers: [
          {
            key: "Content-Disposition",
            value: "attachment", // Заголовок для скачивания файла
          },
          {
            key: "Access-Control-Expose-Headers",
            value: "Content-Disposition", // Разрешение доступа к заголовку
          },
        ],
      },
      {
        source: "/:path*", // Регулярное выражение для соответствующих расширений
        headers: [
          {
            key: "Content-Disposition",
            value: "inline", // Заголовок для просмотра файла
          },
          {
            key: "Access-Control-Expose-Headers",
            value: "Content-Disposition", // Разрешение доступа к заголовку
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
