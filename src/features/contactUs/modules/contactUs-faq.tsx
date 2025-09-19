export default function ContactUsFaQ() {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-center flex-1 flex flex-col justify-center items-center">
        <div></div>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-800">
          Frequently Asked Questions
        </h5>
        <p className="font-normal text-gray-500">
          Quick answers to common questions about working with us.
        </p>
      </div>

      <div className="flex justify-between">
        <div>
          <div className="mb-5">
            <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-800">
              What is your minimum order quantity?
            </h5>
            <p>
              Our MOQ varies by product: 500 pieces for clothing, 200 pieces for
              accessories.
            </p>
          </div>
          <div className="mb-5">
            <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-800">
              Do you provide samples?
            </h5>
            <p>
              Yes, we offer samples for quality evaluation before placing bulk
              orders.
            </p>
          </div>
        </div>

        <div>
          <div className="mb-5">
            <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-800">
              How long does production take?
            </h5>
            <p>Typically 15-30 days depending on order size and complexity.</p>
          </div>
          <div className="mb-5">
            <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-800">
              Which countries do you export to?
            </h5>
            <p>We export to 50+ countries across all major continents.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
