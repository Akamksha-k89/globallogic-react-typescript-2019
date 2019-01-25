import { Brand } from './../models/Brand';
// brands/...api.ts

const apiEndPoint = 'http://api.nodesense.ai/api';

export const fetchBrands = () => {
    return fetch(`${apiEndPoint}/brands`)
           .then (response => response.json());
}

export const fetchBrand = (id: any) => {
    return fetch(`${apiEndPoint}/brands/${id}`)
           .then (response => response.json());
}

export const updateBrand = (brand: Brand) => {
    return fetch(`${apiEndPoint}/brands/${brand.id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(brand) // body data type must match "Content-Type" header
                    })
           .then (response => response.json());
}


export const createBrand = (brand: Brand) => {
    return fetch(`${apiEndPoint}/brands`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(brand) // body data type must match "Content-Type" header
                    })
           .then (response => response.json());
}

export const saveBrand = (brand: Brand) => {
    if (brand.id) {
        return updateBrand(brand);
    } else {
        return createBrand(brand);
    }
}


export const deleteBrand = (id: any) => {
    return fetch(`${apiEndPoint}/brands/${id}`,
                    {
                        method: "DELETE"
                    }
                )
           .then (response => response.json());
}

