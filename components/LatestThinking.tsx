import Image from 'next/image'

const data = [
  'Saas1.jpg',
  'thinking2.jpg',
  'thinking3.jpg',
  'thinking4.jpg',
  'thinking5.jpg',
  'thinking6.jpg',
]

export default function LatestThinking() {
  return (
    <section id="insights" className="p-12">
      <h2 className="text-2xl font-bold mb-8">Latest Thinking</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((img, i) => (
          <div key={i} className="relative overflow-hidden group">
            <Image
              src={`/images/${img}`} // 👉 add here
              alt=""
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4 text-white">
              <p>Welcome to SaaScraft</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
