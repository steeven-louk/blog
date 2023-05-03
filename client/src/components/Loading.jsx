import React from 'react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export const LoadingCard = () => {
  return (
    <SkeletonTheme baseColor='#204020' highlightColor='#FCEE21'>
    <div className="card border-0">
    <div className="card-header">
      <Skeleton height={150} />
     </div>
     <div className="card-body">
         <h5 className="card-title"><Skeleton/></h5>

         <p className="card-text"> <Skeleton  count={3}/></p>
     </div>
     <div className="card-footer d-flex justify-content-between">
       <span><Skeleton width={100} /></span>
       <span><Skeleton width={60}/></span>
     </div>
 </div>
 </SkeletonTheme>
  )
}


export const SinglePageLoading = ()=>{
  return (
    <SkeletonTheme  baseColor='#204020' highlightColor='#FCEE21'>
      <div className="singlePage container">
    
        <div className="d-flex" >
          <h4> <Skeleton width={250} /> </h4>
        </div>

      <div className="my-4 d-flex justify-content-between align-items-center">
        <div className="d-inline-flex align-items-center">
          <Skeleton circle={true} width={50} height={50} />
          <span className="ms-2"><Skeleton width={100} /></span>
        </div>
        <Skeleton width={50}/>
      </div>

        <Skeleton height={350} />
        <Skeleton className="mt-5" height={350} />
        <br />
        <hr />
      </div>
    </SkeletonTheme>
  )
}
