import Footer from "./components/footer";
import Navbar from "./components/navbar";
import clariTea from "./assets/clari-tea.JPG";
import easiTea from "./assets/easi-tea.JPG";
import stabiliTea from "./assets/stabili-tea.JPG";
import tranquiliTea from "./assets/tranquili-tea.JPG";
import uniTea from "./assets/uni-tea.JPG";
import brandImage from "./assets/brand-logo.JPG";

const products = [
    {
        name: "Clari-tea",
        benefit: "For alertness and focus",
        description: "A bright blend for prioritising, organising, and finding your flow.",
        image: clariTea,
        tone: "bg-lime-100",
    },
    {
        name: "Easi-tea",
        benefit: "For aches and pains",
        description: "A comforting cup for listening to your body and giving it care.",
        image: easiTea,
        tone: "bg-orange-100",
    },
    {
        name: "Stabili-tea",
        benefit: "For overwhelm and anxiety",
        description: "A grounding blend for coming back to your body and the present moment.",
        image: stabiliTea,
        tone: "bg-rose-100",
    },
    {
        name: "Tranquili-tea",
        benefit: "For relaxation and sleep",
        description: "A gentle evening blend to help you rest, reset, and soften the day.",
        image: tranquiliTea,
        tone: "bg-cyan-100",
    },
    {
        name: "Uni-tea",
        benefit: "For changing seasons",
        description: "A nourishing blend for moving through change with patience and care.",
        image: uniTea,
        tone: "bg-purple-100",
    },
];

function Products() {
    return (
        <>
            <Navbar />
            <main className="bg-stone-50 text-slate-900">
                <section className="max-w-7xl mx-auto px-4 py-16 md:px-8 md:py-24 grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                            The Positivi-Tea collection
                        </p>
                        <h1 className="mt-4 max-w-2xl text-5xl font-semibold tracking-tight text-slate-900 md:text-7xl">
                            A blend for every kind of day.
                        </h1>
                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                            Thoughtful herbal blends for focus, comfort, calm, and everything in between.
                            Choose the cup that meets you where you are.
                        </p>
                    </div>
                    <div className="overflow-hidden rounded-sm bg-white shadow-sm">
                        <img
                            src={brandImage}
                            alt="A colourful loose-leaf tea blend"
                            className="h-80 w-full object-cover md:h-112"
                        />
                    </div>
                </section>

                <section id="shop" className="mx-auto max-w-7xl px-4 pb-20 md:px-8 md:pb-28">
                    <div className="mb-8 flex items-end justify-between gap-6 border-b border-slate-200 pb-5">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                                Find your feeling
                            </p>
                            <h2 className="mt-2 text-3xl font-semibold tracking-tight">Explore the blends</h2>
                        </div>
                        <span className="hidden text-sm text-slate-500 sm:block">Five intentional infusions</span>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <article key={product.name} className="group overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-slate-200">
                                <div className={`${product.tone} aspect-[4/3] overflow-hidden`}>
                                    <img
                                        src={product.image}
                                        alt={`${product.name} tea blend label`}
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6">
                                    <p className="text-sm font-medium text-slate-500">{product.benefit}</p>
                                    <h3 className="mt-2 text-2xl font-semibold tracking-tight">{product.name}</h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>
                                    <button
                                        type="button"
                                        className="mt-6 w-full rounded bg-slate-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                                    >
                                        Discover {product.name}
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default Products;