let rawValidCats = {
    schemaIndex: '1',
    cats: [
        {
            catname: 'Grocery',
            subcats: [
                {
                    catname: 'Dry Foods',
                    subcats: [
                        {
                            catname: 'Bengali',
                            features: [
                                {
                                    fieldname: 'Brand',
                                    options: [
                                        'Minicate',
                                        '28'
                                    ]
                                },
                                {
                                    fieldname: 'Product',
                                    options: [
                                        'Chal',
                                        'Dal',
                                        'Ata'
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            catname: "Men's Fashion",
            subcats: [
                {
                    catname: 'Clothing',
                    subcats: [
                        {
                            catname: 'Shirts',
                            features: [
                                {
                                    fieldname: 'Brand',
                                    options: [
                                        'Minicate',
                                        '28'
                                    ]
                                },
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

module.exports = rawValidCats;