import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";

const HomeProperties = () => {
  const recentProperties = properties.slice(0, 3);

  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py6">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          {properties.length === 0 ? (
            <p>No Properties foudn</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recentProperties.map((property) => (
                <PropertyCard key={properties._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="m-auto max-w-large my-10 px-6">
        <Link
          href="/properties"
          className="block bg-black m-auto text-white text-center max-w-2xl py-4 px-6 rounded-xl"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
