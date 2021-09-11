import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Condo', 'Apartment', 'Townhouse'];

export default class RentalRoute extends Route {
  async model(params) {
    let response = await fetch(`api/rental/${params.rental_id}.json`);
    let { data } = await response.json();

    let { id, attributes } = data;
    let type;
    if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
      type = 'community';
    } else {
      type = 'Standalone';
    }
    return { id, type, ...attributes };
  }
}
