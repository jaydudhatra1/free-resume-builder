import * as faker from 'faker';

export class Faker {
  public static get firstName(): string {
    return faker.name.firstName();
  }

  public static get lastName(): string {
    return faker.name.lastName();
  }

  public static get designation(): string {
    return faker.name.title();
  }

  public static get jobDescription(): string {
    return faker.lorem.paragraphs();
  }

  public static get address(): string {
    return faker.fake("{{address.streetName}}, {{address.streetAddress}}, {{address.city}}, {{address.state}}, {{address.zipCode}}");
  }

  public static get phone(): string {
    return faker.phone.phoneNumberFormat();
  }

  public static get email(): string {
    return faker.internet.email();
  }
}
