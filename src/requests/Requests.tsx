import { IRequest } from "../interfaces/Index";

  export const getAll : IRequest = {
    method: "GET",
    url: "http://localhost:3335/api/v1/film",
    mode:"no-cors",
    params: {limit: 100},
    headers: {
    //   "authorization: "weatherapi-com.p.rapidapi.com",
    //   "token": "72a328c869msh73832b9b0829d05p15c894jsn7cb8cd43dad6" // Json web token
    }
  };

  export const createFilm : any={
    method: "POST",
    url: "http://localhost:3000",
    mode:"no-cors",
    // params: { q: "London" }, //parâmetros da minha consulta
    headers: {
    //   "authorization: "weatherapi-com.p.rapidapi.com",
    //   "token": "72a328c869msh73832b9b0829d05p15c894jsn7cb8cd43dad6" // Json web token
    },
    // body:{
    //   "title":,
    //   "description":,
    //   "release_year:",
    //   "language_id":,
    //   "rental_duration":,
    //   "replacement_cost":,
    //   "rating":,
    //   "special_features":
    // }
  }

  // useEffect(() => {
  //   axios
  //     .request(getAll)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);