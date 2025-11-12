import Link from 'next/link';
import { getFeaturedCaseStudies } from '@/lib/mdx';

export default function Home() {
  const featuredWork = getFeaturedCaseStudies();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Product Designer & Design Systems Leader
          </h1>
          <p className="mb-8 text-xl text-gray-600">
            10+ years transforming complex challenges into elegant solutions.
            Specialized in design systems, enterprise SaaS, and strategic product leadership.
          </p>
          <div className="flex gap-4">
            <Link
              href="/work"
              className="rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800"
            >
              View My Work
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-900 transition-colors hover:bg-gray-50"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="border-t border-gray-200 bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">Featured Work</h2>
            <p className="text-lg text-gray-600">
              Recent projects with measurable impact
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredWork.map((work) => (
              <Link
                key={work.slug}
                href={`/work/${work.slug}`}
                className="group block rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
                  <div className="flex h-full items-center justify-center text-gray-400">
                    {work.frontmatter.company}
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                  {work.frontmatter.company}
                </h3>

                <p className="mb-4 text-sm text-gray-600">
                  {work.frontmatter.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {work.frontmatter.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-blue-600"
            >
              View all case studies
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Hi, I'm Nicolás
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  I'm a Product Designer with 10+ years of experience transforming complex challenges
                  into elegant, user-centered solutions. My work spans design systems, enterprise SaaS
                  platforms, and strategic product leadership.
                </p>
                <p>
                  I specialize in building design systems that scale, leading cross-functional teams,
                  and delivering measurable business impact through thoughtful design.
                </p>
                <p>
                  Currently based in Bogotá, Colombia, working remotely with teams around the world.
                </p>
              </div>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center text-sm font-medium text-gray-900 hover:text-blue-600"
              >
                More about me
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            <div className="flex items-center justify-center">
              <div className="aspect-square w-full max-w-md rounded-lg bg-gray-200">
                <div className="flex h-full items-center justify-center text-gray-400">
                  Headshot Photo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-200 bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Let's work together
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            I'm available for freelance projects, consulting, and full-time opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex rounded-lg bg-gray-900 px-8 py-4 font-medium text-white transition-colors hover:bg-gray-800"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
