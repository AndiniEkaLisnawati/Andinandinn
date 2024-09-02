export default function Promo() {
    return (
        <section className="bg-white px-4 py-8 antialiased dark:bg-gray-900 md:py-16">
            <div
                className="mx-auto grid max-w-screen-xl rounded-lg bg-gray-50 p-4 dark:bg-gray-800 md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
                <div className="lg:col-span-5 lg:mt-0">
                    <a href="#">
                        <img className="mb-4 h-56 w-56 dark:hidden sm:h-96 sm:w-96 md:h-full md:w-full"
                             src="https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/Allo-Bank3.jpg"
                             alt="peripherals"/>
                        <img className="mb-4 hidden dark:block md:h-full"
                             src="https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/Allo-Bank3.jpg"
                             alt="peripherals"/>
                    </a>
                </div>
                <div className="me-auto place-self-center lg:col-span-7">
                    <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-4xl">
                        Download Allo Bank Now!<br/>
                    </h1>
                    <p className="mb-6 text-gray-500 dark:text-gray-400">Available On Play Store And App Store</p>
                    <a href="#"
                       className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"> Pre-order
                        now </a>
                </div>
            </div>
        </section>
    )
}