const API = "https://api.escuelajs.co/api/v1";

const postData = async (urlApi, data) => {
  try {
    /* throw new Error('SOME PROBLEM'); */
    const res = await fetch(urlApi, {
      method: "POST",
      code: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

const data = {
  title: "Arepa X1",
  price: 5,
  description: "X1",
  categoryId: 1,
  images: ["https://placeimg.com/640/480/any"],
};

const arepas = [
  {
    title: "Arepa 1",
    price: 5,
    description: "Arepa 1",
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"],
  },
  {
    title: "Arepa 2",
    price: 5,
    description: "Arepa 2",
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"],
  },
  {
    title: "Arepa 3",
    price: 5,
    description: "Arepa 3",
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"],
  },
  {
    title: "Arepa 4",
    price: 5,
    description: "Arepa 4",
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"],
  },
  {
    title: "Arepa 5",
    price: 5,
    description: "Arepa 5",
    categoryId: 1,
    images: ["https://placeimg.com/640/480/any"],
  },
];

function* arepasGen(items) {
  for (const item of items) {
    yield item;
  }
}
const itAre = arepasGen(arepas);
for (let i = 0; i < arepas.length; i++) {
  console.time("Tiempo");
  postData(`${API}/products/`, itAre.next().value)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch(() => console.log(error));
  console.timeEnd("Tiempo");
}

// Sin generador Yield
// Enviadas en post => id 61, id: 62

// con generador Yield
// Enviadas en post => id: 77 al id: 81
