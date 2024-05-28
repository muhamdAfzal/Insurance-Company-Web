# "Insurigo" A insurance webpage

This single page webpage is a insurance company website. Some of its best features are:

- This is a single page website. In this single page all the benefits of the company is advertised.
- This website is fully responsive from mobile screen size to 4k resolution.
- "Our Services" sections data is loaded within cards with useEffect hook, by which the webpage only renders when there is any change of the data in the json file.
- A beautiful and dynamic loader is implemented & shown, when the data of 'Our Services' section is being loaded in the background.
- If the data is somehow not loaded successfully, an error message will be shown in the place of those cards place in "Our Service" section.
- Some components is made for dynamic uses, which reduces the writing of same code multiple times.
- Those components CSS classes are also made dynamically. So each time even though the component is same, their styling can be different.
- Also some default styling is implemented for those components. So if no specific styling for those class is given, the default styling will take place.
- A form modal will pop up upon clicking 'Contact Us' button, 'Contact Us' on navbar & on footer menu. That modals background is blurred for ease of use. The modal will be gone upon clicking 'Submit Your Message' button, clicking background or pressing 'ESC' key on a keyboard.
- The modal also sticks after popping up while scrolling down or up.

## Frontend

- [React Dom](https://react.dev/) for frontend user interfaces.
- [React Vite](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
- [TailwindCSS](https://getbootstrap.com/) A utility-first CSS framework packed with classes and feature-packed frontend toolkit.
- [React Icons](https://react-icons.github.io/react-icons/) for some varities of icons.

Live site link: https://insurigo-insurance.netlify.app/
