"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// 定义组件接收的参数类型
interface BusinessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BusinessModal({ isOpen, onClose }: BusinessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. 背景遮罩 (点击这里也可以关闭) */}
          {/* 将 z-index 设置得非常高 (z-[100])，确保在所有内容之上 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm 'z-[110]' cursor-pointer"
          />

          {/* 2. 弹窗主体 (居中显示) */}
          {/* z-index 比遮罩更高 (z-[101])，确保内容可见且可交互 */}
          <div className="fixed inset-0 flex items-center justify-center 'z-[120]' pointer-events-none p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              // 这里设置了一个最大宽度和高度，防止图片过大撑爆屏幕，并加了点样式让它更好看
              className="pointer-events-auto relative max-w-3xl max-h-[85vh] bg-void border-2 border-neutral-800 p-1 shadow-2xl"
            >
              {/* 关闭按钮 (绝对定位在右上角，突出显示) */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // 防止点击事件冒泡到背景导致重复触发关闭
                  onClose();
                }}
                className="absolute -top-5 -right-5 bg-signal text-void p-2 rounded-full border-2 border-void hover:bg-blood hover:text-white transition-colors shadow-lg cursor-pointer z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* 图片容器 */}
              {/* 👇👇👇 在这里替换你的图片路径 👇👇👇 */}
              <img
                src="/home/sunmaosun/next-blog/images/299e60dbafe4befcdc16215d44a3e132.jpg" // 例如: "/images/contact-card.png"
                alt="商务联系"
                className="w-full h-full object-contain bg-black/50" // object-contain 保证图片完整显示不变形
              />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
