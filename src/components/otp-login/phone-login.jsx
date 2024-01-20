"use client";
import { useState } from "react";
import OtpInput from "./otp-input";

function PhoneOtpForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setshowOtpInput] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();
    // phone validations
    const regex = /[^0-9]/g;
    if (
      phoneNumber.length < 10 ||
      phoneNumber.length > 10 ||
      regex.test(phoneNumber)
    ) {
      alert("Invalid phone number");
      return;
    }
    // show OTP Field
    setshowOtpInput(true);
  };

  const onOtpSubmit = () => {
    alert("Login successful");
  };

  return (
    <div className="text-center">
      <h1 className="font-semibold text-3xl mb-6">OTP Login</h1>
      {!showOtpInput ? (
        <form onSubmit={handlePhoneSubmit} className="flex flex-col">
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumber}
            placeholder="Enter your phone number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-lg w-[300px] text-center mb-4 rounded-lg p-2.5"
          />
          <button
            type="submit"
            className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700"
          >
            Get OTP
          </button>
          {/* <Link
            href="/"
            className="bg-slate-800 text-white p-[14px] rounded-lg hover:bg-slate-700 "
          >
            Back
          </Link> */}
        </form>
      ) : (
        <div>
          <h3>Enter the OTP that has been sent to {phoneNumber}</h3>
          <OtpInput length={6} onOtpSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
}

export default PhoneOtpForm;
