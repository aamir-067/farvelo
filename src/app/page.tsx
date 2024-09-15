import NavBar from "@/components/common/NavBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import illustration from "../../public/landing_illustration.png";
import logo from "../../public/logo.png";
import "./globals.css";
import { Testimonials } from "@/components/common/Testim";
import { Faq } from "@/components/common/faq";
export default function Home() {

  return (
    <div className="mt-8">
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            {/* logo */}
            <Image className="size-10 object-contain" src={logo} alt="logo of agency" />
            <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              <div className="rounded-full bg-white p-1 px-2">
                <p className="text-sm font-medium">Get first</p>
              </div>
              <p className="text-sm font-medium px-2">Pay Later</p>
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              People who care about your growth
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur modi blanditiis
              dolores quasi eaque explicabo!
            </p>

            <Button className="max-w-40 mt-8" variant={"default"}>Get Started</Button>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <Image
              className="aspect-[3/2] object-cover lg:aspect-[4/3] lg:h-[550px] xl:aspect-[16/9]"
              src={illustration}
              alt=""
            />
          </div>
        </div>
      </div>


      {/* our services */}
      <div className="my-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
              <p className="text-xs font-semibold uppercase tracking-widest text-black">
                27+ Projects Completed
              </p>
            </div>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Farvelo helps you Grow your Business
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              We are here to grow your business and helps you in finding more customers from around the world.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                {/* <DollarSign className="h-9 w-9 text-gray-700" /> */}
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">Website Development</h3>
              <p className="mt-4 text-sm text-gray-600">
                Farvelo can help your business by making a professional looking website showcasing you business to attract unique visitors grow fast
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                {/* <Zap className="h-9 w-9 text-gray-700" /> */}
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">Social Media Ads</h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                {/* <Moon className="h-9 w-9 text-gray-700" /> */}
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">Blockchain Solutions</h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                {/* <Filter className="h-9 w-9 text-gray-700" /> */}
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black">Mobile App Development</h3>
              <p className="mt-4 text-sm text-gray-600">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit.
              </p>
            </div>
          </div>
        </div>

      </div>



      {/* testimonial */}
      <div className="mt-48 mb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              What other peoples says
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              We are here to grow your business and helps you in finding more customers from around the world.
            </p>
          </div>
        </div>

      </div>
      <div className="w-full flex items-center justify-center">
        <Testimonials />
      </div>




      {/* Frequently asked questions */}

      <Faq />







    </div>
  );
}
