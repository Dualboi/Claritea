export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 sm:gap-x-8">
          <div className="lg:flex lg:items-center">
            <a
              href="#"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              <img
                src="/favicon.svg"
                alt="logo"
                className="w-50 h-50"
              />
            </a>
          </div>

          <div className="lg:flex lg:items-center">
            <ul className="flex flex-wrap gap-6">
              <li>
                <a
                  href="#"
                  className="flex items-center bg-slate-200 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-full fill-slate-600"
                    viewBox="0 0 155.139 155.139"
                    aria-hidden="true"
                  >
                    <path
                      d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761z"
                      data-original="#010002"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center bg-slate-200 w-8 h-8 p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  aria-label="Instagram"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-full fill-slate-600"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm8.95 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-semibold text-sm mb-6">
              Useful links
            </h3>
            <ul className="space-y-4 text-slate-600 text-sm font-normal">
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                >
                  Featured
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                >
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-semibold text-sm mb-6">
              Information
            </h3>
            <ul className="space-y-4 text-slate-600 text-sm font-normal">
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                >
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                >
                  Sale
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-slate-600 text-sm mt-8">
          © Positivi-Tea. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
