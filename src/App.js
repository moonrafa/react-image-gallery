import { useState, useEffect } from 'react'
import ImageCard from './components/ImageCard'
import ImageSearch from './components/ImageSearch'
function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then(res => res.json())
      .then(data => {
        setImages(data.hits)
        setIsLoading(false)
      })
      .catch(err => console.log(err))
  }, [term])
  return (
    <div className="container mx-auto">
      <ImageSearch searchText={text => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-6xl text-center mx-auto mt-32 text-gray-700">
          No images found
        </h1>
      )}
      {isLoading ? (
        <div className="flex justify-center mt-32">
          <svg
            className="loading"
            width="200px"
            height="200px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle cx="84" cy="50" r="10" fill="#e4d8eb">
              <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="0.25s"
                calcMode="spline"
                keyTimes="0;1"
                values="10;0"
                keySplines="0 0.5 0.5 1"
                begin="0s"
              ></animate>
              <animate
                attributeName="fill"
                repeatCount="indefinite"
                dur="1s"
                calcMode="discrete"
                keyTimes="0;0.25;0.5;0.75;1"
                values="#e4d8eb;#9e3ea7;#b06cc5;#caacd4;#e4d8eb"
                begin="0s"
              ></animate>
            </circle>
            <circle cx="16" cy="50" r="10" fill="#e4d8eb">
              <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="0;0;10;10;10"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="0s"
              ></animate>
              <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="16;16;16;50;84"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="0s"
              ></animate>
            </circle>
            <circle cx="50" cy="50" r="10" fill="#caacd4">
              <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="0;0;10;10;10"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.25s"
              ></animate>
              <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="16;16;16;50;84"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.25s"
              ></animate>
            </circle>
            <circle cx="84" cy="50" r="10" fill="#b06cc5">
              <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="0;0;10;10;10"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.5s"
              ></animate>
              <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="16;16;16;50;84"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.5s"
              ></animate>
            </circle>
            <circle cx="16" cy="50" r="10" fill="#9e3ea7">
              <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="0;0;10;10;10"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.75s"
              ></animate>
              <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="16;16;16;50;84"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.75s"
              ></animate>
            </circle>
          </svg>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
