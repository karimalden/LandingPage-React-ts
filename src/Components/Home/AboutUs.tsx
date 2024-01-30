import React from 'react'
import Visibale from '../../HighOrderComponent/withVisibale';

const AboutUs = () => {

    return (
            <Visibale className='AboutUs' id='aboutus'>
                <div className="AboutUs_Left">
                    <h1>What Deferent About Us ? </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Consequuntur libero fuga earum autem quis explicabo ut molestiae veniam!</p>
                </div>
                <div className="AboutUs_Right">
                    {[1, 2, 3]?.map((item: any, index: number) => {
                        return (
                            <div key={index}>
                                <span> 01 </span>
                                <div>
                                    <h5>  Lorem ipsum dolor sit. </h5>
                                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla deserunt itaque
                                        dolorem nobis aut deleniti, cupiditate cum, ipsa eius vero, hic dignissimos et placeat! Nobis? </p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </Visibale>

    )
}

export default AboutUs
