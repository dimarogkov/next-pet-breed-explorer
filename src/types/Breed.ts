export interface IBreedImg {
    id: string;
    url: string;
}

export interface IBreedWeight {
    imperial: string;
    metric: string;
}

export interface IBreed {
    id: string;
    name: string;
    type: string;
    cfa_url: string;
    vetstreet_url: string;
    vcahospitals_url: string;
    temperament: string;
    origin: string;
    description: string;
    life_span: string;
    reference_image_id: string;
    weight: IBreedWeight;
}
