import Abstract from "./abstract.js";

const createFilmsListMain = () => {
  return `<section class="films">
  <section class="films-list">
    <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
    <div class="films-list__container js-film-list-main">
    </div>
  </section>
</section>`;
};

export default class FilmsListMain extends Abstract {
  getTemplate() {
    return createFilmsListMain();
  }
}
