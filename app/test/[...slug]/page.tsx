export const dynamicParams = false
export const revalidate = false

export default async function Page({ params }: { params: Promise<{ slug: string[] }> }) {
    const {slug} = await params
    console.log('rendered', slug)

    return <p>Test {slug.join("/")}</p>
}

const params = [
    {
        slug: ['ui', 'mdx']
    },
    {
        slug: ['mdx', 'mdx']
    },
    {
        slug: ['headless', 'mdx']
    },
    {
        slug: ['mdx']
    }
]

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
    const {slug} = await params

    return {
        title: slug.join("/")
    }

}

export function generateStaticParams() {
    console.log('generated', params.length)

    return params
}