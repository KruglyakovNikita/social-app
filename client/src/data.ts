export interface ICourse {
  id: number;
  title: string;
  img: string;
  description: string;
  longDescription: string;
  price: number;
  author: string;
}
export const courses: ICourse[] = [
  {
    id: 1,
    title: 'First  NodeJS course',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
    description: 'Nulla eiusmod nostrud est irure est ullamco excepteur occaecat amet dolore reprehenderit occaecat cupidatat.',
    longDescription:
      'Dolore cupidatat consectetur ut esse adipisicing et esse. Officia mollit elit ad enim non nisi excepteur excepteur officia nostrud minim. Ex incididunt et occaecat ut nisi minim in ad ex. Quis labore mollit aliquip sunt. Minim labore officia sit consectetur proident deserunt officia eu mollit ullamco adipisicing eiusmod amet.',
    price: 250,
    author: 'Kruliakou Mikita',
  },
  {
    id: 2,
    title: 'Second ReactJS course',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
    description: 'Nulla eiusmod nostrud est irure est ullamco excepteur occaecat amet dolore reprehenderit occaecat cupidatat.',
    longDescription:
      'Dolore cupidatat consectetur ut esse adipisicing et esse. Officia mollit elit ad enim non nisi excepteur excepteur officia nostrud minim. Ex incididunt et occaecat ut nisi minim in ad ex. Quis labore mollit aliquip sunt. Minim labore officia sit consectetur proident deserunt officia eu mollit ullamco adipisicing eiusmod amet.',
    price: 250,
    author: 'Kruliakou Mikita',
  },
  {
    id: 3,
    title: 'Third NestJS course',
    img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--m_Ng9MLF--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/fppjegg7q1kb2pdzmlvf.png',
    description: 'Nulla eiusmod nostrud est irure est ullamco excepteur occaecat amet dolore reprehenderit occaecat cupidatat.',
    longDescription:
      'Dolore cupidatat consectetur ut esse adipisicing et esse. Officia mollit elit ad enim non nisi excepteur excepteur officia nostrud minim. Ex incididunt et occaecat ut nisi minim in ad ex. Quis labore mollit aliquip sunt. Minim labore officia sit consectetur proident deserunt officia eu mollit ullamco adipisicing eiusmod amet.',
    price: 250,
    author: 'Kruliakou Mikita',
  },
];
