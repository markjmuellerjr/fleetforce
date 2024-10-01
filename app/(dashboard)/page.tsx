import StandardPrice from '@/components/standardPricing/standardPricing';
import { Button } from '@/components/ui/button';
import { ArrowRight, CreditCard, Database, Link } from 'lucide-react';
// import Spline  from '@splinetool/react-spline';
import Image from 'next/image';

export default function HomePage() {
  return (
      <>
      <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl font-bold text-gray-100 tracking-tight sm:text-5xl md:text-6xl">
              Your Fleet Moving
              <span className="block text-yellow-500">More Efficiently</span>
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Keep your fleet up to date on all service and maintenance needs. Your uptime is our priority. Faster service, less time wasted.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <a
                href="./login"
                target="_blank"
              >
                <Button className="bg-black hover:bg-gray-100 text-white hover:text-black border border-gray-200 rounded-full glass hover:animate-shimmer text-lg px-12 py-6 inline-flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            {<Image src="/hero-placeholder.png" alt="Fleet" width={600} height={250} className="w-full" />}
          </div>
        </div>
      </div>
    </section>
    <section className="py-16 bg-black w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  <path
                    fill="currentColor"
                    d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
                </svg>
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-300">
                  Automated Scheduling
                </h2>
                <p className="mt-2 text-base text-gray-100">
                  Recommendation Engine learns from your machines and can automatically schedule service appoints to reduce friction.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                <Database className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-300">
                  Fleet Management
                </h2>
                <p className="mt-2 text-base text-gray-100">
                  Manage all your machines in one place. No matter the brand.
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
                <CreditCard className="h-6 w-6" />
              </div>
              <div className="mt-5">
                <h2 className="text-lg font-medium text-gray-300">
                  Invoicing & Payments
                </h2>
                <p className="mt-2 text-base text-gray-100">
                  Seamless payment processing and and invoicing to keep your books on track.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-black w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
      <h2 className="mb-6 text-4xl font-bold text-gray-100 tracking-tight sm:text-5xl md:text-6xl">
              Pricing
            </h2>
      <div className="grid md:grid-cols-4 gap-3 max-w-xxl mx-auto">
        <StandardPrice />
      </div>
      </div>
      </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-black w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-300 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-100">
              Hear from businesses that have transformed their fleet management with FleetForce.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="glass p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <p className="text-gray-100">
                "FleetForce has revolutionized the way we manage our vehicles. The automated scheduling feature alone has saved us countless hours."
              </p>
              <div className="mt-4 flex items-center">
                <Image
                  src="/testimonials/client1.jpg"
                  alt="Client 1"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <p className="text-gray-300 font-medium">Jane Doe</p>
                  <p className="text-gray-400 text-sm">Operations Manager, XYZ Corp</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="glass p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <p className="text-gray-100">
                "The fleet management dashboard is intuitive and comprehensive. We've seen a 30% increase in fleet efficiency since adopting FleetForce."
              </p>
              <div className="mt-4 flex items-center">
                <Image
                  src="/testimonials/client2.jpg"
                  alt="Client 2"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <p className="text-gray-300 font-medium">John Smith</p>
                  <p className="text-gray-400 text-sm">Logistics Coordinator, ABC Logistics</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="glass p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
              <p className="text-gray-100">
                "Invoicing and payments have never been easier. FleetForce's seamless integration with our accounting software has streamlined our financial processes."
              </p>
              <div className="mt-4 flex items-center">
                <Image
                  src="/testimonials/client3.jpg"
                  alt="Client 3"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-3">
                  <p className="text-gray-300 font-medium">Emily Johnson</p>
                  <p className="text-gray-400 text-sm">Finance Director, DEF Industries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We Work With Section */}
      <section className="py-20 bg-black w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-300 sm:text-4xl">
              Brands We Work With
            </h2>
            <p className="mt-4 text-lg text-gray-100">
              Trusted by leading brands in the industry.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 items-center justify-items-center">
            {/* Brand 1 */}
            <div className="flex items-center justify-center">
              <Image
                src="/brands/cat-logo.png"
                alt="Cat"
                width={150}
                height={50}
                className="object-contain transition-transform transform hover:scale-105"
              />
            </div>

            {/* Brand 2 */}
            <div className="flex items-center justify-center">
              <Image
                src="/brands/john-deere-logo.png"
                alt="John Deere"
                width={150}
                height={50}
                className="object-contain transition-transform transform hover:scale-105"
              />
            </div>

            {/* Brand 3 */}
            <div className="flex items-center justify-center">
              <Image
                src="/brands/kubota-logo.png"
                alt="Kubota"
                width={150}
                height={50}
                className="object-contain transition-transform transform hover:scale-105"
              />
            </div>

            {/* Brand 4 */}
            <div className="flex items-center justify-center">
              <Image
                src="/brands/bobcat-logo.png"
                alt="Bobcat"
                width={150}
                height={50}
                className="object-contain transition-transform transform hover:scale-105"
              />
            </div>

            {/* Brand 5 */}
            <div className="flex items-center justify-center">
              <Image
                src="/brands/komatsu-logo.png"
                alt="Komatsu"
                width={150}
                height={50}
                className="object-contain transition-transform transform hover:scale-105"
              />
            </div>

            {/* Brand 6 */}
            <div className="flex items-center justify-center">
              <Image
                src="/brands/brand6.png"
                alt="Brand 6"
                width={150}
                height={50}
                className="object-contain transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-300 sm:text-4xl">
                Ready to manage your Fleet?
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-100">
                Our platform provides everything you need for a fleet of different machines. Don't waste time on scheduling, let the automated system do the work for you.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
              <a
                href="./login"
                target="_blank"
              >
                <Button className="bg-black hover:bg-gray-100 text-white hover:text-black border border-gray-200 rounded-full glass hover:animate-shimmer text-lg px-12 py-6 inline-flex items-center justify-center">
                  Free 14-Day Trial
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
      </>
  );
}
