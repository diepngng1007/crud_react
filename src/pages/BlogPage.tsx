import React from 'react'

function BlogPage() {
  return (
    <div>
      <div className='banner'>
        <img src="/src/assets/img/Head-section.png" alt="" />
      </div>
      <div className='content-2-cols'>
        <div className='content-1-cols' id='col'>
            <h2 style={{lineHeight: "45px"}}>long established</h2>
            <p style={{color: "#718096"}}>It is a long established fact that a reader will be distracted <br /> by the readable content of a page when looking at its layout. <br /> The point of using Lorem Ipsum is that....</p>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <small>May 20th 2020</small>
                <h6>Read more</h6>
            </div>
        </div>
        <div className='content-1-cols'>
            <img src="/src/assets/img/image 1.png" alt="" />
        </div>
      </div>
      <div className='content-3-cols'>
        <div className='content-1-col'>
            <img src="/src/assets/img/image 2.png" alt="" />
            <div style={{padding: "20px"}}>
                <h5>long established</h5>
                <p style={{color: "#718096"}}>It is a long established fact that a <br /> reader will be distracted by the <br /> readable content of a page when <br /> looking at its layout. The point of using <br /> Lorem Ipsum is that....</p>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <small>May 20th 2020</small>
                    <h6>Read more</h6>
                </div>
            </div>
        </div>
        <div className='content-1-col'>
            <img src="/src/assets/img/image 4.png" alt="" />
            <div style={{padding: "20px"}}>
                <h5>long established</h5>
                <p style={{color: "#718096"}}>It is a long established fact that a <br /> reader will be distracted by the <br /> readable content of a page when <br /> looking at its layout. The point of using <br /> Lorem Ipsum is that....</p>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <small>May 20th 2020</small>
                    <h6>Read more</h6>
                </div>
            </div>
        </div>
        <div className='content-1-col'>
            <img src="/src/assets/img/image 5.png" alt="" />
            <div style={{padding: "20px"}}>
                <h5>long established</h5>
                <p style={{color: "#718096"}}>It is a long established fact that a <br /> reader will be distracted by the <br /> readable content of a page when <br /> looking at its layout. The point of using <br /> Lorem Ipsum is that....</p>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <small>May 20th 2020</small>
                    <h6>Read more</h6>
                </div>
            </div>
        </div>
      </div>
      <div className='content-question'>
        <div className='content-left' style={{backgroundColor: "#F7FAFC", padding: "40px"}}>
            <h1 style={{paddingBottom: "20px"}}>What is Lorem Ipsum?</h1>
            <p style={{color: "#718096"}}>It is a long established fact that a reader <br /> will be distracted by the readable  <br />content of a page when looking at its  <br /> layout. The point of using Lorem Ipsum is <br /> that it has a more-or-less normal <br /> distribution...</p>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <span>May 20</span>
                <strong>Read more</strong>
            </div>
        </div>
        <div className='content-right'>
            <img src="/src/assets/img/image 7.png" alt="" />
        </div>
      </div>
      <div className='more'>
        <button style={{backgroundColor: "#7529d9", fontSize: "20px", borderRadius: "8px", margin: "15px", border: "none", color: "white",padding:"15px"}}>See more <img src="/src/assets/img/arrow-down-circle-fill 1.png"  style={{paddingLeft: "10px", width: "40px"}} alt="" /></button>
      </div>
      <hr />
    </div>
  )
}

export default BlogPage
