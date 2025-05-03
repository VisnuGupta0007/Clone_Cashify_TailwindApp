import React from 'react';

function Deals() {
  return (
    <>
      {/* Hot Deals Section */}
      <div className='bg-gray-200 mt-10 mb-10 px-6 sm:px-20 py-10'>
        <h1 className='text-3xl sm:text-4xl font-bold'>Hot Deals</h1>
        <p className='text-gray-500 mt-2.5'>Exciting offers for more value</p>

        <div className='flex gap-5 flex-wrap justify-center mt-10'>
          <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/5'>
            <img
              src="https://s3no.cashify.in/estore/d2866450bd5d4aec83dbf61277ab5e3f.webp?p=es3&s=es"
              alt="Deal 1"
              className='w-full'
            />
          </div>

          <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/5'>
            <img
              src="https://s3no.cashify.in/estore/60a36c0f312c4cb88bb7612ad7e583e8.webp?p=es3&s=es"
              alt="Deal 2"
              className='w-full'
            />
          </div>

          <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/5'>
            <img
              src="https://s3no.cashify.in/estore/8123d1f070bb49b6bc8bbae2dccbd4be.webp?p=es3&s=es"
              alt="Deal 3"
              className='w-full'
            />
          </div>

          <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/5'>
            <img
              src="https://s3no.cashify.in/estore/4ea9f5e5bb2648a4ad05395b0b8e7e20.webp?p=es3&s=es"
              alt="Deal 4"
              className='w-full'
            />
          </div>
        </div>
      </div>

      {/* Trending Articles Section */}
      <div className='bg-gray-200 pt-5'>
        <h1 className='text-2xl sm:text-3xl font-bold ml-6 sm:ml-24 mt-10 mb-6'>
          Trending Articles
        </h1>

        <div className='flex flex-wrap justify-center gap-14 px-6 sm:px-24'>
          {/* Article 1 */}
          <div className='w-full sm:w-96'>
            <img
              src="https://s3bo.cashify.in/gpro/uploads/2025/05/01190319/Samsung-One-UI-7.0.webp?p=gp2&s=gp"
              alt="Samsung One UI 7.0"
              className='w-full rounded-lg'
            />
            <h2 className='text-lg font-bold mt-3.5'>
              Samsung One UI 7.0 New Camera Features: Full List!
            </h2>
            <p className='text-gray-500'>
              The best thing about the new Samsung update is the One UI 7.0 camera features! From camera tools to amazing AI features, it's a complete photography package. In this article, we will specifically discuss camera features.
            </p>
            <p className='text-gray-500 mt-3.5'>1st May 2025</p>
          </div>

          {/* Article 2 */}
          <div className='w-full sm:w-96'>
            <img
              src="https://s3bo.cashify.in/gpro/uploads/2025/04/30173826/Snapdragon-8-Elite-vs-Dimensity-9400.png?p=gp2&s=gp"
              alt="Snapdragon 8 Elite vs Dimensity 9400"
              className='w-full rounded-lg'
            />
            <h2 className='text-lg font-bold mt-3.5'>
              Dimensity 9400 Vs Snapdragon 8 Elite: Gaming And AI Faceoff 2025
            </h2>
            <p className='text-gray-500'>
              Flagship phones come with advanced processors aimed at enhancing your overall user experience. Two such processors that are leading the market in 2025 are MediaTek Dimensity 9400 vs Snapdragon 8 Elite.
            </p>
            <p className='text-gray-500 mt-3.5'>30th Apr 2025</p>
          </div>

          {/* Article 3 */}
          <div className='w-full sm:w-96'>
            <img
              src="https://s3bo.cashify.in/gpro/uploads/2025/04/30161426/reasons-to-pick-iPhone-14-Plus.webp?p=gp2&s=gpF"
              alt="MediaTek Dimensity 9500"
              className='w-full rounded-lg'
            />
            <h2 className='text-lg font-bold mt-3.5'>
              MediaTek Dimensity 9500 Processor: Features Revealed Before Launch
            </h2>
            <p className='text-gray-500'>
              Mediatek is developing powerful chipsets, and the latest one, MediaTek Dimensity 9500, is a direct competitor to the Snapdragon 8 Elite.
            </p>
            <p className='text-gray-500 mt-3.5'>30th Apr 2025</p>
          </div>
        </div>

        {/* Additional Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 px-6 sm:px-20 my-14">
          {/* Article 4 */}
          <div className="p-4 flex gap-2.5">
            <div>
              <img
                src="https://s3bo.cashify.in/gpro/uploads/2025/04/30125930/12GB-RAM-vs-8GB-RAM-How-Much-Do-You-Really-Need-in-2025.webp?p=gp2&s=gp"
                alt="12GB RAM vs 8GB RAM"
                className='w-32 rounded-lg'
              />
            </div>
            <div>
              <h1 className='text-lg font-bold'>
                12GB RAM vs 8GB RAM: How Much Do You Really Need in 2025?
              </h1>
              <p className='text-gray-500 mt-6'>30th Apr 2025</p>
            </div>
          </div>

          {/* Article 5 */}
          <div className="p-4 flex gap-2.5">
            <div>
              <img
                src="https://s3bo.cashify.in/gpro/uploads/2025/04/30145153/Exynos-Processor-List.webp?p=gp2&s=gp"
                alt="Exynos Processor Ranking"
                className='w-32 rounded-lg'
              />
            </div>
            <div>
              <h1 className='text-lg font-bold'>
                Exynos Processor Ranking 2025: Full List & Performance Comparison
              </h1>
              <p className='text-gray-500 mt-6'>29th Apr 2025</p>
            </div>
          </div>

          {/* Article 6 */}
          <div className="p-4 flex gap-2.5">
            <div>
              <img
                src="https://s3bo.cashify.in/gpro/uploads/2025/04/29164936/UPI-Circle.webp?p=gp2&s=gp"
                alt="What is UPI Circle?"
                className='w-32 rounded-lg'
              />
            </div>
            <div>
              <h1 className='text-lg font-bold'>
                What is UPI Circle? Set it Up in Google Pay, PhonePe, and Paytm
              </h1>
              <p className='text-gray-500 mt-6'>29th Apr 2025</p>
            </div>
          </div>

          {/* Article 7 */}
          <div className="p-4 flex gap-2.5">
            <div>
              <img
                src="https://s3bo.cashify.in/gpro/uploads/2025/04/29151129/Exynos-1380-Vs-Snapdragon-778G-feature.webp?p=gp2&s=gp"
                alt="Exynos 1380 vs Snapdragon 778G"
                className='w-32 rounded-lg'
              />
            </div>
            <div>
              <h1 className='text-lg font-bold'>
                Exynos 1380 Vs Snapdragon 778G: Gaming And Workload Comparison 2025
              </h1>
              <p className='text-gray-500 mt-6'>28th Apr 2025</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deals;
