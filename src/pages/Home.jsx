import { Rating } from "@material-tailwind/react";


const Home = () => {


  const product = {
    "id": 1,
    "title": "Essence Mascara Lash Princess",
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "category": "beauty",
    "price": 9.99,
    "discountPercentage": 7.17,
    "rating": 4.94,
    "stock": 5,
    "tags": [
      "beauty",
      "mascara"
    ],
    "brand": "Essence",
    "sku": "RCH45Q1A",
    "weight": 2,
    "dimensions": {
      "width": 23.17,
      "height": 14.43,
      "depth": 28.01
    },
    "reviews": [
      {
        "rating": 2,
        "comment": "Very unhappy with my purchase!",
        "date": "2024-05-23T08:56:21.618Z",
        "reviewerName": "John Doe",
        "reviewerEmail": "john.doe@x.dummyjson.com"
      },
    ],
    "returnPolicy": "30 days return policy",
    "minimumOrderQuantity": 24,
    "images": [
      "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
    ],
    "thumbnail": "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png"
  };
  return (
    <div className='p-5 space-y-3'>

      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <img className="h-[200px] w-[200px]" src={product.thumbnail} alt="" />
      <div className="flex gap-3">
        {product.tags.map((tag, i) => {
          return <h1 key={i}>{tag}</h1>
        })}
      </div>

      <div>
        {product.reviews.map((rev) => {
          return <div key={rev.date}>
            <h1>{rev.comment}</h1>
            <p>{rev.date}</p>
            <Rating value={rev.rating} />

          </div>
        })}
      </div>








    </div>
  )
}

export default Home