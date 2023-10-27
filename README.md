## [Search Info App (responsive)](https://vch-sh.github.io/search-info-app/) 
**Ctrl/Command** + click to open a link in a new window

Search Info App is a web application built with React and Redux that allows users to search, add, and manage user information. Users can input a person's first name, last name, email, and phone number, and the app provides features to add random users, sort users alphabetically, and search for users by name.

### This project allowed me to practice various skills and gain valuable experience in front-end development. Here's what I learned and practiced during the development process:

* **React Components**: I created and managed various React components to build a modular and maintainable app structure. Components such as Form, UserList, CustomInput, CustomButton, and Container were developed to encapsulate specific functionalities.

* **Redux State Management**: I used Redux to manage the application's state. This included handling user data, error messages, and user input filtering.

* **Redux Toolkit**: I employed Redux Toolkit to streamline Redux development. It made actions, reducers, and the store setup more efficient and concise.

* **Asynchronous Data Fetching**: The app fetches random user data both from a predefined list and via an external API. I practiced asynchronous data fetching using Redux Thunk for API requests and state updates.

* **User Input Check**: I implemented a user input check to ensure that all required fields are completed before adding a user. Users receive informative error messages if they attempt to add an incomplete user or leave essential fields empty.

* **Error Handling**: I handled errors by displaying informative messages using the react-toastify library. Users receive feedback in case of invalid input or API request failures.

* **Search and Filtering**: I provided a search input for users to filter the displayed user list by name. The app also supports sorting users in ascending order by their first names.

* **Styling with SCSS**: I used SCSS (Sass) to style the app's components, resulting in more organized and maintainable CSS code. This approach allowed for features like variables and nesting.

* **Responsive Design**: The Search Info App adapts to various screen sizes and devices, ensuring a user-friendly experience whether you're accessing it on a desktop, tablet, or mobile device. The responsive design allows users to manage their information comfortably, regardless of the device they are using.

This responsive approach enhances the accessibility and usability of the app, making it versatile and user-centric.

* **UUID Generation**: I generated unique identifiers (UUIDs) for each user using the uuid library, ensuring each user has a distinct ID.

* **Git and GitHub**: I managed the project's source code using Git and maintained a GitHub repository for version control.

This project provided hands-on experience in front-end development and enhanced my skills in React, Redux, and Redux Toolkit. The app aims to help users manage their user information effectively and offers features for a seamless user experience.

Thank you for exploring the Search Info App! 👋📝