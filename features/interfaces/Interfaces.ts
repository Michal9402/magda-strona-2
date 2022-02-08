export interface IData {
    data: [{
        _id: number;
        name: string;
        description: string;
        slug: {
            _type: string;
            current: string;
        }
        image: {
            asset: {
                url: string;
    
            }
        };
    }]
}
export interface IZabieg {
    _id: string;
    _createdAt: string;
    name: string;
    description: string;
    set: boolean;
    slug: {
        current: string;
    };
    body: [object];
    bodyLong: [object]
    pricelist: [Pricelist]
    image: {
        asset: {
            url: string;
        }
    }
}

export interface Pricelist {
    name: string;
    price: number;
    priceForSet: number;
}
