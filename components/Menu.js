// This is the data we will be using, study it but don't change anything, yet.

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];
const menuMaker = document.querySelector('.lambda-menu')



  function makeMenu([menuItems])  {

    const menu = document.createElement('div')
    const menuButton = document.createElement('button')

    menu.appendChild(menu)
    menuButton.appendChild(menuButton)

    menu.classList.add('menu', 'menu-open')
    menuButton.classList.add('menu-button')

    menu.textContent = "Lambda menu"
    menuButton.textContent = "Open/Close menu"

    menuButton.addEventListener('click', () => {
      menu.classList.toggle('menu-open')
    });
    menuItems.forEach((item) =>  {
      menuMaker.appendChild(makeMenu(item.students, item.faculty, item.whatsNew, item.techTrends, item.music, item.logOut));
      });

      return menu;
  }

  console.log(makeMenu('student menu', 'faculty menu', 'what is new', 'tech trends', 'music', 'log out' ))
/*
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/
