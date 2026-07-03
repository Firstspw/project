import Link from 'next/link'

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-3xl rounded-3xl border border-white/10 bg-slate-900/90 p-10 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center justify-center rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-200">
            🚧 กำลังพัฒนา
          </span>
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            หน้านี้ยังไม่มีการใช้งาน
          </h1>
          <p className="mt-4 text-slate-300 sm:text-lg">
            ขณะนี้หน้าที่คุณเลือกกำลังอยู่ในขั้นตอนพัฒนา โปรดลองกลับมาใหม่อีกครั้งในภายหลัง
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-cyan-500 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-500/20"
          >
            กลับสู่หน้าแรก
          </Link>
          <Link
            href="/service"
            className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-800 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-700"
          >
            ดูบริการอื่น ๆ
          </Link>
        </div>
      </div>
    </main>
  )
}
