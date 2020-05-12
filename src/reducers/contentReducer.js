const initialState = {
  users: [],
  user: {
    id: 0,
    favourite: false,
    name: "Gilbert Morton",
    age: 30,
    phone: "(369) 432-9206",
    image: "sheep",
    phrase: "Japman somam mes lizmasapa om zefopi ki wa ogju mofrajnir denba uc famoso opeipu woul.",
    video: "shoe",
  },
};

export function contentReducer(state = initialState, action) {
  return state;
}
