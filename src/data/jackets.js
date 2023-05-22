
const jacketSvg = (color) => {
  return ( <svg width="60" height="80" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50,10 150,10 170,200 30,200" fill={`${color}`} />
    <line x1="100" y1="10" x2="100" y2="200" stroke="grey" strokeWidth="3"/>
    <circle cx="65" cy="150" r="10" fill="grey" />
    <circle cx="135" cy="150" r="10" fill="grey" />
  </svg>)
}

export const jackets = [
  {
    name: 'Classic Leather Jacket',
    description: 'A black, genuine leather jacket with a full zipper and two side pockets.',
    image: (
      jacketSvg("black")
    ),
  },
  {
    name: 'Blue Denim Jacket',
    description: 'A blue denim jacket with silver buttons and two chest pockets.',
    image: (
      jacketSvg("blue")
    ),
  },
  {
    name: 'Red Windbreaker',
    description: 'A lightweight red windbreaker with a hood and zip-front closure.',
    image: (
      jacketSvg("red")
    ),
  },
  {
    name: 'Green Parka',
    description: 'A warm green parka with faux fur trim on the hood and a drawstring waist.',
    image: (
      jacketSvg("green")
    ),
  },
  {
    name: 'Brown Bomber Jacket',
    description: 'A brown bomber jacket with ribbed cuffs and a zip-front closure.',
    image: (
      jacketSvg("brown")
    ),
  },
  {
    name: 'Gray Hoodie',
    description: 'A comfortable gray hoodie with a front pouch pocket and drawstring hood.',
    image: (
      jacketSvg("gray")
    ),
  },
];
