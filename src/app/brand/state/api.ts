import { Brand } from './../models/Brand';
// brands/...api.ts
export const fetchBrands = () => {
    return fetch('http://api.nodesense.ai/api/brands')
           .then (response => response.json());
}

export const fetchBrand = (id: any) => {
    return fetch(`http://api.nodesense.ai/api/brands/${id}`)
           .then (response => response.json());
}

export const updateBrand = (brand: Brand) => {
    return fetch(`http://api.nodesense.ai/api/brands/${brand.id}`,
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
    return fetch(`http://api.nodesense.ai/api/brands`,
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
    return fetch(`http://api.nodesense.ai/api/brands/${id}`,
                    {
                        method: "DELETE"
                    }
                )
           .then (response => response.json());
}

