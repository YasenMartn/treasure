import React from 'react';

const Loading = ({type}) => {

  const ProductsSkeleton = () => {
    return(
      <div className='loading'>
        <div className="loadingImage"></div>
        <div className="loadingTitle"></div>
        <div className="loadingPrice"></div>
        <div className="loadingButton"></div>        
      </div>
    )
  }

  const ProductDetailsSkeleton = () => {
    return(
      <div className='detailsLoading'>
        <div className="detailsLoadingLeft">
          <div className="leftImageContainer"></div>
        </div>
        <div className="detailsLoadingRight">
          <div className="rightTitle"></div>
          <div className="rightDesc"></div>
          <div className="rightPrice"></div>
          <div className="rightQuantity"></div>
          <div className="rightButtonsContainer"></div>
        </div>
      </div>
    )
  }

  if (type === "products") return [...Array(20)].map((x, i) => <ProductsSkeleton key={i} /> ) ;
  if (type === "productDetails") return <ProductDetailsSkeleton />;

}

export default Loading