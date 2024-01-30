import { ApiFilled, ClearOutlined, FastBackwardOutlined, MobileFilled } from '@ant-design/icons';
import React from 'react'
import { FaFigma, FaGoodreads, FaSearchengin } from "react-icons/fa6";
import Visibale from '../../HighOrderComponent/withVisibale';

const PowerfulFeatures = () => {
    const Data: any = [
           { title: "SEO Friendly", icon: <FaSearchengin /> }
        , { title: "REST API", icon: <ApiFilled /> }
        , { title: "Multi-Vendor Support", icon: <ApiFilled /> }
        , { title: "Optimized for Mobile", icon: <MobileFilled /> }
        , { title: "Clean Code", icon: <ClearOutlined /> }
        , { title: "Fast", icon: <FastBackwardOutlined /> }
        , { title: "Figma Ready", icon: <FaFigma /> }
                , { title: "performance", icon: <FaGoodreads /> }



    ]
    return (
        <div className="PowerfulFeatures" id='features'>
            <div className="in">
                <h1>POWERFUL FEATURES</h1>
                <Visibale className='Features'>
                    {Data?.map((item: any, index: number) => {
                        return (
                            <div className="Feature" key={index}>

                                {item?.icon}
                                <h1>

                                {item?.title}
                                </h1>

                            </div>

                        )
                    })}
                </Visibale>
            </div>
        </div>
    )
}

export default PowerfulFeatures