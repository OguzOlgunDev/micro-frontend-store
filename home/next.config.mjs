/** @type {import('next').NextConfig} */
const nextConfig = {
  // Prod build sırasında lint hatasına takılmasın
  eslint: { ignoreDuringBuilds: true },
  // Monorepo/ortak paket yoksa gerekmiyor; var ise aç:
  // transpilePackages: ["ui"],
};

export default nextConfig;
