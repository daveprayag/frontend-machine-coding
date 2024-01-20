import { useRef, useState, useEffect } from "react";

function OtpInput({ length = 6, onOtpSubmit = () => {} }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    return () => {
      if (inputRef.current[0]) {
        inputRef.current[0].focus();
      }
    };
  }, []);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      return;
    }
    const newOtp = [...otp];
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
    }

    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRef.current[index + 1]) {
      inputRef.current[newOtp.indexOf("", index)].focus();
    }
  };

  const handleClick = (index) => {
    inputRef.current[index].setSelectionRange(1, 1);
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRef.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
      inputRef.current[index - 1].focus();
    }
  };

  return (
    <>
      <div className="text-center my-4">
        {otp.map((value, index) => {
          return (
            <input
              key={index}
              type="text"
              value={value}
              ref={(input) => (inputRef.current[index] = input)}
              onChange={(e) => {
                handleChange(index, e);
              }}
              onClick={() => {
                handleClick(index);
              }}
              onKeyDown={(e) => {
                handleKeyDown(index, e);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-md w-10 text-center m-1.5 rounded-lg focus:ring-blue-400 focus:border-blue-500 p-2.5"
            />
          );
        })}
      </div>
    </>
  );
}

export default OtpInput;
