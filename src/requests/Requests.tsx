import { IRequest } from "../interfaces/Index";

  export const getAll : IRequest = {
    method: "GET",
    url: "http://localhost:3333",
    mode:"no-cors",
    // params: { q: "London" }, //parâmetros da minha consulta
    headers: {
    //   "authorization: "weatherapi-com.p.rapidapi.com",
    //   "token": "72a328c869msh73832b9b0829d05p15c894jsn7cb8cd43dad6" // Json web token
    }
  };

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