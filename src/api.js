import axios from 'axios';


const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
       Authorization: 'Client-ID J8hPf6fn5gXuFj32gLy7H28Fz761ZUGUG8_CzO6AQMw',
    },
    params: {
       query: 'cars',
    },
   });

   console.log(response);

   return response;
};

export default searchImages;