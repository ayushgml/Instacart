import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Smallcard from '../components/Smallcard';
import Largecard from '../components/Largecard';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Instacart Clone by Ayush</title>
        <link
          rel="icon"
          href="https://im7.ezgif.com/tmp/ezgif-7-72a5117c39a0.png"
        />
      </Head>

      <Header />

      <Banner />

      {/* Browse stores */}
      <main className="max-w-5 xl mx-auto px-8 sm:px-16">
        <section className="pt-6 mb-10">
          <h2 className="text-4xl pb-5 font-light">Browse stores in Vellore</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Smallcard
              img="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1487/5ffe3fb7-2a0c-4714-8c71-364d7186a3d3.png"
              store="Wallmart"
              delivery="Delivery by 3:40pm"
            />

            <Smallcard
              img="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/279/0d43b5d2-9d07-4a30-a0ee-0e16d5922411.png"
              store="Sprouts Farmer Market"
              delivery="Delivery by 1:35pm"
            />

            <Smallcard
              img="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1723/519586f9-471d-4bee-892e-72b99945ebaa.png"
              store="The Container Store"
              delivery="Delivery by 1:45pm"
            />

            <Smallcard
              img="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1831/cd67e0ba-6568-422e-901c-c943d898ff36.png"
              store="FoodsCoDelivery Now"
              delivery="Delivery by 1:20pm"
            />

            <Smallcard
              img="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1390/579cb2af-b731-4cec-826d-bc1c1ecbf335.png"
              store="7-Eleven"
              delivery="Delivery by 1:45pm"
            />

            <Smallcard
              img="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1425/19995a72-b824-4fe1-bf00-488d1c9b33b7.png"
              store="Dollar Tree"
              delivery="Delivery by 2:05pm"
            />

            <Smallcard
              img="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png"
              store="Costco"
              delivery="Delivery by 1:30pm"
            />

            <Smallcard
              img="https://d2d8wwwkmhfcva.cloudfront.net/96x96/d2lnr5mha7bycj.cloudfront.net/warehouse/logo/1493/62072190-49d5-4286-85c1-aa2ecfa184c5.png"
              store="Sephora"
              delivery="Delivery by 1:25pm"
            />
          </div>
        </section>

        <section className="mb-10 overflow-scroll">
        <h2 className="text-4xl pb-5 font-light">Grocery delivery you can count on</h2>
          <div className="flex space-x-3 ml-4 p-2 overflow-scroll">
            <Largecard
              title="Choose what you want"
              matter="Select items from your favorite grocery stores at Instacart.com or in the app."
              img="https://www.instacart.com/assets/homepage/how_it_works-163dcc1c8f91c63d7b0bdb648b5370a89267d54c8cb90bd858495395b8a9e5f3.jpg"
            />

            <Largecard
              title="See real-time updates"
              matter="Personal shoppers pick items with care. Chat as they shop and manage your order."
              img="https://www.instacart.com/assets/homepage/real_time_updates-8330ec94f4d8006c6732bb2f65141e3596dcd3be02b0bf0376dcf5e2895fe37e.jpg"
            />

            <Largecard
              title="Get your items same-day"
              matter="Pick a convenient time for you. Enjoy Instacart’s 100% quality guarantee on every order."
              img="https://www.instacart.com/assets/homepage/same_day_delivery-a00a9a59cbdfc41e7449cbdd04c12d27303284bef1a8fe957ec2a0112a70d7e7.jpg"
            />
          </div>
        </section>

        <div className="items-center content-center pl-20">
          <button
            className="text-white sm:text-lg shadow-md mt-2  bg-green-500 py-3 px-5 
                rounded-2xl md:py-2 px-7 lg:py-3 px-10 font-bold hover:shadow-xl active:scale-90
                transition duration-150 mb-20 ml-12">
            Start Shopping
        </button>
        </div>

        
        </main>

      {/* Big card */}

      {/* Big image */}

      {/* Common questions */}

      {/* Footer (optional) */}
    </div>
  );
}
