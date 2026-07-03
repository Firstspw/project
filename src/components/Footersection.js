export default function Footersection() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-14">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              NextAI
            </h2>

            <p className="text-sm leading-7 text-slate-400">
              ผู้ให้บริการด้าน AI และ Digital Solutions
              พัฒนาเว็บไซต์ แอปพลิเคชัน ระบบอัจฉริยะ
              และโซลูชันสำหรับองค์กร เพื่อขับเคลื่อนธุรกิจสู่อนาคต
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              เมนูหลัก
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-cyan-400 duration-300">
                  หน้าแรก
                </a>
              </li>

              <li>
                <a href="/service" className="hover:text-cyan-400 duration-300">
                  บริการ
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-cyan-400 duration-300">
                  เกี่ยวกับเรา
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-cyan-400 duration-300">
                  ติดต่อเรา
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              ติดต่อเรา
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">
              <li>📍 เชียงใหม่ ประเทศไทย</li>
              <li>📞 +66 81-234-5678</li>
              <li>✉️ contact@nextai.com</li>
            </ul>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="/coming-soon"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 hover:bg-blue-600 duration-300"
              >
                FB
              </a>

              <a
                href="/coming-soon"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 hover:bg-sky-500 duration-300"
              >
                X
              </a>

              <a
                href="/coming-soon"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 hover:bg-pink-600 duration-300"
              >
                IG
              </a>

              <a
                href="/coming-soon"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 hover:bg-blue-700 duration-300"
              >
                IN
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} NextAI. All rights reserved.
          <p className="mt-2">
            Empowering the Future with AI & Digital Innovation
          </p>
        </div>

      </div>
    </footer>
  );
}