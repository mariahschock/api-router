export default async function parse(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (data) => (body += data.toString()));
    req.on('end', () => {
      console.log(body);
      resolve(JSON.parse(body));
    });
    req.on('error', reject);
  });
}
