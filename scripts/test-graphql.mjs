const res = await fetch('https://api.serralheriaemguarulhos.com/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `{
      post(id: "motor-ppa-vs-garen-para-portao-qual-e-o-melhor-para-a-sua-casa", idType: SLUG) {
        title
        slug
        seo {
          title
          description
        }
      }
    }`
  })
})
const data = await res.json()
console.log(JSON.stringify(data, null, 2))
