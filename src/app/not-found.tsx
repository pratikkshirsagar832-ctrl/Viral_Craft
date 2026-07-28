'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-8xl font-bold text-[#F4795A] mb-4">404</div>
          <h1 className="text-2xl font-bold text-[#1A1A1A] mb-2">Page Not Found</h1>
          <p className="text-sm text-[#6B6B65] mb-8 max-w-sm mx-auto">
            Looks like this page went viral in the wrong direction. Let's get you back on track.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-[#F4795A] hover:bg-[#E5623F] transition-all duration-200 hover:scale-[1.03]"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}