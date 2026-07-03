import Image from 'next/image'
import Link from 'next/link'

export default function Cardsection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">
            บริการด้าน AI และ IT Solutions
          </h2>
          <p className="mt-3 text-slate-600">
            โซลูชันเทคโนโลยีสมัยใหม่ เพื่อยกระดับธุรกิจของคุณ
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-56">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                alt="AI Chatbot"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800">
                AI Chatbot
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                พัฒนา Chatbot อัจฉริยะ รองรับงานบริการลูกค้าและระบบตอบคำถามอัตโนมัติ
              </p>

              <Link
                href="/coming-soon"
                className="mt-5 inline-flex rounded-xl bg-cyan-600 px-5 py-2 text-white transition hover:scale-[1.01] hover:bg-cyan-700"
              >
                ดูรายละเอียด
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-56">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                alt="Web Application"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Web Application
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                พัฒนาเว็บไซต์และระบบจัดการข้อมูลด้วย Next.js และเทคโนโลยีสมัยใหม่
              </p>

              <Link
                href="/coming-soon"
                className="mt-5 inline-flex rounded-xl bg-cyan-600 px-5 py-2 text-white transition hover:scale-[1.01] hover:bg-cyan-700"
              >
                ดูรายละเอียด
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl">
            <div className="relative h-56">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                alt="Cloud & Data Analytics"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-800">
                Cloud & Data Analytics
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                วิเคราะห์ข้อมูลและจัดการระบบ Cloud เพื่อเพิ่มประสิทธิภาพการทำงาน
              </p>

              <Link
                href="/coming-soon"
                className="mt-5 inline-flex rounded-xl bg-cyan-600 px-5 py-2 text-white transition hover:scale-[1.01] hover:bg-cyan-700"
              >
                ดูรายละเอียด
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}