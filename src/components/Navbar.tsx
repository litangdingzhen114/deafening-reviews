"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Zap, Mail } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // 👇👇👇 这里设置了 mailto 链接 👇👇👇
  // 点击后会自动唤起邮件客户端，收件人已填好
  const BUSINESS_LINK = "mailto:3467086016@qq.com";

  const navLinks = [
    { name: "首页", href: "/" },
    { name: "影评库", href: "/archive" },
    { name: "关于电影", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-neutral-800 bg-void/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Zap className="w-6 h-6 text-signal group-hover:text-blood transition-colors" />
            <span className="text-xl font-black tracking-tighter text-paper">
              DEAFENING<span className="text-signal">.SOC</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-bold tracking-widest hover:text-signal transition-colors ${
                  pathname === link.href
                    ? "text-signal underline decoration-2 underline-offset-4"
                    : "text-concrete"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* 桌面端：商务联系按钮 */}
            <a
              href={BUSINESS_LINK}
              className="bg-signal text-void px-4 py-1 font-bold text-sm hover:bg-blood hover:text-white transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              商务联系
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-paper">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-void border-b border-neutral-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-xl font-black text-paper hover:text-signal"
                >
                  {link.name}
                </Link>
              ))}

              {/* 移动端：商务联系按钮 */}
              <a
                href={BUSINESS_LINK}
                onClick={() => setIsOpen(false)}
                className="block w-full text-left text-xl font-black text-paper hover:text-signal py-2 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                商务联系
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
