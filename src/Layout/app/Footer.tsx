import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const [t] = useTranslation()
  return (
    <div className='Footer'>
      <div>
        <ul>
          <li> <a href='#home'>{t("Home")}</a>   </li>
          <li> <a href='#features'>{t("Features")}</a>   </li>
          <li> <a href='#aboutus'>{t("aboutus")}</a> </li>
          <li> <a href='#questions'>{t("questions")}</a> </li>

          <li> <a href='#contact'>{t("ContactUs")}</a>   </li>

        </ul>
      </div>
      <div>
        Copyright ©2023 All rights reserved | This template is made with  by KarimAldeenLibrary.com
      </div>

    </div>
  )
}

export default Footer