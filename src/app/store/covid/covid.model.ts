export interface CovidStateModel {
  summary: ISummary,
}

export interface IGlobal {
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  NewRecovered: number,
  TotalRecovered: number,
}

export interface ICountry {
  Country: string,
  CountryCode: string,
  Slug: string,
  NewConfirmed: number,
  TotalConfirmed: number,
  NewDeaths: number,
  TotalDeaths: number,
  NewRecovered: number,
  TotalRecovered: number,
  Date: string,
}

export interface ISummary {
  Global: IGlobal,
  Countries: ICountry[],
  Date: string,
}