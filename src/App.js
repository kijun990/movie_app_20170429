
function Food({name,picture}) {
  return (
  <div>
    <h2>I like {name}</h2>
    <img src={picture} />
  </div>
  )
}


const foodILike = [
  {
    name: 'Kimchi',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.1store.io%2FofficialProductImage%2F1587198787425-0712162682417814.png&f=1&nofb=1'
  },
  {
    name: 'Samgyeopsal',
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.v0RiALj-qb0tA3TaocYnVAHaE7%26pid%3DApi&f=1"
  },
  {
    name: 'Bibimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.g0DjJtJTiIv7_n80NDiP0gHaHP%26pid%3DApi&f=1'
  },
  {
    name: 'Doncasu',
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DxkwyyLp8y5OyBlvX2xbXwHaEO%26pid%3DApi&f=1'
  },
  {
    name: 'Kimbap',
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frecipe.ezmember.co.kr%2Fcache%2Frecipe%2F2015%2F04%2F04%2F74948292d9f3b94cf248bab1c2ce71f21.jpg&f=1&nofb=1'
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish=> <Food key={dish.name} name={dish.name} picture={dish.image} />)}
    </div>
  );
}

export default App;
