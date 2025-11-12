import Link from 'next/link';
import { getCaseStudies } from '@/lib/mdx';
import { generatePageMetadata } from '@/lib/seo';
import { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
  title: 'Work',
  description: 'Case studies showcasing 10+ years of product design leadership, design systems, and strategic transformation work.',
  keywords: ['product design portfolio', 'case studies', 'design leadership', 'design systems'],
});

export default function WorkPage() {
  const caseStudies = getCaseStudies();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mb-16">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Work
        </h1>
        <p className="max-w-2xl text-xl text-gray-600">
          Case studies showcasing design systems, product leadership, and strategic transformation
          work across enterprise SaaS platforms.
        </p>
      </header>

      {/* Case Studies Grid */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((caseStudy) => (
          <Link
            key={caseStudy.slug}
            href={`/work/${caseStudy.slug}`}
            className="group block"
          >
            <article className="flex flex-col">
              {/* Thumbnail */}
              <div className="mb-4 aspect-video w-full overflow-hidden rounded-lg bg-gray-200">
                <div className="flex h-full items-center justify-center text-gray-400 transition-transform group-hover:scale-105">
                  {caseStudy.frontmatter.company}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col">
                {caseStudy.frontmatter.featured && (
                  <span className="mb-2 inline-flex w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                    Featured
                  </span>
                )}

                <h2 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                  {caseStudy.frontmatter.company}
                </h2>

                <p className="mb-4 flex-1 text-sm text-gray-600">
                  {caseStudy.frontmatter.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {caseStudy.frontmatter.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-sm text-gray-500">
                  {caseStudy.frontmatter.year} · {caseStudy.frontmatter.duration}
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {caseStudies.length === 0 && (
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="text-center">
            <p className="text-gray-600">No case studies yet. Check back soon!</p>
          </div>
        </div>
      )}
    </div>
  );
}
