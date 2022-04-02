export interface ICategorie {
  id: number,
  name: string,
  products: number[],
}

export interface ICategories {
  categories: ICategorie[],
  selected: number,
}
