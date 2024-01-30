import React from 'react'
import { Link } from 'react-router-dom'
import { MenuFoldOutlined } from '@ant-design/icons'
import WithDrawer from '../../HighOrderComponent/WithDrawer'
import { Button } from 'antd'
import { useTranslation } from 'react-i18next'

const TopBar = () => {
  const [t] = useTranslation()
  return (

    <header className='Header'>
      <Link to={'/'} >  <h1>{t("KarimAlden")}</h1> </Link>
      <nav>
        <ul className='Links'>
          <li> <a href='#home'>{t("Home")}</a>   </li>
          <li> <a href='#features'>{t("Features")}</a>   </li>
          <li> <a href='#aboutus'>{t("aboutus")}</a> </li>
                    <li> <a href='#questions'>{t("questions")}</a> </li>

          <li> <a href='#contact'>{t("ContactUs")}</a>   </li>

        </ul>
        <div className='MenuNav'>
          <WithDrawer
            title="Links"
            width={250}
            button={<Button icon={<MenuFoldOutlined />} type="primary" />}
          >

            <ul className='DrawerLinks'>
              <li> <a href='#home'>{t("Home")}</a>   </li>
              <li> <a href='#features'>{t("Features")}</a>   </li>
              <li> <a href='#aboutus'>{t("aboutus")}</a> </li>
                                  <li> <a href='#questions'>{t("questions")}</a> </li>

              <li> <a href='#contact'>{t("ContactUs")}</a>   </li>


            </ul>
          </WithDrawer>



        </div>
      </nav>
    </header>
  )
}

export default TopBar