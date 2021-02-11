export default async (req, res) =>{

    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const data = await response.json()
    const photos = []

    for(let i = 0; i < 5; i++){
        photos.push(data[i].url)
    }
    
    res.json({
        photos
    })
}