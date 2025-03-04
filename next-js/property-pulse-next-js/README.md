Using onClick to change state:
Use the functional updater ((prev) => !prev) when:
The state update depends on the previous state.
You expect potential asynchronous state updates or event overlaps.

Use the simpler version (!isMobileMenuOpen) when:
The state update does not depend on the previous state, or you are certain that there will be no asynchronous updates causing stale state issues.

Use the functional updater ((prev) => !prev) when:

Best Practice in React
To ensure your code is robust and avoids potential bugs, the functional updater approach is generally the better choice, especially for toggling boolean state:

onClick={() => setIsMobileMenuOpen((prev) => !prev)}

Passing objects in as props:

          <InfoBox
            heading="For Property Owners"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: "Add Property",
              link: "/properties/add",
              backgroundColor: "bg-blue-500",
            }}
          >
            List your properties and reach potential tenants. Rent as an airbnb
            or long term.
          </InfoBox>

To be used in child component:

            <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
            <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
            <p className={`${textColor}mt-2 mb-4`}>{children}</p>
            <a
                href={buttonInfo.link}
                className={`inline-block ${buttonInfo.backgroundColor} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
            >
                {buttonInfo.text}
            </a>
            </div>

To make sure your app can read .env:

On home page:
console.log(process.env.MONGODB_URI);

Escaping special characters in MONGODB_URI

Consider revewing Google OAuth setup

Make sure not to use https in nextauth urls

using remote images:
modifying next.config.mjs file to allow externam image patterns
const nextConfig = {
images: {
remotePatterns: [
{
protocol: "https",
hostname: "lh3.googleusercontent.com",
pathname: "**",
},
],
},
};

        export default nextConfig;

Protecting routes in next js with middleware.
Create middleware file in root

        export { default } from "next-auth/middleware";
        export const config = {
          matcher: ["/properties/add", "/profile", "/properties/saved", "/messages"],
        };

Introducing server actions to handle form submissions and data mutations without the need for /api routes.

Creating test end points that return JSON as a way to troubleshoot server-side-code

Used pages/api/testCloudinary to debug environment variables by going to localhost:3000/api/testCloudiary
-no client-side interference
-reusable for other debugging

Checking bookmark status:

Our bookmarkProperty action returns an isBookmarked variable
We've created a state for isBookmarked to keep track of
Using the isBookmarked variable from out bookmarkProperty action, we can assign our state true or false with

      setIsBookmarked(response.isBookmarked);

Then to keep track of the state on refresh, we run a useEffect that checksBookmarkStatus (passing in our property.\_id from our {property} object) and sets our isBookmarked state to whatever the isBookarked variable is set to.

BUILDING MESSAGING SERVICES
-Create Messages schema. In cluding sender and recipient, the property in question, the name, email, and phone of the sender, the body of the message, and whether or not it has been seen.
-Create addMessage action
-Using useActionState (allows you to update state based on the result of a form action), we

-Use hidden inputs to includes the unique ID of the property being contacted. It ensures that when the form is submitted, the backend knows which property the message is related to.
The property ID is required by your backend (addMessage.js) to associate the message with a specific property. Without it, the backend wouldn't know which property the message refers to.
Hidden inputs are used to include important, non-visible data in the form submission. They are especially useful when you need to send contextual information (like property.\_id and property.owner) that the user doesn't need to interact with directly.

CONVERTING TO SERIALIZABLE OBJECTS:

The process whereby an object or data structure is translated into a format suitable for transfer over a network, or storage (e.g. in an array buffer or file format).

In JavaScript, for example, you can serialize an object to a JSON string by calling the function JSON.stringify().

Next.js Server Components Require Serializable Data

Server components can pass only serializable objects (plain objects, arrays, strings, etc.) to client components.
Mongoose documents and other objects with custom methods (like toJSON) must be converted to plain objects before being passed.
Utility Functions Should Handle All Cases

Recursive processing of objects and arrays is crucial for nested data structures.
A robust utility function like convertToSerializableObject ensures consistent handling of all fields.
Correct Usage of .populate()

.populate() should specify the correct field and subfield structure.
Proper syntax avoids fetching unnecessary data or introducing bugs.
Consistent Data Handling

Apply the same serialization process to all data structures to avoid edge cases or partial failures.

Implementing pagination

Using searchParms on server component to acces page(number) and pageSize values. Use countDocuments() Mongoose method to get total number of items to fetch. Adjust Property.find() to limit items on page to our chosen page size. Create a skip variable to make sure we're showing the proper items on each page. Create showPagination boolean value to determine whether or not to Pagination.jsx component.
Pagination component handles the logic of previous and next pages.
