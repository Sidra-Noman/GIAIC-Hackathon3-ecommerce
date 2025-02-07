
import React from "react";
import Image from "next/image";
import { BsBagCheck } from "react-icons/bs";

const CheckoutPage = () => {
  return (
    <div>
      <div className="grid grid-cols-12 px-10 my-10 lg:px-32 lg:">
        <div className="col-span-12  w-full md:w-[440px] lg:col-span-8">
          <h2 className="font-bold text-xl pb-4">
            How would you like to get your order?
          </h2>
          <p className="text-gray-600">
            Customs regulation for India require a copy of the recipient&apos;s KYC.
            The address on the KYC needs to match the shipping address. Our
            courier will contact you via SMS/email to obtain a copy of your KYC.
            The KYC will be stored securely and used solely for the purpose of
            clearing customs (including sharing it with customs officials) for
            all orders and returns. If your KYC does not match your shipping
            address, please click the link for more information.{" "}
            <span className="underline">Learn More</span>
          </p>
          <div className="flex border-[1.5px] border-black px-4 py-4  rounded-xl my-10">
          <BsBagCheck className="w-[24px] h-[24px] " />
            <span className="ps-6">Deliver It</span>
          </div>
          <h2 className="font-bold text-xl pb-4">
            Enter your name and address:
          </h2>
          <input
            className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="First Name"
          />
          <input
            className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="Last Name"
          />
          <input
            className="w-full border-[#E5E5E5] rounded-md px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="Address Line 1"
          />
          <span className="text-text-primary-gray text-xs">
            We do not ship to P.O. boxes
          </span>
          <input
            className="w-full border-[#E5E5E5] rounded-md my-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="Address Line 2"
          />
          <input
            className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="Address Line 3"
          />
          <div className="flex gap-4">
            <input
              className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
              type="text"
              placeholder="Postal Codes"
            />
            <input
              className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
              type="text"
              placeholder="Locality"
            />
          </div>
          <div className="flex gap-4">
            <select
              className="w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
              defaultValue="State/Territory"
            >
              <option disabled>State/Territory</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>

            <div className="relative w-full border-[#E5E5E5] rounded-md mb-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray">
              <span className="text-gray-700">India</span>
              <span className="absolute right-4 top-5 w-2 h-2 bg-green-500 rounded-full"></span>
            </div>
          </div>
          <div>
            <input type="checkbox" id="save-address" />
            <label
              className="ml-1 pl-2  cursor-pointer text-text-secondary-gray"
              htmlFor="save-address"
            >
              Save this address to my profile
            </label>
          </div>
          <div className="pt-4">
            <input type="checkbox" id="preferred-address" />
            <label
              className="ml-1 pl-2 cursor-pointer text-text-secondary-gray"
              htmlFor="preferred-address"
            >
              Make this my preferred address
            </label>
          </div>
          <h2 className="font-bold text-xl pt-4">
            What&apos;s your contact information?
          </h2>
          <div className="my-6">
            <input
              className="w-full border-[#E5E5E5] rounded-md px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
              type="text"
              placeholder="Email"
            />
            <span className="text-text-primary-gray text-xs">
              A confirmation email will be sent after checkout.
            </span>

            <input
              className="w-full border-[#E5E5E5] rounded-md mt-4 px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
              type="text"
              placeholder="Phone Number"
            />
            <span className="text-text-primary-gray text-xs">
              A carrier might contact you to confirm delivery.
            </span>
          </div>
          <h2 className="font-bold text-xl pt-4">What&apos;s your PAN?</h2>
          <input
            className="w-full border-[#E5E5E5] mt-4 rounded-md px-4 py-3 border-[2px] placeholder:text-text-secondary-gray"
            type="text"
            placeholder="PAN"
          />
          <span className="text-text-primary-gray text-xs">
            Enter your PAN to enable payment with UPI, Net Banking or local card
            methods
          </span>
          <div className="my-2 text-gray-600">
            <input type="checkbox" id="PAN-details" />
            <label
              className="ml-1 pl-2 cursor-pointer text-text-secondary-gray"
              htmlFor="PAN-details"
            >
              Save PAN details to Nike Profile
            </label>
          </div>
          <div className="mt-12 text-gray-600">
            <input type="checkbox" id="remember" />
            <label
              className="ml-1 pl-2 cursor-pointer text-text-secondary-gray"
              htmlFor="remember"
            >
              I have read and consent to eShopWorld processing my information in
              accordance with the Privacy Statement and Cookie Policy.
              eShopWorld is a trusted Nike partner.
            </label>
          </div>
          <div className="bg-[#F5F5F5] mt-14 mb-6 px-4 text-text-secondary-gray text-center cursor-pointer py-4 rounded-full">
            Continue
          </div>
          <div>
            <h3 className="pt-4 pb-8 border-t-[1px] border-[#E5E5E5]">
              Delivery
            </h3>
            <h3 className="pt-4 pb-8 border-t-[1px] border-[#E5E5E5] text-gray-600">
              Shipping
            </h3>
            <h3 className="pt-4 pb-8 border-t-[1px] border-[#E5E5E5] text-gray-600">
              Billing
            </h3>
            <h3 className="pt-4 pb-8 border-t-[1px] border-[#E5E5E5] text-gray-600">
              Payment
            </h3>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-4 mt-10 lg:mt-0">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Order Summary
          </h2>
          <div className="flex justify-between text-gray-600 mb-2">
            <span>Subtotal</span>
            <span>₹ 20 890.00</span>
          </div>
          <div className="flex justify-between text-gray-600 mb-4">
            <span>Delivery/Shipping</span>
            <span>Free</span>
          </div>
          <hr className="border-gray-300 my-4" />
          <div className="flex justify-between text-gray-900 font-semibold text-lg mb-2">
            <span>Total</span>
            <span>₹ 20 890.00</span>
          </div>
          <hr className="border-gray-300 my-4" />
          <p className="text-xs text-gray-500">
            (The total reflects the price of your order, including all duties
            and taxes)
          </p>

          <h2 className="text-lg font-semibold text-gray-900 mt-6">
            Arrives Mon, 27 Mar - Wed, 12 Apr
          </h2>
          <div>
            <Image
              src="/images/man.png"
              width={208}
              height={208}
              alt="Nike Dri-FIT ADV TechKnit Ultra"
              className="mt-4 object-cover rounded-md"
            />
            <div>
              <h3 className="text-lg font-medium mt-2">
                Nike Dri-FIT ADV TechKnit Ultra
              </h3>
              <p className="text-sm text-gray-600">
                Men&apos;s Short-Sleeve Running Top
              </p>
              <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>
              <div className="flex gap-20 text-sm text-gray-600 mt-2">
                <p>Size: L</p>
                <p>Quantity: 1</p>
              </div>
              <p className="text-gray-600 mt-2">₹ 3 895.00</p>
            </div>
          </div>
          <div>
            <Image
              src="/images/nike1.png"
              width={208}
              height={208}
              alt="Nike Dri-FIT ADV TechKnit Ultra"
              className="mt-4 object-cover rounded-md"
            />
            <div>
              <h3 className="text-lg font-medium mt-2">
                Nike Dri-FIT ADV TechKnit Ultra
              </h3>
              <p className="text-sm text-gray-600">
                Men&apos;s Short-Sleeve Running Top
              </p>
              <p className="text-sm text-gray-600">Ashen Slate/Cobalt Bliss</p>
              <div className="flex gap-20 text-sm text-gray-600 mt-2">
                <p>Size: L</p>
                <p>Quantity: 1</p>
              </div>
              <p className="text-gray-600 mt-2">₹ 3 895.00</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="min-h-screen py-8 px-4 sm:px-20">
      <div className="max-w-6xl mx-auto rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         
          <div>
            <h2 className="text-xl font-semibold mb-4">How would you like to get your order?</h2>
            <p className="text-gray-600 text-sm mb-6">
              Customs regulation for India requires a copy of the recipient's <br />
              KYC. The address on the KYC needs to match the shipping <br />address.
              Our courier will contact you via SMS/email to obtain <br /> a copy of
              your KYC. The KYC will be stored securely and <br />used solely for the
              purpose of clearing customs (including <br />sharing it with customs
              officials) for all orders and returns. If <br />your KYC does not match your shipping address, please
              click <br /> the link for more information. <span className="underline">Learn More</span>
            </p>
            <button className="w-full md:w-auto border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50">
              Deliver It
            </button>

            <form className="space-y-4 mt-6">
              <div>
                <label className="block text-xl font-bold mb-5 text-gray-700">Enter your name and address:</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 mb-5 rounded-lg px-3 py-2 mt-1"
                  placeholder="First Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border border-gray-300 mb-5 rounded-lg px-3 py-2 mt-1"
                  placeholder="Last Name"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border border-gray-300 mb-5 rounded-lg px-3 py-2 mt-1"
                  placeholder="Address Line 1"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border border-gray-300 mb-5 rounded-lg px-3 py-2 mt-1"
                  placeholder="Address Line 2"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border border-gray-300 mb-5 rounded-lg px-3 py-2 mt-1"
                  placeholder="Address Line 3"
                />
              </div>
              <div className="flex gap-3 mb-5">
                <input
                  type="text"
                  className="w-full sm:w-1/2 border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="Postal Code"
                />
                <input
                  type="text"
                  className="w-full sm:w-1/2 border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="Locality"
                />
              </div>
              <div className="flex gap-3 mb-5">
                <input
                  type="text"
                  className="w-full sm:w-1/2 border border-gray-300 rounded-lg px-3 py-2 mt-1"
                  placeholder="State/Territory"
                />
                <select className="w-full sm:w-1/2 border border-gray-300 rounded-lg px-3 py-2 mt-1">
                  <option>India</option>
                </select>
              </div>

              <div>
                <label>
                  <input type="checkbox" className="mr-2 " />
                  Save this address to my profile
                </label>
              </div>

              <div>
                <label>
                  <input type="checkbox" className="mr-2 " />
                  Make this my preferred address
                </label>
              </div>

              <div>
                <h3 className="mt-10 font-bold text-2xl">What's your contact information?</h3>
              </div>

              <div>
                <input
                  type="email"
                  className="w-full border border-gray-300 mb-5 rounded-lg px-3 py-2 mt-1"
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="number"
                  className="w-full border border-gray-300 mb-5 rounded-lg px-3 py-2 mt-1"
                  placeholder="Phone Number"
                />
              </div>

              <h3 className="mt-10 font-bold text-2xl">What's your PAN?</h3>

              <div>
                <input
                  type="number"
                  className="w-full border border-gray-300 mb-5 rounded-lg px-3 py-2 mt-1"
                  placeholder="PAN"
                />
              </div>

              <div>
                <label>
                  <input type="checkbox" className="mr-2 " />
                  Save PAN details to Nike Profile
                </label>
              </div>

              <div>
                <label>
                  <input type="checkbox" className="mr-2 " />
                  I have read and consent to eShopWorld processing my information in
                  accordance with the <span className="underline">Privacy Statement </span> and{" "}
                  <span className="underline">Cookie Policy.</span> eShopWorld is a trusted Nike partner.
                </label>
              </div>

              <div className="mt-6">
                <button className="mt-14 w-full h-16 text-2xl bg-gray-200 py-3 rounded-full hover:bg-gray-200 transition flex items-center justify-center gap-3">
                  Continue
                </button>
              </div>

              <div>
                <h3 className="font-bold border-t pt-6 border-b pb-6">Delivery</h3>
                <h3 className="font-bold border-t pt-6 border-b pb-6">Shipping</h3>
                <h3 className="font-bold border-t pt-6 border-b pb-6">Billing</h3>
                <h3 className="font-bold border-t pt-6">Payment</h3>
              </div>
            </form>
          </div>

          
          <div className="mr-20 m-20 -mt-2">
            <div className="border-b pb-4 mb-4">
              <h3 className="text-lg font-semibold">Order Summary</h3>

              <div className="flex justify-between text-sm text-gray-600 mt-4">
                <span>Subtotal</span>
                <span>₹ 20,890.00</span>
              </div>

              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>Delivery/Shipping</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between text-base font-semibold mt-4 border-t pt-4">
                <span>Total</span>
                <span>₹ 20,890.00</span>
              </div>
            </div>

            <div>
              <h4 className="text-2xl mt-10 font-semibold">Arrives Mon, 27 Mar - Wed, 12 Apr</h4>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Image src='/images/man.png' alt="men" width={208} height={208} className=""/>
                  <div>
                    <p className="text-xl font-medium">Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top</p>
                    <p className="text-xs text-gray-600">Qty: 1,<br /> Size: L</p>
                    <span className="font-semibold">₹ 3,895.00</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Image src='/images/nike1.png' width={208} height={208} alt="pic" className="" />
                </div>
                <div className="mr-16">
                  <p className="text-xl font-medium">Nike Air Max 97 SE Men's Shoes</p>
                  <p className="text-xs text-gray-600">Qty: 1, Size: UK 8</p>
                  <span className="font-semibold">₹ 16,995.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default CheckoutPage;




               