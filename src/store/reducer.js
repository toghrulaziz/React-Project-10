let initialState = {
    goodsArray: [
        { "product_name": "Kişi köynəyi", "product_description": "Mavi rəngdə, 100% pamuk", "product_price": 50 },
        { "product_name": "Qadın bluzası", "product_description": "Dəri detallı, qara rəngdə", "product_price": 60 },
        { "product_name": "Kişi pantolonu", "product_description": "Qəhvəyi rəng, kənar cebi", "product_price": 75 },
        { "product_name": "Qadın eteyi", "product_description": "Qırmızı rəng, mini", "product_price": 40 },
        { "product_name": "Kişi dəsmalı", "product_description": "Nəqşdar dizayn", "product_price": 20 },
        { "product_name": "Qadın çantası", "product_description": "Əlgötürən, dəri", "product_price": 90 },
        { "product_name": "Kişi botları", "product_description": "Qış üçün, suya davamlı", "product_price": 120 },
        { "product_name": "Qadın ayaqqabıları", "product_description": "Yüksək tapan, lacivərt", "product_price": 85 },
        { "product_name": "Kişi papağı", "product_description": "Qara rəngdə, dəri", "product_price": 45 },
        { "product_name": "Qadın şalvarı", "product_description": "Göy rəngdə, kaşmir", "product_price": 70 },
        { "product_name": "Kişi palto", "product_description": "Süət dəri, qara rəngdə", "product_price": 250 },
        { "product_name": "Qadın jaketi", "product_description": "Uzun, qaşqır", "product_price": 200 },
        { "product_name": "Kişi kəməri", "product_description": "Dəri, metal tokalı", "product_price": 40 },
        { "product_name": "Qadın badlonu", "product_description": "Retro stil, qızıl rəngdə", "product_price": 180 },
        { "product_name": "Kişi şortu", "product_description": "Spor stil, elastik", "product_price": 60 },
        { "product_name": "Qadın maykası", "product_description": "Boyalı nəqş, pamuklu", "product_price": 45 },
        { "product_name": "Kişi saatı", "product_description": "Qara rəngdə, analog", "product_price": 150 },
        { "product_name": "Qadın bəzək", "product_description": "Qızıl, komplekt", "product_price": 220 },
        { "product_name": "Kişi atkısı", "product_description": "Xəzəl rəng, uzun", "product_price": 35 },
        { "product_name": "Qadın bantı", "product_description": "Metal detallı, elastik", "product_price": 50 },
        { "product_name": "Kişi kostyumu", "product_description": "İki parçalı, qara rəngdə", "product_price": 320 },
        { "product_name": "Qadın kombinezonu", "product_description": "Yaz üçün, açıq rəng", "product_price": 150 },
        { "product_name": "Kişi sviteri", "product_description": "Düz rəng, yüngül", "product_price": 70 },
        { "product_name": "Qadın ziyafət geyimi", "product_description": "Düzənşən, yaz üçün", "product_price": 95 },
        { "product_name": "Kişi sport formaları", "product_description": "Spandex, idman üçün", "product_price": 55 },
        { "product_name": "Qadın bikini", "product_description": "Tropik nəqş, elastik", "product_price": 45 },
        { "product_name": "Kişi çantası", "product_description": "Dizayner, əsas bölməsi", "product_price": 100 },
        { "product_name": "Qadın ətri", "product_description": "Gül ətri, uzunömürlü", "product_price": 80 },
        { "product_name": "Kişi şalı", "product_description": "Səliqəli, çoxrəngli", "product_price": 25 },
        { "product_name": "Qadın sutyeni", "product_description": "Destəklənmiş, rahat", "product_price": 65 }
    ]
    ,
    myBagArray: [],
    postData: null,
    deleteDataFromBag: null,
    deleteDataFromGoods: null,
    adminEdited: null
}


export function reducer(state = initialState, action) {
    if (action.type === 'DELETE') {
        let newArr = [...state.goodsArray]
        newArr = newArr.filter((item) => item.product_name !== action.payload)
        return { ...state, goodsArray: newArr }
    } 
    else if(action.type === 'ADD PRODUCT'){
        return{
            ...state,
            goodsArray: [...state.goodsArray, action.payload]
        }
    }
    else if (action.type === 'UPDATE') {
        const updatedArray = state.goodsArray.map(item => {
            if (item.product_name === action.payload.product_name) {
                return {
                    ...item,
                    product_name: action.payload.product_name,
                    product_description: action.payload.product_description,
                    product_price: action.payload.product_price
                };
            }
            return item;
        });
        return { ...state, goodsArray: updatedArray };
    }

    return { ...state }
}