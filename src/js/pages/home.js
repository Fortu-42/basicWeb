import '../../scss/app.scss';

import featuresSection from '../functions/featuresSection';
import carousel from '../functions/carousel';
import mobileMenu from '../functions/mobileMenu';
import aos from '../helpers/aos';

(function () {
  // your page initialization code here
  // the DOM will be available here
  featuresSection.init();
  carousel.init();
  mobileMenu.init();
})();
