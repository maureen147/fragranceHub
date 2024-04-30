import img1 from '../assets/images/image 25.png'
import img2 from '../assets/images/image 28.png'
import img3 from '../assets/images/image 13.png'

const product1 = {
    id: 1,
    name: 'Product 1',
    description: 'Lorem ipsum dolor sit amet hfghgbdyddvh',
    gender: 'Male',
    brand: 'Adidas',
    image: img1,
    fragrance_type: 'Body Spray',
    scent_type: 'Fresh',
    price: 4600000,
    size: 2.3,
    availability: true,
    detail_img1: '../assets/images/Frame 1171276214.png',
    detail_img2: '../assets/images/Frame 1171276214.png',
    detail_img3: '../assets/images/Frame 1171276214.png',
    about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae rem fugiat sapiente molestias voluptatibus suscipit ea odio ipsa, nobis obcaecati? Inventore pariatur harum officiis omnis adipisci quaerat assumenda in sequi?',
    scent_profile: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos perspiciatis qui maiores autem, incidunt modi saepe dicta suscipit consectetur delectus.',
    usage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eligendi enim. Illo voluptates temporibus doloremque molestias at commodi doloribus, eveniet sapiente aspernatur, a vitae quam ratione optio, magni dolorum. Soluta quibusdam facere placeat quisquam impedit saepe fugit eveniet vel consequatur adipisci, amet repellat dolores in ipsam animi nostrum molestias itaque.',
    refund_policy: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis totam eum architecto quae quibusdam sit, delectus optio, aut obcaecati id quasi quo maiores sapiente, dicta est molestiae vero tenetur quidem!',
    isnew: false,
  }
  const product2 = {
    id: 2,
    name: 'Product female',
    description: 'Lorem ipsum dolor sit amet hfghgbdyddvh',
    gender: 'female',
    brand: 'Dior',
    image: img2,
    fragrance_type: 'Body Spray',
    scent_type: 'Fresh',
    price: 4600000,
    size: 2.3,
    availability: true,
    detail_img1: '../assets/images/Frame 1171276215.png',
    detail_img2: '../assets/images/Frame 1171276215.png',
    detail_img3: '../assets/images/Frame 1171276215.png',
    about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae rem fugiat sapiente molestias voluptatibus suscipit ea odio ipsa, nobis obcaecati? Inventore pariatur harum officiis omnis adipisci quaerat assumenda in sequi?',
    scent_profile: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos perspiciatis qui maiores autem, incidunt modi saepe dicta suscipit consectetur delectus.',
    usage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eligendi enim. Illo voluptates temporibus doloremque molestias at commodi doloribus, eveniet sapiente aspernatur, a vitae quam ratione optio, magni dolorum. Soluta quibusdam facere placeat quisquam impedit saepe fugit eveniet vel consequatur adipisci, amet repellat dolores in ipsam animi nostrum molestias itaque.',
    refund_policy: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis totam eum architecto quae quibusdam sit, delectus optio, aut obcaecati id quasi quo maiores sapiente, dicta est molestiae vero tenetur quidem!',
    isnew: false,
  }
  const product3 = {
    id: 3,
    name: 'Product 3',
    description: 'Lorem ipsum dolor sit amet hfghgbdyddvh',
    gender: 'unisex',
    brand: 'Dior',
    image: img3,
    fragrance_type: 'Perfum Oil',
    scent_type: 'Lemon',
    price: 4600000,
    size: 2.3,
    availability: true,
    detail_img1: '../assets/images/Frame 1171276219.png',
    detail_img2: '../assets/images/Frame 1171276219.png',
    detail_img3: '../assets/images/Frame 1171276219.png',
    about: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae rem fugiat sapiente molestias voluptatibus suscipit ea odio ipsa, nobis obcaecati? Inventore pariatur harum officiis omnis adipisci quaerat assumenda in sequi?',
    scent_profile: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos perspiciatis qui maiores autem, incidunt modi saepe dicta suscipit consectetur delectus.',
    usage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eligendi enim. Illo voluptates temporibus doloremque molestias at commodi doloribus, eveniet sapiente aspernatur, a vitae quam ratione optio, magni dolorum. Soluta quibusdam facere placeat quisquam impedit saepe fugit eveniet vel consequatur adipisci, amet repellat dolores in ipsam animi nostrum molestias itaque.',
    refund_policy: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis totam eum architecto quae quibusdam sit, delectus optio, aut obcaecati id quasi quo maiores sapiente, dicta est molestiae vero tenetur quidem!',
    isnew: false,
  }

export const data = [];

for (let i = 0; i < 150; i++) {
    data.push(product1);
    data.push(product2);
    data.push(product3);
    
}