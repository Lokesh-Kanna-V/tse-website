import CategoryProductsBreadCrumbs from "../modules/categoryProducts-breadCrumbs";
import CategoryProductsFilterButtonSection from "../modules/categoryProducts-filterButtonSection";
import ProductCard from "@/shared/ui/productCard";

const productsList = [
  {
    item: 1,
  },
  {
    item: 2,
  },
  {
    item: 3,
  },
];

export default function CategoryProducts() {
  return (
    <section className="bg-gray-50 py-8 antialiased ">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mb-4 items-end justify-between space-y-4 sm:flex sm:space-y-0 md:mb-8">
          <CategoryProductsBreadCrumbs />
          <CategoryProductsFilterButtonSection />
        </div>

        <div className="flex flex-row gap-4">
          {productsList.map((item) => {
            return (
              <div key={item.item}>
                <ProductCard />
              </div>
            );
          })}
        </div>

        <div className="w-full text-center">
          <button
            type="button"
            className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
          >
            Show more
          </button>
        </div>
      </div>

      <form
        action="#"
        method="get"
        id="filterModal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-50 hidden h-modal w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full"
      >
        <div className="relative h-full w-full max-w-xl md:h-auto">
          <div className="relative rounded-lg bg-white shadow dark:bg-gray-800">
            <div className="flex items-start justify-between rounded-t p-4 md:p-5">
              <h3 className="text-lg font-normal text-gray-500 dark:text-gray-400">
                Filters
              </h3>
              <button
                type="button"
                className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="filterModal"
              >
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18 17.94 6M18 18 6.06 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="px-4 md:px-5">
              <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul
                  className="-mb-px flex flex-wrap text-center text-sm font-medium"
                  id="myTab"
                  data-tabs-toggle="#myTabContent"
                  role="tablist"
                >
                  <li className="mr-1" role="presentation">
                    <button
                      className="inline-block pb-2 pr-1"
                      id="brand-tab"
                      data-tabs-target="#brand"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Brand
                    </button>
                  </li>
                  <li className="mr-1" role="presentation">
                    <button
                      className="inline-block px-2 pb-2 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                      id="advanced-filers-tab"
                      data-tabs-target="#advanced-filters"
                      type="button"
                      role="tab"
                      aria-controls="advanced-filters"
                      aria-selected="false"
                    >
                      Advanced Filters
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
