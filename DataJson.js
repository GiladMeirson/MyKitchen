var DataIngredient = [

    {
        id: 1,
        name: 'Pasta',
        img: 'https://www.foodpackaging.guru/pastapackaging/wp-content/uploads/sites/14/2016/01/PFM_pasta-standard-dried.jpg',
        cal:100
    },

    {
        id: 2,
        name: 'Rice',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP4nMeEpcO1nS4YKFlSOv5iSNsauxS3c7s1h7YINZyRqY4zAi2FRYBrPULAnpaP30I0KU&usqp=CAU',
        cal: 112
    },


    {
        id: 3,
        name: 'Fish',
        img: 'https://cdn.britannica.com/05/88205-050-9EEA563C/Bigmouth-buffalo-fish.jpg',
        cal: 150
    },


    {
        id: 4,
        name: 'Meat',
        img: 'https://www.incimages.com/uploaded_files/image/1920x1080/getty_80116649_344560.jpg',
        cal: 175
    },


    {
        id: 5,
        name: 'Milk',
        img: 'data:image/jpeg;base64,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',
        cal: 60
    },


    {
        id: 6,
        name: 'Choclate',
        img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/04/12/fn_healthy-chocolate-getty_s4x3.jpg.rend.hgtvcom.616.462.suffix/1649787692492.jpeg',
        cal: 220
    },


    {
        id: 7,
        name: 'Cucumber',
        img: 'https://speasyil.com/wp-content/uploads/2022/05/%D7%9E%D7%9C%D7%A4%D7%A4%D7%95%D7%9F-%D7%91%D7%90%D7%A0%D7%92%D7%9C%D7%99%D7%AA.jpg',
        cal: 20
    },


    {
        id: 8,
        name: 'Tomato',
        img: 'https://speasyil.com/wp-content/uploads/2022/05/%D7%A2%D7%92%D7%91%D7%A0%D7%99%D7%94-%D7%91%D7%90%D7%A0%D7%92%D7%9C%D7%99%D7%AA.jpg',
        cal: 22
    },



    {
        id: 9,
        name: 'Lettuce',
        img: 'https://speasyil.com/wp-content/uploads/2022/05/%D7%97%D7%A1%D7%94-%D7%91%D7%90%D7%A0%D7%92%D7%9C%D7%99%D7%AA.jpg',
        cal: 20
    },



    {
        id: 10,
        name: 'Carrot',
        img: 'https://speasyil.com/wp-content/uploads/2022/05/%D7%92%D7%96%D7%A8-%D7%91%D7%90%D7%A0%D7%92%D7%9C%D7%99%D7%AA.jpg',
        cal: 16
    },



    {
        id: 11,
        name: 'Pepper',
        img: 'https://speasyil.com/wp-content/uploads/2022/05/%D7%92%D7%9E%D7%91%D7%94-%D7%91%D7%90%D7%A0%D7%92%D7%9C%D7%99%D7%AA.jpg',
        cal: 23
    },


    {
        id: 12,
        name: 'Onion',
        img: 'https://speasyil.com/wp-content/uploads/2022/05/%D7%91%D7%A6%D7%9C-%D7%91%D7%90%D7%A0%D7%92%D7%9C%D7%99%D7%AA.jpg',
        cal: 10
    },










]