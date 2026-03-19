import Image from 'next/image'

export default function SuccessStories() {
  const data = ['Saas1.jpg', 'success2.jpg', 'success3.jpg', 'success4.jpg']

  return (
    <section id="careers" className="p-12">
      <h2 className="text-2xl font-bold mb-6">Success Stories</h2>

      <div className="grid md:grid-cols-4 gap-6">
        {data.map((img, i) => (
          <div key={i} className="group">
            <Image
              src={`/images/${img}`} // 👉 add here
              alt=""
              width={300}
              height={200}
              className="group-hover:scale-105 transition"
            />
            <p className="text-sm mt-2">Story title here</p>
          </div>
        ))}
      </div>
    </section>
  )
}
