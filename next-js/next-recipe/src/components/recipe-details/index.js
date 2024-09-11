import Link from "next/link";

export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div>
      <Link href={"/recipe-list"}>Go To Recipe List</Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap2">
            <img
              src={getRecipeDetails?.image}
              name={getRecipeDetails?.name}
              className="w-4/5 rounded object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              {getRecipeDetails?.name}
            </h2>
            <div className="gap-4 mt-5">
              <p className="text-3xl text-gray-900">
                {getRecipeDetails?.mealType}
              </p>
              <div className="mt-4">
                <p className="text-xl text-gray-800">
                  {getRecipeDetails?.cuisine}
                </p>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              </div>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {getRecipeDetails.ingredients &&
                getRecipeDetails.ingredients.length > 0 ? (
                  getRecipeDetails.ingredients.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))
                ) : (
                  <p>Nothing to see here</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
