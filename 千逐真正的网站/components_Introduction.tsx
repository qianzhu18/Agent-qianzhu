import Image from 'next/image'

const Introduction = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-2/5">
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/14a86190bbde9353d6a68685f2db1d8.jpg-wsd1Eq16dAvm8VmuT4e9RFVItwFduK.jpeg"
                alt="千逐"
                layout="fill"
                className="rounded-full shadow-lg object-cover hover-scroll"
              />
            </div>
          </div>
          <div className="md:w-3/5">
            <h2 className="text-4xl font-bold mb-6 text-glow">About Me</h2>
            <p className="text-xl leading-relaxed text-gray-300 hover-scroll">
              我是千逐，长沙大一计科生，性格热情主动，擅长表达沟通与交流，喜欢深度思考，热衷于体验AI科技解决现有问题。
            </p>
            <p className="text-xl mt-4 text-blue-400 hover-scroll">
              欢迎找我沟通与交流！
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction

