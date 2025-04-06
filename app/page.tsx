'use client';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Image from "next/image";
import { Coffee, Mail, Phone } from "lucide-react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Время анимации в ms
      once: true,     // Анимация запускается только один раз
    });
  }, []);
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center sticky top-0 z-50 backdrop-blur-sm">
        <div className="flex items-center">
          <Link href="/" className="text-[#00FF66] font-bold text-xl">
            StarBucks
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link href="#" className="text-white hover:text-[#00FF66]">
            Home
          </Link>
          <Link href="#" className="text-white hover:text-[#00FF66]">
            About
          </Link>
          <Link href="#" className="text-white hover:text-[#00FF66]">
            Menu
          </Link>
          <Link href="#" className="text-white hover:text-[#00FF66]">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center relative">
        <div
          data-aos="fade-right"
          data-aos-offset="1"
          data-aos-easing="ease-in-sine"
          className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            New Cafe <br />
            <span className="text-[#00FF66]">by StarBucks</span>
          </h1>
          <p className="text-gray-400 mb-8 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo.
          </p>
          <div className="flex space-x-4">
            <button className="bg-[#00FF66] text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-80 transition">
              Reserve a table
            </button>
            <button className="border border-gray-600 px-6 py-2 rounded-full font-medium hover:border-[#00FF66] hover:text-[#00FF66] transition">
              Menu
            </button>
          </div>

          {/* Stats */}
          <div className="flex space-x-12 mt-12">
            <div>
              <h3 className="text-2xl font-bold">9k+</h3>
              <p className="text-gray-400 text-sm">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">2k+</h3>
              <p className="text-gray-400 text-sm">Positive Reviews</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">28+</h3>
              <p className="text-gray-400 text-sm">Locations</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-0 right-0 bg-[#00FF66] text-black rounded-full p-2 z-20">
            <span className="font-bold">40% OFF</span>
          </div>
          <Image
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            src="/placeholder.png"
            alt="Coffee Cup"
            width={400}
            height={500}
            className="mx-auto"
          />
        </div>

        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,0 C100,100 200,100 300,0 C400,-100 500,-100 600,0 C700,100 800,100 900,0 L900,900 L0,900 Z"
              fill="#00FF66"
            />
          </svg>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-[#1A1A1A] rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[#222222] transition">
            <div className="bg-[#00FF66] bg-opacity-10 p-3 rounded-full">
              <Coffee className="w-6 h-6 text-[#00FF66]" />
            </div>
            <div>
              <h3 className="font-bold">Tasty</h3>
              <p className="text-gray-400 text-sm">Delicious coffee</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[#222222] transition">
            <div className="bg-[#00FF66] bg-opacity-10 p-3 rounded-full">
              <Coffee className="w-6 h-6 text-[#00FF66]" />
            </div>
            <div>
              <h3 className="font-bold">Healthy</h3>
              <p className="text-gray-400 text-sm">Organic ingredients</p>
            </div>
          </div>

          <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-[#222222] transition">
            <div className="bg-[#00FF66] bg-opacity-10 p-3 rounded-full">
              <Coffee className="w-6 h-6 text-[#00FF66]" />
            </div>
            <div>
              <h3 className="font-bold">Sustainable</h3>
              <p className="text-gray-400 text-sm">Eco-friendly packaging</p>
            </div>
          </div>
        </div>
      </section>

      {/* We Make Delicious Section */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center relative">
        <div className="grid grid-cols-2 gap-4">
          <Image
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            src="/placeholder.png?height=300&width=250"
            alt="Cafe Interior 1"
            width={250}
            height={300}
            className="rounded-lg"
          />
          <Image
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            src="/placeholder.png?height=300&width=250"
            alt="Cafe Interior 2"
            width={250}
            height={300}
            className="rounded-lg mt-8"
          />
        </div>

        <div>
          <div className="inline-block bg-[#00FF66] text-black rounded-full px-3 py-1 text-sm font-medium mb-4">
            40% OFF
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We make <br />
            <span className="text-[#00FF66]">delicious</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-[#00FF66] text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-80 transition">
            Learn more
          </button>
        </div>

        {/* Background pattern */}
        <div className="absolute bottom-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,800 C100,700 200,700 300,800 C400,900 500,900 600,800 C700,700 800,700 900,800 L900,0 L0,0 Z"
              fill="#00FF66"
            />
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-16 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          New Our <br />
          <span className="text-[#00FF66]">Products</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
          pulvinar dapibus leo. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product 1 */}
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay={200} className="bg-[#1A1A1A] rounded-xl p-6 flex flex-col">
            <div className="relative mb-4">
              <Image
                src="/placeholder.png?height=200&width=200"
                alt="Coffee Product 1"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Flat White</h3>
            <p className="text-gray-400 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="font-bold text-lg">$4.99</span>
              <button className="bg-[#00FF66] text-black px-4 py-1 rounded-full text-sm font-medium hover:bg-opacity-80 transition">
                Buy now
              </button>
            </div>
          </div>

          {/* Product 2 */}
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay={400} className="bg-[#1A1A1A] rounded-xl p-6 flex flex-col">
            <div className="relative mb-4">
              <Image
                src="/placeholder.png?height=200&width=200"
                alt="Coffee Product 2"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Flat White</h3>
            <p className="text-gray-400 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="font-bold text-lg">$4.99</span>
              <button className="bg-[#00FF66] text-black px-4 py-1 rounded-full text-sm font-medium hover:bg-opacity-80 transition">
                Buy now
              </button>
            </div>
          </div>

          {/* Product 3 */}
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay={600} className="bg-[#1A1A1A] rounded-xl p-6 flex flex-col">
            <div className="relative mb-4">
              <Image
                src="/placeholder.png?height=200&width=200"
                alt="Coffee Product 3"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-2">Cappuccino</h3>
            <p className="text-gray-400 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="font-bold text-lg">$5.99</span>
              <button className="bg-[#00FF66] text-black px-4 py-1 rounded-full text-sm font-medium hover:bg-opacity-80 transition">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="container mx-auto px-4 py-16 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our New <br />
          <span className="text-[#00FF66]">Events</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Event 1 */}
          <div className="relative rounded-xl overflow-hidden group">
            <Image
              src="/placeholder.png?height=250&width=400"
              alt="Event 1"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h3 className="font-bold text-lg mb-2">TWO COFFEE FOR 1 PRICE</h3>
              <button className="bg-[#00FF66] text-black px-4 py-1 rounded-full text-sm font-medium hover:bg-opacity-80 transition w-max">
                Learn more
              </button>
            </div>
          </div>

          {/* Event 2 */}
          <div className="relative rounded-xl overflow-hidden group">
            <Image
              src="/placeholder.png?height=250&width=400"
              alt="Event 2"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h3 className="font-bold text-lg mb-2">FREE COFFEE FOR 3 TIMES</h3>
              <button className="bg-[#00FF66] text-black px-4 py-1 rounded-full text-sm font-medium hover:bg-opacity-80 transition w-max">
                Learn more
              </button>
            </div>
          </div>

          {/* Event 3 */}
          <div className="relative rounded-xl overflow-hidden group">
            <Image
              src="/placeholder.png?height=250&width=400"
              alt="Event 3"
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
              <h3 className="font-bold text-lg mb-2">CHOOSE AS YOU CHOOSE IT</h3>
              <button className="bg-[#00FF66] text-black px-4 py-1 rounded-full text-sm font-medium hover:bg-opacity-80 transition w-max">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center relative">
        <div>
          <div className="inline-block bg-[#00FF66] text-black rounded-full px-3 py-1 text-sm font-medium mb-4">
            40% OFF
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <br />
            <span className="text-[#00FF66]">Contacts</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis,
            pulvinar dapibus leo. Sed do eiusmod tempor incididunt ut labore.
          </p>

          <div className="flex items-center space-x-2 mb-4">
            <Mail className="text-[#00FF66]" />
            <span>info@starbucks.com</span>
          </div>

          <div className="flex items-center space-x-2">
            <Phone className="text-[#00FF66]" />
            <span>+1 (555) 123-45-67</span>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/placeholder.png"
            alt="Contact Image"
            width={350}
            height={400}
            className="rounded-lg"
          />
        </div>

        {/* Background pattern */}
        <div className="absolute bottom-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M800,0 C700,100 600,100 500,0 C400,-100 300,-100 200,0 C100,100 0,100 -100,0 L-100,800 L800,800 Z"
              fill="#00FF66"
            />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <Link href="/" className="text-[#00FF66] font-bold text-xl mb-4 md:mb-0">
              StarBucks
            </Link>

            <div className="flex space-x-8">
              <Link href="#" className="text-white hover:text-[#00FF66]">
                Home
              </Link>
              <Link href="#" className="text-white hover:text-[#00FF66]">
                About
              </Link>
              <Link href="#" className="text-white hover:text-[#00FF66]">
                Menu
              </Link>
              <Link href="#" className="text-white hover:text-[#00FF66]">
                Contact
              </Link>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} StarBucks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

