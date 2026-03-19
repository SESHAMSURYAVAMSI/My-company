export default function Industries() {
  return (
    <section id="industries" className="p-12 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Expertise Across Industries</h2>

      <div className="grid md:grid-cols-5 gap-4">
        {['Healthcare', 'Hi-Tech', 'Insurance', 'Manufacturing', 'Media'].map(
          (item, i) => (
            <div
              key={i}
              className="bg-white p-6 text-center shadow hover:shadow-lg transition"
            >
              {item}
            </div>
          ),
        )}
      </div>
    </section>
  )
}
