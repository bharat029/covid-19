export interface CovidStateModel {
  darkTheme: boolean,
  all?: IGlobal,
  countries?: ICountry[],
  india?: ICountry,
  historical?: IHistoricalCountry[],
}

export interface IGlobal {
  cases: number,
  todayCases: number,
  deaths: number,
  todayDeaths: number, 
  recovered: number,
  active: number,
  critical: number,
  casesPerOneMillion: number,
  deathsPerOneMillion: number,
  tests: number,
  testsPerOneMillion: number,
  affectedCountries: number,
  updated: number,
}

export interface ICountry {
  country: string,
  countryInfo: ICountryInfo,
  cases: number,
  todayCases: number,
  deaths: number,
  todayDeaths: number, 
  recovered: number,
  active: number,
  critical: number,
  casesPerOneMillion: number,
  deathsPerOneMillion: number,
  tests: number,
  testsPerOneMillion: number,
  updated: number,
}

export interface ICountryInfo {
  _id: number,
  iso2: string,
  iso3: string,
  lat: number,
  long: number,
  flag: string,
}

export interface IHistoricalCountry {
  country: string,
  province?: string,
  timeline: IHistoricalArr,
}

export interface IHistoricalArr {
  cases: any,
  deaths: any,
  recovered: any,
}