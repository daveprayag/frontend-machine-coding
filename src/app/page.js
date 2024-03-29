import MaxWidthWrapper from "@/components/max-width-wrapper";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="text-center mt-[30px] p-2 font-semibold text-2xl">
        Frontend Machine Coding Questions
      </header>
      <main className="flex flex-col md:flex-row items-center justify-center mt-[50px] mx-5">
        <Link
          href="/otp-login"
          className="bg-slate-800 text-white p-3 rounded-lg hover:bg-slate-700 text-center mb-2 mr-2"
        >
          OTP Login
        </Link>
        <Link
          href="/background-change"
          className="bg-slate-800 text-white p-3 rounded-lg hover:bg-slate-700 text-center mb-2 mr-2"
        >
          Change background
        </Link>
      </main>
    </>
  );
}
