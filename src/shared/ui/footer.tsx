import FooterCompanyDetails from "../modules/footer-companyDetails";
import FooterQuickLinks from "../modules/footer-quickLinks";
import FooterContactDetails from "../modules/footer-contactDetails";
import FooterCopyRight from "../modules/footer-copyRight";

export default function Footer() {
  return (
    <div className="mb-5">
      <div className="grid grid-cols-3 gap-10 mx-30 justify-items-center mb-5">
        <FooterCompanyDetails />
        <FooterQuickLinks />
        <FooterContactDetails />
      </div>

      <hr className="mx-30 mb-5"></hr>
      <div className="text-gray-600 flex justify-center items-start">
        <FooterCopyRight />
      </div>
    </div>
  );
}
