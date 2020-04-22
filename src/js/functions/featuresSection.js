const init = () => {
  const features = [
    {
      icon: 'icon-sync',
      title: 'Business Consulting',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quas obcaecati vero similique provident',
      url: {
        text: 'Lear More',
        link: 'google.com',
        isSelf: true,
      },
    },
    {
      icon: 'icon-home',
      title: 'Business Consulting',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quas obcaecati vero similique provident',
      url: {
        text: 'Lear More',
        link: 'google.com',
        isSelf: true,
      },
    },
    {
      icon: 'icon-shopping-bag',
      title: 'Business Consulting',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quas obcaecati vero similique provident',
      url: {
        text: 'Lear More',
        link: 'google.com',
        isSelf: true,
      },
    },
    {
      icon: 'icon-adjust2',
      title: 'Business Consulting',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quas obcaecati vero similique provident',
      url: {
        text: 'Lear More',
        link: 'google.com',
        isSelf: true,
      },
    },
    {
      icon: 'icon-tag_faces',
      title: 'Business Consulting',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quas obcaecati vero similique provident',
      url: {
        text: 'Lear More',
        link: 'google.com',
        isSelf: true,
      },
    },
    {
      icon: 'icon-plug',
      title: 'Business Consulting',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti quas obcaecati vero similique provident',
      url: {
        text: 'Lear More',
        link: 'google.com',
        isSelf: true,
      },
    },
  ];

  const featuresSection = document.getElementById('features');

  featuresSection.innerHTML = `
        <h2 class="mx-auto text-center font-weight-bold mb-lg-20 mb-20">Features</h2>
        <div class="container">
            <div class="row">
                ${features
                  .map(
                    (
                      {
                        icon,
                        title,
                        description,
                        url: { isSelf },
                        url: { link },
                        url: { text },
                      },
                      i,
                    ) => {
                      return `
                        <div data-aos="fade-up" data-aos-delay="${
                          100 * i
                        }" class="col-lg-4 col-md-6 col-12 mb-15">
                            <div class="features__item bg-white rounded py-20 px-15">
                                <i class="${icon}"></i>
                                <h4 class="mt-12 mb-7 font-weight-semibold">${title}</h4>
                                <p class="mb-10">${description}</p>
                                <a class="color-primary" target=${
                                  isSelf ? '_self' : '_blank'
                                }  href="${link}">
                                ${text}
                                </a>
                            </div>
                        </div>        
                    `;
                    },
                  )
                  .join('')}
            </div>
        </div>
    `;
};
export default {
  init,
};
