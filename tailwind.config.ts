import type { Config } from "tailwindcss";

const config: Config = {
  // 重点修正：这里所有的路径都加上了 ./src/
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'void': '#050505',      // 极致黑
        'void-light': '#1a1a1a', // 辅助黑
        'signal': '#ECEE00',    // 警示黄 (你缺失的那个颜色)
        'blood': '#FF2A2A',     // 鲜血红
        'concrete': '#888888',  // 水泥灰
        'paper': '#f0f0f0',     // 纸张白
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
export default config;
