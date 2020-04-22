import { HTTP } from '../helpers/http-common';
import Glide from '@glidejs/glide';

const params = {
  id: 1,
};

const images = [
  {
    src: './assets/img',
  },
];

const init = async () => {
  try {
    const users = (await HTTP.get('/users')).data;
    const posts = (await HTTP.get('/posts')).data;
    const slides = users.map((user) => {
      let postToAdd = posts.find((post) => post.userId === user.id);
      return {
        name: user.name,
        ...postToAdd,
      };
    });

    console.log({ slides });

    const carouselSection = document.getElementById('testimonials');

    carouselSection.innerHTML = `
      <div class="container">
        <h2 class="mx-auto text-center font-weight-bold mb-30">
          Testimonials
        </h2>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="glide">
              <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                ${slides
                  .map(({ body, name }) => {
                    return `
                    <li class="glide__slide slide">
                      <div class="d-flex flex-column align-items-center justify-content-center">
                        <img class="slide__image mb-10 rounded-circle shadow mb-10" src="./assets/img/person_4.jpg" alt="person">
                        <p class="text-center gray-color-text mb-5 slide__body">
                          "${body}"
                        </p>
                        <h4 class="font-weight-bold slide__name">
                          ${name}
                        </h4>
                      </div>
                    </li>
                    `;
                  })
                  .join('')}
                </ul>
                <div class="glide__bullets pt-30" data-glide-el="controls[nav]">
                  ${slides
                    .map((slide, i) => {
                      return `<button class="glide__bullet color-" data-glide-dir="=${i}"></button>`;
                    })
                    .join('')}
                </div>
              </div>
            </div>            
          </div>
        </div>      
      </div>          
    `;

    new Glide('.glide').mount();
  } catch (error) {
    throw error;
  }
};

export default {
  init,
};
