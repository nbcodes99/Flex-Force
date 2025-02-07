import Link from "next/link";
import FitnessCard from "./components/card";
import TestimonyCard from "./components/TestimonyCard";
import { MdLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="w-full flex flex-col p-8 items-center md:items-start">
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
            style={{ fontSize: "12px" }}
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
        <section className="bg-black flex flex-col md:flex-row items-center justify-evenly md:justify-around w-full p-6">
          <div>
            <h1 className="font-bold text-3xl md:text-4xl text-center text-zinc-300 mb-4">
              Get In Touch
            </h1>
            <p className="text-zinc-500 font-light mb-6 text-center">
              We're here to assist you with any inquiries or support you may
              need.
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
        <section className="bg-black w-full flex flex-col md:flex-row items-center">
          <div>
            <h1 className="font-bold text-red-700 text-2xl">FlexForce</h1>
            <p className="font-light text-zinc-800">
              Subscribe to our newsletter for the latest updates on features and
              releases.
            </p>
            <div>
              <input
                type="text"
                placeholder="Email"
                className="p-4 bg-transparent border-zinc-700 border"
              />
              <button className="p-4 bg-red-300">Join</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

{
  /* <FaInstagram />
<FaYoutube />
<FaFacebook />
<FaLinkedin />
<FaTwitter /> */
}
