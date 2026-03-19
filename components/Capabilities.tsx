import Image from 'next/image'

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="bg-red-900 text-white grid md:grid-cols-2 p-16"
    >
      <div>
        <h2 className="text-2xl font-bold mb-6">Capabilities</h2>

        <ul className="space-y-3">
          {[
            'Artificial Intelligence',
            'Cloud and Infrastructure',
            'Digital Enterprise',
            'Engineering Services',
            'Consulting',
          ].map((item) => (
            <li key={item} className="hover:text-red-300 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* 👉 /public/images/capability.jpg */}
      <Image
        src="/images/Saas1.jpg"
        alt=""
        width={400}
        height={400}
        className="mx-auto"
      />
    </section>
  )
}
