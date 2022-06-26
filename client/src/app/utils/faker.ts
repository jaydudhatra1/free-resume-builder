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

  public static get date(): string {
    return faker.date.between();
  }

  public static get pastdate(): string {
    return faker.date.past();
  }

  public static get recentDate(): string {
    return faker.date.recent();
  }

  public static get randomBool(): boolean {
    return faker.datatype.boolean();
  }

  public static get companyNameWithSuffix(): string {
    return faker.company.companyName() + " " + faker.company.companySuffix();
  }

  public static get paragraphs(): string {
    return faker.lorem.paragraphs();
  }

  public static get cityCountry(): string {
    return faker.fake("{{address.city}}, {{address.country}}");
  }

  public static get skill(): string {
    return faker.random.arrayElement(FAKER_SKILLS);
  }

  public static get randomNumber() {
    return faker.mersenne.rand(10, 1);
  }
}




const FAKER_SKILLS = ["C++", "HTML 5", "CSS", "Angular 2+", "DotNet Core", "Electron.js", "Node.js", "MySQL", "MSSSQL", "MongoDB"]; 