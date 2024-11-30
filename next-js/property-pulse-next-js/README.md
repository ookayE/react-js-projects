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
