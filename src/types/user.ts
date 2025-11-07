export class Geo {
    lat: string;
    lng: string;
  
    constructor(lat: string, lng: string) {
      this.lat = lat;
      this.lng = lng;
    }
  
    static fromJson(json: any): Geo {
      return new Geo(json.lat, json.lng);
    }
  
    toJson(): object {
      return {
        lat: this.lat,
        lng: this.lng
      };
    }
  }
  
  export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  
    constructor(street: string, suite: string, city: string, zipcode: string, geo: Geo) {
      this.street = street;
      this.suite = suite;
      this.city = city;
      this.zipcode = zipcode;
      this.geo = geo;
    }
  
    static fromJson(json: any): Address {
      return new Address(
        json.street,
        json.suite,
        json.city,
        json.zipcode,
        Geo.fromJson(json.geo)
      );
    }
  
    toJson(): object {
      return {
        street: this.street,
        suite: this.suite,
        city: this.city,
        zipcode: this.zipcode,
        geo: this.geo.toJson()
      };
    }
  }
  
  export class Company {
    name: string;
    catchPhrase: string;
    bs: string;
  
    constructor(name: string, catchPhrase: string, bs: string) {
      this.name = name;
      this.catchPhrase = catchPhrase;
      this.bs = bs;
    }
  
    static fromJson(json: any): Company {
      return new Company(json.name, json.catchPhrase, json.bs);
    }
  
    toJson(): object {
      return {
        name: this.name,
        catchPhrase: this.catchPhrase,
        bs: this.bs
      };
    }
  }
  
  export class UserModel {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  
    constructor(
      id: number,
      name: string,
      username: string,
      email: string,
      address: Address,
      phone: string,
      website: string,
      company: Company
    ) {
      this.id = id;
      this.name = name;
      this.username = username;
      this.email = email;
      this.address = address;
      this.phone = phone;
      this.website = website;
      this.company = company;
    }
  
    static fromJson(json: any): UserModel {
      return new UserModel(
        json.id,
        json.name,
        json.username,
        json.email,
        Address.fromJson(json.address),
        json.phone,
        json.website,
        Company.fromJson(json.company)
      );
    }
  
    toJson(): object {
      return {
        id: this.id,
        name: this.name,
        username: this.username,
        email: this.email,
        address: this.address.toJson(),
        phone: this.phone,
        website: this.website,
        company: this.company.toJson()
      };
    }
  
    // Example usage:
    static fromJsonArray(jsonArray: any[]): UserModel[] {
      return jsonArray.map(json => UserModel.fromJson(json));
    }
  }
  
  // Usage example:
  // const user = UserModel.fromJson(jsonData);
  // const users = UserModel.fromJsonArray(jsonArray);
  // const jsonOutput = user.toJson();