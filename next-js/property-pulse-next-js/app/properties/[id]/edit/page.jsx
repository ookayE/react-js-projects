import PropertyEditForm from "@/components/PropertyEditForm";
import connectDB from "@/config/db";
import Property from "@/models/Property";
import { convertToSerializableObject } from "@/utils/convertToObject";
import { FaRegTired } from "react-icons/fa";

const PropertyEditPage = async ({ params }) => {
  //connect to DB
  await connectDB();

  const propertyDoc = await Property.findById(params.id).lean();
  const property = convertToSerializableObject(propertyDoc);

  if (!property) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }

  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 border shadow-md rounded-md m-4 md:m-0">
          <PropertyEditForm property={property} />
        </div>
      </div>
    </section>
  );
};

export default PropertyEditPage;
