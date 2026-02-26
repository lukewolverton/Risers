export default async function handler(req, res) {

  const symbols = "NVDA,CAVA,FSLR,PYPL,AMD";

  const response = await fetch(
    `https://api.marketstack.com/v1/intraday?access_key=${process.env.MARKETSTACK_KEY}&symbols=${symbols}&interval=1min`
  );

  const data = await response.json();

  res.status(200).json(data);

}
