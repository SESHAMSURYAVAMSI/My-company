'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

/* ✅ TYPE */
type CardProps = {
  title: string
  tag: string
  image: string
  className?: string
  link: string
  description?: string
}

export default function LatestThinking() {
  return (
    <section className="bg-[#f5f5f5] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex justify-between mb-14">
          <h2 className="text-4xl font-semibold">Latest Thinking</h2>

          <p className="max-w-md text-gray-600 text-sm">
            Read what we’re thinking. Research that uncovers what’s next.
            Read what we’re thinking. Research that uncovers what’s next.
            Read what we’re thinking. Research that uncovers what’s next.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-3 gap-6 auto-rows-[200px]">

          <Card
            className="row-span-2"
            title="Building the AI-Driven Bank of Tomorrow"
            tag="RESEARCH REPORT | BANKING"
            image="/images/Saas1.jpg"
            link="/insights/bank-ai"
            description="Global banks are operationalizing AI to modernize legacy systems and drive hyperpersonalization."
          />

          <Card
            title="Ushering a New Era of Adaptive Manufacturing"
            tag="RESEARCH REPORT | MANUFACTURING"
            image="/images/Saas1.jpg"
            link="/insights/manufacturing"
            description="Manufacturers are using AI to boost adaptability and sustainability."
          />

          <Card
            title="Demystifying AI in Telecom"
            tag="WHITEPAPER"
            image="/images/Saas1.jpg"
            link="/insights/telecom"
            description="Telecom providers are leveraging AI to optimize networks and improve CX."
          />

          <Card
            title="Driving AI and Sustainability in Product Development"
            tag="WHITEPAPER | ENGINEERING"
            image="/images/Saas1.jpg"
            link="/insights/ai-sustainability"
            description="AI is enabling smarter and more sustainable product lifecycles."
          />

          <Card
            className="row-span-2"
            title="Unlocking Retail Innovation with Store of the Future"
            tag="RESEARCH REPORT | RETAIL"
            image="/images/Saas1.jpg"
            link="/insights/retail"
            description="Retailers are transforming stores into intelligent experience hubs."
          />

          <Card
            title="Enabling Execution Excellence with Next-Gen GCCs"
            tag="BLOG"
            image="/images/Saas1.jpg"
            link="/insights/gcc"
            description="GCCs are evolving into innovation engines for global enterprises."
          />

          <Card
            title="Fortifying Cybersecurity in Enterprise AI"
            tag="BLOG"
            image="/images/Saas1.jpg"
            link="/insights/cybersecurity"
            description="Enterprises must rethink security strategies in the AI-first era."
          />

        </div>
      </div>
    </section>
  )
}


/* 🔥 CARD COMPONENT */
function Card({
  title,
  tag,
  image,
  className,
  link,
  description,
}: CardProps) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(link)}
      className={`relative overflow-hidden rounded-xl cursor-pointer group ${className}`}
    >
      {/* IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition duration-500 group-hover:blur-[3px]"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500" />

      {/* TAG */}
      <div className="absolute top-4 left-4 z-10">
        <p className="text-[10px] tracking-widest text-white bg-black/40 px-2 py-1 rounded">
          {tag}
        </p>
      </div>

      {/* CONTENT */}
      <div className="absolute bottom-0 left-0 w-full p-5 text-white z-10">

        {/* TITLE */}
        <h3 className="text-lg font-semibold leading-snug transition-all duration-500 group-hover:-translate-y-16">
          {title}
        </h3>

        {/* HOVER CONTENT */}
        <div className="absolute left-5 right-5 bottom-5 opacity-0 translate-y-6 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">

          {/* DESCRIPTION */}
          <p className="text-xs mt-2">
            {description}
          </p>

          {/* READ MORE BUTTON */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              router.push(link)
            }}
            className="mt-3 text-sm font-medium"
          >
            Read More →
          </button>

        </div>
      </div>
    </div>
  )
}