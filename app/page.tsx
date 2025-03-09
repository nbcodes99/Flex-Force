import Link from "next/link";
import FitnessCard from "./components/card";
import TestimonyCard from "./components/TestimonyCard";
import { MdLocationOn, MdOutlineMailOutline } from "react-icons/md";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaRegCopyright,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const small = {
  fontSize: "12px",
};

export default function Home() {
  return (
    <>
      <main className="w-full bg-black flex flex-col p-8 items-center md:items-start">
        <section className="flex flex-col p-6 items-center md:items-start mb-6">
          <p className="paragraph text-zinc-400 text-center md:text-start">
            Base Fit - Functional Fitness Studio
          </p>
          <h1 className="text-3xl text-center md:text-start headline md:text-6xl font-bold my-4">
            Where <span className="text-red-600">Fitness</span> Becomes Your
            Lifestyle
          </h1>
          <p className="paragraph font-light text-zinc-400 text-center md:text-start text-sm md:text-base">
            Short, manageable workouts for people with no time.
          </p>
          <div className="flex gap-x-3 ">
            <Link href="/book">
              <button className="p-3 mt-8 bg-zinc-900 w-32 md:w-36 text-sm md:text-base rounded-sm">
                Book Now
              </button>
            </Link>
            <Link href="/plans">
              <button className="p-3 mt-8 bg-red-950 w-32 md:w-36 text-sm md:text-base rounded-sm">
                Plans
              </button>
            </Link>
          </div>
        </section>
        <section className="p-4 w-full">
          <h1 className="text-4xl text-center my-8 font-bold">Learn More</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
            <FitnessCard
              title="Modern Equipment"
              description={
                "We tested the latest smart home gym equipment to find the best, including the Peloton bike, Technogym MyRun treadmill, Mirror, Lat pulldown, Cable biceps bar, Cable triceps bar etc. We've tested all the most popular smart fitness equipment."
              }
            />
            <FitnessCard
              title="Professional Trainer"
              description={
                "Fitness trainers lead and train people in fitness routines, helping them meet their fitness goals. They may guide clients on the best equipment to use or make recommendations on the best workout routines. Some fitness trainers may help clients rehabilitate after an injury, or meet strength or weight training goals."
              }
            />
            <FitnessCard
              title="Healthy Diet Plan"
              description={
                "The best diet for losing weight while working out is one that includes high-quality foods that are unrefined and minimally processed. A balanced diet should include plenty of fruits and vegetables, whole grains, healthy (unsaturated) fats, and healthy protein sources."
              }
            />
          </div>
        </section>
        <section className="flex flex-col p-6 w-full bg-black h-fit">
          <h1 className="font-bold text-3xl md:text-4xl text-center mt-8 text-zinc-300">
            Customer Testimonials
          </h1>
          <p
            className="text-center font-light text-zinc-700 my-3"
            style={small}
          >
            Hear how our members transformed their lives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <TestimonyCard
              comment="This gym changed my life for the better!"
              name="Jane Doe"
            />
            <TestimonyCard
              comment="I achieved my goals faster than I ever imagined."
              name="John Smith"
            />
            <TestimonyCard
              comment="The community support is incredible!"
              name="Emily Johnson"
            />
          </div>
        </section>
        <section className="bg-black flex flex-col md:flex-row items-center justify-evenly md:justify-around w-full p-6 pb-20">
          <div>
            <h1 className="font-bold text-3xl md:text-4xl text-center text-zinc-300 mb-4">
              Get In Touch
            </h1>
            <p className="text-zinc-500 font-light mb-6 text-center">
              We&apos;re here to assist you with any inquiries or support you
              may need.
            </p>
          </div>
          <div className="flex flex-col gap-6 mt-8 md:mt-0">
            <span className="flex items-center gap-x-3">
              <MdOutlineMailOutline style={{ fontSize: "22px" }} />
              <p className="underline text-zinc-500 cursor-pointer">
                flexforce@gmail.com
              </p>
            </span>
            <span className="flex gap-x-3">
              <FaPhone style={{ fontSize: "22px" }} />
              <p className="underline text-zinc-500 cursor-pointer">
                +1 (555) 123-4567
              </p>
            </span>
            <span className="flex gap-x-3">
              <MdLocationOn style={{ fontSize: "22px" }} />
              <p className="underline text-zinc-500 cursor-pointer">
                456 fitness Ave Los Angeles CA 90001 US
              </p>
            </span>
          </div>
        </section>
        <section className="bg-black w-full flex flex-col justify-between p-6">
          <div className="flex flex-col md:flex-row items-center justify-evenly mb-10">
            <div className="">
              <h1 className="font-bold text-2xl text-center md:text-left">
                Flex<span className="text-red-700">Force</span>
              </h1>
              <p
                className="font-light text-zinc-600 mb-6 text-center md:text-left"
                style={small}
              >
                Subscribe to our newsletter for the latest updates on features
                and releases.
              </p>
              <div className="flex gap-x-2 mb-3">
                <input
                  type="text"
                  placeholder="Email"
                  className="p-2 bg-transparent border-zinc-700 border focus:outline-none focus:border-zinc-500 transition-colors"
                />
                <button className="p-2 bg-zinc-800 hover:bg-zinc-900 transition-colors rounded-sm w-28">
                  Join
                </button>
              </div>
              <p className="font-light text-zinc-600 mb-6" style={small}>
                By subscribing, you consent to our{" "}
                <span className="font-bold">Privacy Policy</span> &amp; agree to
                receive updates.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-x-10">
              <div className="quick-links flex flex-col items-start gap-y-2 text-zinc-500">
                <h1 className="font-bold text-2xl mb-4 text-zinc-200">
                  Quick Links
                </h1>

                <Link href="/" style={small}>
                  Home Page
                </Link>
                <Link href="/book" style={small}>
                  Book Now
                </Link>
                <Link href="/plans" style={small}>
                  Plans
                </Link>
                <Link href="/programs" style={small}>
                  Our Programs
                </Link>
                <Link href="/contact" style={small}>
                  Contact Us
                </Link>
              </div>
              <div className="socials flex flex-col items-start gap-y-2">
                <h1 className="font-bold text-2xl mb-4">Follow Us</h1>
                <span className="flex items-center gap-x-2">
                  <FaFacebook />
                  <Link
                    href="/https://facebook.com"
                    className="text-zinc-500"
                    style={small}
                  >
                    Facebook
                  </Link>
                </span>
                <span className="flex items-center gap-x-2">
                  <FaInstagram />
                  <Link
                    href="/https://instagram.com"
                    className="text-zinc-500"
                    style={small}
                  >
                    Instagram
                  </Link>
                </span>
                <span className="flex items-center gap-x-2">
                  <FaTwitter />
                  <Link
                    href="/https://instagram.com"
                    className="text-zinc-500"
                    style={small}
                  >
                    Twitter
                  </Link>
                </span>
                <span className="flex items-center gap-x-2">
                  <FaYoutube />
                  <Link
                    href="/https://youtube.com"
                    className="text-zinc-500"
                    style={small}
                  >
                    Youtube
                  </Link>
                </span>

                <span className="flex items-center gap-x-2">
                  <FaLinkedin />
                  <Link
                    href="/https://linkedin.com"
                    className="text-zinc-500"
                    style={small}
                  >
                    LinkedIn
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col md:flex-row justify-evenly mt-10">
            <p className="text-zinc-500 flex items-center" style={small}>
              <FaRegCopyright className="mr-2 text-zinc-300" />
              2024{" "}
              <span className="ml-1 text-red-800 font-bold">FlexForce</span>.
              All rights reserved.
            </p>
            <div className="flex gap-x-2 mt-6 md:mt-0">
              <p
                className="underline text-zinc-500 cursor-pointer"
                style={small}
              >
                Privacy Policy
              </p>
              <p
                className="underline text-zinc-500 cursor-pointer"
                style={small}
              >
                Terms of Service
              </p>
              <p
                className="underline text-zinc-500 cursor-pointer"
                style={small}
              >
                Cookies
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
